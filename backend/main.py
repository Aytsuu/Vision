import eventlet
eventlet.monkey_patch()

import base64
import cv2
import numpy as np
import face_recognition
from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from concurrent.futures import ThreadPoolExecutor
from engineio.payload import Payload
from db import db_connect
import json
from threading import Lock

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins
socket_io = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')
Payload.max_decode_packets = 500

executor = ThreadPoolExecutor(max_workers=10)
lock = Lock()

def decode_image(data):
    # Decode the Base64 string to image bytes
    image_data = base64.b64decode(data.split(',')[1])  # Split in case of data URI scheme
    np_image = np.frombuffer(image_data, dtype=np.uint8)
    image = cv2.imdecode(np_image, cv2.IMREAD_COLOR)
    return image


def compare_face(data):
    collection = db_connect()
    profiles = collection.find()
    response = None

    # Decode Base64 Image
    base64_image = data  
    unknown = face_recognition.face_encodings(decode_image(base64_image))
    
    if not unknown:
        return  # Return if no faces are found in the unknown image

    with lock:
        for profile in profiles:
            print("Matching with profile...")
            existing = face_recognition.face_encodings(decode_image(profile['image']))

            if not existing:
                continue  # Skip this profile if no faces are found

            # Compare using compare_faces
            matches = face_recognition.compare_faces(existing, unknown[0])

            # If no match, calculate the face distance for more detailed comparison
            if not any(matches):
                distances = face_recognition.face_distance(existing, unknown[0])
                closest_match_index = np.argmin(distances)
                if distances[closest_match_index] < 0.5:  # Use an appropriate threshold
                    matches[closest_match_index] = True

            # If a match is found, send the response and break out of the loop
            if any(matches):
                response = json.dumps(profile, default=str)
                socket_io.emit('receive_from_flask', response)
                break

    if response is None:
        socket_io.emit('receive_from_flask', response)

@socket_io.on('send_to_flask')
def handle_send_to_flask(data):
    executor.submit(compare_face, data)

if __name__ == '__main__':
    socket_io.run(app, debug=True, host='0.0.0.0', port=5000, allow_unsafe_werkzeug=True)