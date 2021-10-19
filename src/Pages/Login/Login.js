import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const { signInUsingGoogle, signInUsingEmailAndPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const haldleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const auth = getAuth();
    const handleLogin = e => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push("/home");
                setEmail(email);
                setPassword(password);
                // console.log(email, password);
            })
            .catch(error => {
                setError(error.message);
            })
        e.preventDefault();
    }

    return (

        <div className=" container">
            <div className="Login">
                <Form onSubmit={handleLogin}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button onClick={signInUsingEmailAndPassword} size="lg" type="submit" className="mt-4 w-100">
                        Login
                    </Button>
                </Form>
                <p className="mt-4 mb-2 fw-bold">Or Login With</p>
                <div className=" container">
                    <button onClick={haldleGoogleLogin} size="lg" type="submit" className="fw-bold btn btn-success opacity-50">
                        Google
                    </button>
                </div>
                <div className=" mt-4">
                    <p>Not a Member? <Link to="/register">Create Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;