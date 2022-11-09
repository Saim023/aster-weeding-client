import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

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
                        {
                            user?.email
                                ?
                                <>
                                    <Link className='mx-3 text-decoration-none text-white' to='/my-reviews'>My reviews</Link>
                                    <Link className='mx-3 text-decoration-none text-white' to='/add-service'>Add service</Link>
                                    <Link onClick={handleLogout} className='mx-3 text-decoration-none text-white'>Logout</Link>

                                    <Link className='mx-3 text-decoration-none text-white'><Image src={user?.photoURL} style={{ height: '30px' }} roundedCircle></Image></Link>
                                    <Link className='mx-3 text-decoration-none text-white'>{user?.displayName}</Link>
                                </>
                                :
                                <>
                                    <Link className='mx-3 text-decoration-none text-white' to='/login'>Login</Link>
                                    <Link className='mx-3 text-decoration-none text-white' to="/signup">Register</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;