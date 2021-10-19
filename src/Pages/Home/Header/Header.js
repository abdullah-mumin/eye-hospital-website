import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar aria-controls="navbarscroll" bg="primary" variant="light">
                <Container className="p-lg-3 p-md-3 p-sm-3 p-3">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-3 text-start">
                        <Navbar.Brand>
                            <NavLink to="/home" className="text-white text-decoration-none fw-bold">
                                Youth Eye
                            </NavLink>
                        </Navbar.Brand>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                        <Nav className="gap-1 gap-lg-3 gap-md-3 gap-sm-1" activeKey="/home">
                            <NavLink className="text-white text-decoration-none text-end" to="/home">Home</NavLink>
                            <NavLink className="text-white text-decoration-none" to="/services">Services</NavLink>
                            <NavLink className="text-white text-decoration-none" to="/branches">Branches</NavLink>
                            <NavLink className="text-white text-decoration-none" to="/about">About</NavLink>
                            {user.email && <span style={{ color: 'white' }}> {user.displayName} </span>}
                            {
                                user.email ?
                                    <NavLink className="text-white text-decoration-none" onClick={logOut} to="/home">Log Out</NavLink>
                                    :
                                    <NavLink className="text-white text-decoration-none" to="/login">Login</NavLink>
                            }
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;