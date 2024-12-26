import serial

# Configure the serial port for your fingerprint scanner
ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)  # Adjust for your device

# Send commands to the scanner (refer to the device's manual for the exact commands)
ser.write(b'command_to_capture_fingerprint')

# Read the response (e.g., fingerprint image or template)
response = ser.read(1024)  # Adjust the buffer size depending on your device's response size

# Process or save the data as needed
print("Fingerprint data received:", response)

# Close the serial connection
ser.close()