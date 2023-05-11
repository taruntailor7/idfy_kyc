import React from 'react';
import CameraCapture from '../../Components/CaptureImage/Capture';
import './Signup.css'

export const Signup = () => {
  return (
    <div className='signup'>
        <form method="POST" enctype="multipart/form-data">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Your Email' className='email'/><br /><br />
            <label htmlFor="file">Choose a file to upload:</label>
            <input type="file" name="file" id="file" className='picture'></input>
            <p className='OR'>OR</p>
            <CameraCapture />
            <button className='submit' type="submit" name="submit" cl>Upload</button>
        </form>
    </div>
  )
}
