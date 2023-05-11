import React, { useState } from 'react';

function CameraCapture() {
  const [stream, setStream] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const videoRef = React.createRef();

    const openCamera = () => {
        // Prompt the user to access the camera
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            setStream(true);
            videoRef.current.srcObject = stream;
        })
        .catch(error => {
            console.error('Could not access camera', error);
        });

        // Clean up the camera stream when the component unmounts
        return () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        };
    }

  function capturePhoto() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;
    canvas.width = width;
    canvas.height = height;
    context.drawImage(videoRef.current, 0, 0, width, height);
    const photoUrl = canvas.toDataURL();
    setPreviewUrl(photoUrl);
  }

  if (!stream) {
    return <button onClick={openCamera}>Camera</button> ;
  }

  return (
    <div>
      <video ref={videoRef}></video>
      <button className='takePicture' onClick={capturePhoto}>Take Photo</button>
      {previewUrl && <img src={previewUrl} alt="Captured photo" />}
    </div>
  );
}

export default CameraCapture;
