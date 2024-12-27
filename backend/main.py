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

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins
socket_io = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')
Payload.max_decode_packets = 500

executor = ThreadPoolExecutor(max_workers=4)

def decode_image(data):
    # Decode the Base64 string to image bytes
    image_data = base64.b64decode(data.split(',')[1])  # Split in case of data URI scheme
    np_image = np.frombuffer(image_data, dtype=np.uint8)
    image = cv2.imdecode(np_image, cv2.IMREAD_COLOR)

    return image


def compare_face(data):

    database = db_connect()
    profiles = database.find()

    # Decode Base64 Image
    base64_image = data
    unknown = face_recognition.face_encodings(decode_image(base64_image))

    if not unknown:
        return socket_io.emit('receive_from_flask','No faces found in the image')

    for profile in profiles:

        existing = face_recognition.face_encodings(decode_image(profile['image']))
        matches = face_recognition.compare_faces(existing, unknown[0])

        if(matches):
            
            socket_io.emit('receive_from_flask')
            return

    socket_io.emit('receive_from_flask', 'Match not found')
    

@socket_io.on('send_to_flask')
def handle_send_to_flask(data):
    executor.submit(compare_face, data)

if __name__ == '__main__':
    socket_io.run(app, debug=True, host='0.0.0.0', port=5000, allow_unsafe_werkzeug=True)