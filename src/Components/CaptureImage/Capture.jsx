import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

export const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = ({uploadImage}) => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    
  };
  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
  
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='webCam'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        required
      />
      <button onClick={capture}>Capture photo</button>
      {image && (
        <img
          src={image}
          alt="captured face"
          width="300"
          height="300"
        />
      )}
    </div>
  );
};
