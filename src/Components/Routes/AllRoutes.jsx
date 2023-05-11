import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from '../../Pages/Home/Home';
import { Login } from '../../Pages/Login/Login';
import { Signup } from '../../Pages/Signup/Signup';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}
