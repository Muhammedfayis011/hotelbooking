import React from 'react';
import '../Css/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-light"> 
        <Container>
          <Navbar.Brand href="#home"><i class="fa-solid fa-hotel"></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="cc me-auto ">
             
                  <Nav.Link className='ms-4' href="#home " >Home</Nav.Link>
                  <Nav.Link  className='ms-4' href="#link" >Rooms</Nav.Link>
                  <Nav.Link  className='ms-4' href="#home " >villas</Nav.Link>
                  <Nav.Link  className='ms-4' href="#link" >contact</Nav.Link>
            </Nav>
           
            <a className='login ' href="">Login</a>
          </Navbar.Collapse  >
         
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
