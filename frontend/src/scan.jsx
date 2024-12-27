import {useRef, useState, useCallback, useEffect} from 'react'
import Webcam from "react-webcam"
import io from 'socket.io-client';

const socket = io('http://127.0.0.1:5000');

const Scan = () => {
    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    const handleCapture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc); 
    }, [webcamRef]);

    useEffect(() => {
        socket.on('receive_from_flask', (response) => {
            console.log(response);
        });

        return () => {
            socket.off('receive_from_flask'); // Cleanup event listener on unmount
        };
    }, []);
    

    useEffect(() => {
        const interval = setInterval(() => {
            handleCapture();
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [handleCapture]);

    useEffect(() => {
        if (capturedImage) {
            socket.emit('send_to_flask', capturedImage);
        }
    }, [capturedImage]);

    const camera = <div className='w-full h-[100vh] flex flex-col justify-center items-center'>

        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            width='50%'
            mirrored={true}
        />  
    </div>

    return (<>
        {camera}
    </>)
}

export default Scan