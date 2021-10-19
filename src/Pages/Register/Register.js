import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';

const Register = () => {
    const { signInUsingGoogle, creatUserInUsingEmailAndPassword } = useAuth();
    // const {creatUserInUsingEmailAndPassword} = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const haldleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    // const haldleCreateLoginWithEmailAndPassword = () => {
    //     creatUserInUsingEmailAndPassword()
    //         .then(result => {
    //             setName(name);
    //             setEmail(email);
    //             setPassword(password);
    //         })
    // }

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        setDisplayName(e.target.value);
    }

    const handleEmailChange = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    const auth = getAuth();
    const handleRegistration = e => {
        // console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // history.push(redirect_uri);
                setError('');
            })
        // .catch(error => {
        //     setError(error.message);
        // })
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="Login">
                <Form onSubmit={handleRegistration}>
                    <Form.Group size="lg" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="displayName"
                            onChange={handleNameChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            onChange={handleEmailChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            // value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </Form.Group>
                    <Button onSubmit={creatUserInUsingEmailAndPassword} size="lg" type="submit" className="mt-4 w-100">
                        Register
                    </Button>
                </Form>
                <div><p className="mt-4 mb-2 fw-bold text-danger">{error}</p></div>
                <p className="mt-4 mb-2 fw-bold">Or Login With</p>
                <div className="container">
                    <button onClick={haldleGoogleLogin} size="lg" type="submit" className="fw-bold btn btn-success opacity-50">
                        Google
                    </button>
                </div>
                <div className=" mt-4">
                    <p>Already have a account! <Link to="/login">login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;