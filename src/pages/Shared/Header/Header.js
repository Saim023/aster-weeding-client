import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to='/'><span className='text-warning'>Aster Wedding Photography</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Link className='mx-3 text-decoration-none text-white' to='/'>Home</Link>
                        <Link className='mx-3 text-decoration-none text-white' to='/blogs'>Blogs</Link>
                    </Nav>
                    <Nav>
                        <Link className='mx-3 text-decoration-none text-white' to='/login'>Login</Link>
                        <Link className='mx-3 text-decoration-none text-white' to="/signup">Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;