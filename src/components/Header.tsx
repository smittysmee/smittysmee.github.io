import React from 'react';
import { Navbar, Nav ***REMOVED*** from 'react-bootstrap';
import { LinkContainer ***REMOVED*** from 'react-router-bootstrap';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={logo***REMOVED***
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="ButterFlat.io logo"
        />{' '***REMOVED***
        ButterFlat.io
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
***REMOVED***

export default Header;
