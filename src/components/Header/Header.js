import React from 'react';
import logo from '../../logo.svg'
import { Container, Image, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='header' expand="lg">
        <Container>
            <Navbar.Brand href="#home"><Image src={logo}></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Link className='fw-bold text-white text-decoration-none px-3' to="/">Home</Link>
                <Link className='fw-bold text-white text-decoration-none px-3' to="/order">Order</Link>
                <Link className='fw-bold text-white text-decoration-none px-3' to="">Inventory</Link>
                <Link className='fw-bold text-white text-decoration-none px-3' to="">About</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;