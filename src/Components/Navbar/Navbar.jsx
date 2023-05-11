import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaWhatsappSquare } from 'react-icons/fa';
import { BsTelegram,BsSignal, BsMessenger } from 'react-icons/bs';

export const Navbars = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log('calling modal')
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <NavLink className='logo' to='/'><img src="https://kycweb.com/wp-content/uploads/2019/05/KYC_logo_n1.png" alt="logo" className='logo' /></NavLink >
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
              <NavLink className='instant_services' onClick={openModal}>Instant Services</NavLink> 
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <button className='search'>Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showModal && (
        <div className="modal-container">
          <div className="modal-contents">
            <span className="close-buttons" onClick={closeModal}>&times;</span>
            <h3>Select your preference</h3>
            <div className='chats'>
              <NavLink to="https://web.whatsapp.com/" onClick={closeModal} target="_blank"><FaWhatsappSquare color='#1bd040' fontSize={50}/></NavLink>
              <NavLink to="https://t.me/idfykycbot" onClick={closeModal} target="_blank"><BsTelegram color='#30a3d9' fontSize={50}/></NavLink>
              <NavLink to="https://www.messenger.com/" onClick={closeModal} target="_blank"><BsMessenger color='#0180f7' fontSize={50}/></NavLink>
              <NavLink to="https://signal.org/en/" onClick={closeModal} target="_blank"><BsSignal color='#3872e9' fontSize={50}/></NavLink>
            </div>
            <p className='or'>OR</p>
            <div className='bot'>
              <p className='or'>Send message to <span className='span'>idfykyc</span> bot on Telegram</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
