import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    const style = {
        textDecoration: "none",
        color: "white",
        marginRight: "10px"
    }


    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <NavLink style={style} to="/home">
                        <Navbar.Brand>Bicycle</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink style={style} to="/home">Home</NavLink>
                            <NavLink style={style} to="/explore">Explore</NavLink>
                            {
                                user.email ?
                                    <div>
                                        <p>{user.name}</p>
                                        <Button onClick={logOut}>Logout</Button>
                                    </div>
                                    :
                                    <NavLink style={style} to="/login">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;