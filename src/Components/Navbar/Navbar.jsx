import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaWhatsappSquare } from 'react-icons/fa';
import { BsTelegram,BsSignal, BsMessenger } from 'react-icons/bs';

export const Navbars = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <NavLink className='logo' to='/'><img src="./hdec_logo.png" alt="logo" className='logo' /></NavLink >
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto  mx-5 my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className='link' to='/'>Loan Products</NavLink>
              <NavLink className='link' to='/'>Checklist & Calculators</NavLink>
              <NavLink className='link' to='/'>Deposits</NavLink>
              <NavLink className='link' to='/'>Investors</NavLink>
              <NavLink className='link' to='/'>Contact Us</NavLink>
              <NavLink className='instant_services' onClick={openModal}>✨Start your Digital Journey!✨</NavLink> 
            </Nav>
            <div className="btns">
              <NavLink to='/signup'><button className='search'>Signup</button></NavLink>
              <NavLink to='/login'><button className='search'>Login</button></NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showModal && (
        <div className="modal-container">
          <div className="modal-contents">
            <span className="close-buttons" onClick={closeModal}>&times;</span>
            <h3 className='pref'>Select your favorite chat platform</h3>
            <div className='chats'>
              <NavLink to="https://web.whatsapp.com/" onClick={closeModal} target="_blank"><FaWhatsappSquare color='#1bd040' fontSize={50}/></NavLink>
              <NavLink to="https://t.me/hdec_chat_kycbot" onClick={closeModal} target="_blank"><BsTelegram color='#30a3d9' fontSize={50}/></NavLink>
              <NavLink to="https://www.messenger.com/" onClick={closeModal} target="_blank"><BsMessenger color='#0180f7' fontSize={50}/></NavLink>
              <NavLink to="https://signal.org/en/" onClick={closeModal} target="_blank"><BsSignal color='#3872e9' fontSize={50}/></NavLink>
            </div>
            <p className='or'>OR</p>
            <div className='bot'>
              <p className='or'>Send Hi to <span className='span'>ChatVerify</span> or <span className='span'>+91 9876543210</span></p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
