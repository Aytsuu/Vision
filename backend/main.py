# Import necessary libraries and dependencies
import eventlet
eventlet.monkey_patch()

import cv2 
import base64
import torch
import json
import numpy as np
from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from facenet_pytorch import MTCNN, InceptionResnetV1
from concurrent.futures import ThreadPoolExecutor
from db import db_connect

#Initialize flask and websocket
app = Flask(__name__)
CORS(app, resources={r'/*': {"origin":'*'}}) # Allowed origins
socket = SocketIO(app, cors_allowed_origins="*", async_mode="eventlet") 

#Initialize thread manager
executor = ThreadPoolExecutor(max_workers=10)

#Initialize facenet model for face recognition
mtcnn = MTCNN(keep_all=True, thresholds=[0.6, 0.7, 0.8])
resnet = InceptionResnetV1(pretrained='vggface2').eval()

# Function to decode image
def decode_image(data):
    try:
        # Decode base64 string with numpy and cv2
        image_data = base64.b64decode(data.split(',')[1])
        np_image = np.frombuffer(image_data, dtype=np.uint8)
        image = cv2.imdecode(np_image, cv2.IMREAD_COLOR)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        return image
    except Exception as e:
        print('Error decoding image:',e)
        return None

# Function to recognize a face in an iamge
def face_embedding(image):
    try:
        faces = mtcnn(image) # Look for faces in the image 
        if faces is not None:

            # Get the face embeddings
            face_tensor = faces[0]
            face_tensor = face_tensor.unsqueeze(0)
            embedding = resnet(face_tensor)
            return embedding      
        return None
    except Exception as e:
        print('Error getting the face embedding:',e)
        return None

def compare_faces(data):

    # Initialize database collection
    collection = db_connect()
    profiles = collection.find() # Fetch all data in the collection
    response = None

    # Get the face embedding of the scanned image
    imageBase64 = data
    unknown = face_embedding(decode_image(imageBase64))

    if unknown is None:
        print('No face found')
        return
    
    for profile in profiles:
        print('matching....')
        existing = face_embedding(decode_image(profile['image'])) # Get the face embedding of the image in current iteration 

        if existing is None:
            continue

        # Compare the scanned face and existing face in the db with cosine_similarity
        matches = torch.nn.functional.cosine_similarity(unknown, existing).item() # Result should be between -1 and 1
        print(matches)

        # If the result is greater the threshold or close to 1, face exists.
        threshold = 0.6
        if matches > threshold:
            print('Match found:', profile['_id'])
            response = json.dumps(profile, default=str) # Convert BSON to JSON
            socket.emit('receive_from_flask', response) # Send the data retrieve to the frontend
            break
    
    if response is None:
        socket.emit('receive_from_flask', response) # Sends none to the frontend if no match is found

@socket.on('send_to_flask')
def handle_send_to_flask(data):

    # Manages mult-threading without blocking the requests in flask
    executor.submit(compare_faces, data)

if __name__ == '__main__':
    socket.run(app, debug=True, host='0.0.0.0', allow_unsafe_werkzeug=True)