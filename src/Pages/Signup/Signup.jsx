import React, { useState, useRef } from 'react';
import { BsCameraFill } from 'react-icons/bs';
import Webcam from 'react-webcam';
import axios from 'axios';
import './Signup.css'

const initObj = {
  email:"",
  image:""
}

export const Signup = () => {
  const[openCamera, setOpenCamera] = useState(false);
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [data, setData] = useState(initObj);
  const [error, setError] = useState(false);

  const handleCamera = () =>{
    if(!openCamera) {
      setOpenCamera(true);
    } else {
      setOpenCamera(false);
    }
  }
  const capture = (e) => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const uploadImage = (img) => {
    data.image = image;
    alert('Image Uploaded Sucessfully!')
  };

  const handleChange = (e) => {
    const {name,value}= e.target;
    setData({...data,[name]:value});
  }

  // let base64String = image
  // let imageUrl = '';
  // let byteCharacters = atob(base64String.split(',')[1]);
  // let byteNumbers = new Array(byteCharacters.length);
  // for (let i = 0; i < byteCharacters.length; i++) {
  //   byteNumbers[i] = byteCharacters.charCodeAt(i);
  // }
  // let byteArray = new Uint8Array(byteNumbers);
  // let blob = new Blob([byteArray], { type: 'image/png' });

  // let reader = new FileReader();
  // reader.readAsDataURL(blob);
  // reader.onload = function() {
  //   imageUrl = reader.result;
  // }
  // console.log(imageUrl, 'imageUrl')

  const handleSubmit = () => {
    if(data.email!=="" && data.image!=='') {
      // Will Make Post Request.
    } else{
      setError(true);
    }
  }
  
  return (
    <div className='register'>
      {openCamera && (
        <div className='webCam' >
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <button className='btn btn-info captureBtn' onClick={capture}>Capture photo</button>
          {image && (
            <img
              src={image}
              alt="captured face"
              width="300"
              height="300"
            />
          )}
        </div>
      )}
      <div className='signup'>
        <form>
            <label htmlFor="email">Email</label>
            <input name='email' value={initObj.email} type="email" placeholder='Enter Your Email' onChange={handleChange} className='email'/><br /><br />
            {/* <label htmlFor="file">Choose a file to upload:</label>
            <input name="image" value={initObj.image} onChange={handleChange} type="file" id="file" className='picture'></input>
            <p className='OR'>OR</p> */}
            <p>Upload Your Image</p>
            <BsCameraFill onClick={handleCamera} className='cam'/>
            <button disabled={!openCamera} className='submit' onClick={uploadImage} type="button">Upload</button>
            <button className='submit' type="button" onClick={handleSubmit} name="submit">Signup</button>
        </form>
        {error && <p className='error'>Please Enter Email & Click Picture</p>}
      </div>
    </div>
  )
}
