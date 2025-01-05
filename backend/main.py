import eventlet
eventlet.monkey_patch()

import base64
import cv2
import numpy as np
from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from concurrent.futures import ThreadPoolExecutor
from db import db_connect
import json
from threading import Lock
import torch
from facenet_pytorch import MTCNN, InceptionResnetV1

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins
socket_io = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')

executor = ThreadPoolExecutor(max_workers=10)
lock = Lock()

# Initialize FaceNet
mtcnn = MTCNN(keep_all=True, thresholds=[0.6, 0.7, 0.8])
resnet = InceptionResnetV1(pretrained='vggface2').eval()

def decode_image(data):
    try:
        # Decode the Base64 string to image bytes
        image_data = base64.b64decode(data.split(',')[1])  # Split in case of data URI scheme
        np_image = np.frombuffer(image_data, dtype=np.uint8)
        image = cv2.imdecode(np_image, cv2.IMREAD_COLOR) 
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convert to RGB

        return image
    except Exception as e:
        print("Error decoding image:", e)
        return None

def get_face_embedding(image):
    try:
        faces = mtcnn(image)
        if faces is not None:
            # Get first face embedding
            # Ensure the tensor has the correct shape [1, 3, height, width] (batch size of 1)
            face_tensor = faces[0]  # Get the first face from MTCNN
            face_tensor = face_tensor.unsqueeze(0)  # Add batch dimension: [1, 3, height, width]
            embedding = resnet(face_tensor)  # Pass through InceptionResnetV1
            return embedding
        return None
    except Exception as e:
        print("Error getting face embedding:", e)
        return None 

def compare_face(data):
    
    collection = db_connect()
    profiles = collection.find()
    response = None

    # Decode Base64 Image
    base64_image = data  
    unknown = get_face_embedding(decode_image(base64_image))

    if unknown is None:
        print('No face found')
        return

    with lock:
        for profile in profiles:
            print("Matching with profile...")
            existing = get_face_embedding(decode_image(profile['image']))
            matches = torch.nn.functional.cosine_similarity(unknown, existing).item()
            print(matches)

            if matches > 0.7:
                print("Matched Found: ", profile['_id'])
                response = json.dumps(profile, default=str)
                socket_io.emit('receive_from_flask', response)
                break

    if response is None:
        socket_io.emit('receive_from_flask', response)

@socket_io.on('send_to_flask')
def handle_send_to_flask(data):

    # Call function and passing data using ThreadPoolExecutor
    executor.submit(compare_face, data)

if __name__ == '__main__':
    socket_io.run(app, debug=True, host='0.0.0.0', port=5000, allow_unsafe_werkzeug=True)