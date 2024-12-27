import {useCallback, useRef, useState} from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Webcam from 'react-webcam';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { GrPowerReset } from "react-icons/gr";

const getProfile = async () => {
    const response = await fetch('http://localhost:4000/api/profile');
    if(!response.ok){
        throw new Error('Faild to fetch data');
    }

    const data = await response.json();
    return data;
}

const createProfile = async ({data, capturedImage}) => {
    await fetch('http://localhost:4000/api/profile', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data, capturedImage})
    })
}

const Capture = ({data}) => {

    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const queryClient = useQueryClient();

    const handleCapture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);

    }, [webcamRef]);

    const createMutation = useMutation({
        mutationFn: createProfile, 
        onSettled: () => {
            queryClient.invalidateQueries(['profile'])
            setCapturedImage(null)
        }
    })

    const handleCreateProfile = () => {
        createMutation.mutate({data, capturedImage});
    }
 
    const container = <div className='w-full h-[100vh] flex flex-col justify-center items-center bg-[#ECF8FF] gap-[2rem]'>
        <div className='w-[45%] h-[65%] flex flex-col  items-center bg-white rounded-[20px] gap-4 p-10'>
            <h1 className='font-mono text-[25px] font-semibold text-gray-700'>TAKE A PHOTO</h1>
            {capturedImage ?
                <img 
                    src={capturedImage} alt="image" 
                />:
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat='image/jpeg'
                    width='90%'
                    mirrored={true}
                />
            }
        </div>
        <div className='w-[45%] h-[5rem] flex flex-row justify-end items-center bg-white rounded-[20px] p-10 gap-3'>
            <button className='w-10 text-[30px] text-gray-700' onClick={() => setCapturedImage(null)}>
                <GrPowerReset/>
            </button>
            <Link to='/register'>
                <Button color="danger" variant="flat">
                    Cancel
                </Button>
            </Link>

            {capturedImage ?

                <Button color="primary" type="button" onPress={handleCreateProfile}>
                    Finish
                </Button>:
                <Button color="primary" type="button" onPress={handleCapture}>
                    Capture
                </Button>
            }

        </div>    

    </div>

    return container;
}

export default Capture