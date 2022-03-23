import React from 'react';
import logo from '../../logo.svg'
import { Container, Image, Nav, Navbar} from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='header' expand="lg">
        <Container>
            <Navbar.Brand href="#home"><Image src={logo}></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className='fw-bold text-white' href="#home">Home</Nav.Link>
                <Nav.Link className='fw-bold text-white' href="#link">Order</Nav.Link>
                <Nav.Link className='fw-bold text-white' href="#link">Inventory</Nav.Link>
                <Nav.Link className='fw-bold text-white' href="#link">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;