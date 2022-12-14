import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')

    const { user, logIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset()

                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGoogleLogin = () => {
        googleSignIn(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Form onSubmit={handleLogin} className='mt-5 m-auto w-25'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Yor Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Link className='ms-3' to='/signup'>Don't have an account? sign up now!</Link>
                <div className='mt-3'>
                    <button onClick={handleGoogleLogin}>Login With Google</button>
                </div>
            </Form>
        </div>
    );
};

export default Login;