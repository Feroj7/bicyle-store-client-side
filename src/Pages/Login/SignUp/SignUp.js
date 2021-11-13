import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';


const SignUp = () => {

    const { authError, registerUser, signInWithGoogle } = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleFormSubmit = e => {
        if (loginData.password !== loginData.password2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your password did not match!',
                timer: 3000
            });
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <Container className="mt-5">
                <h1 className="pt-5">Please Sign Up</h1>
                <Row>
                    <Col lg={6}>
                        <img className="img-fluid" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg" alt="" />
                    </Col>
                    <Col lg={6}>
                        <div className="login-form">
                            <h4 className="mb-4">Bicycle Store</h4>
                            <form onSubmit={handleFormSubmit}>
                                <Form.Control
                                    name="name"
                                    onBlur={handleOnBlur}
                                    className="w-50 m-auto"
                                    type="name"
                                    placeholder="Name"
                                    required />
                                <br />
                                <Form.Control
                                    name="email"
                                    onBlur={handleOnBlur}
                                    className="w-50 m-auto"
                                    type="email"
                                    placeholder="Email"
                                    required />
                                <br />
                                <Form.Control
                                    name="password"
                                    onBlur={handleOnBlur}
                                    className="w-50 m-auto"
                                    type="password"
                                    placeholder="Password"
                                    required />
                                <br />
                                <Form.Control
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    className="w-50 m-auto"
                                    type="password"
                                    placeholder="Re-type password"
                                    required />
                                <br />
                                <input className="mb-3 btn btn-warning w-50" type="submit" value="Sign Up" />
                            </form>
                            <NavLink to="/login">
                                <p className="mb-2">
                                    Already have an account?</p>
                            </NavLink>
                            <Button className="mb-3" onClick={handleGoogleSignIn} variant="primary">
                                <img style={{ width: "30px" }} className="me-2" src="https://i.ibb.co/pd2Nncy/google.png" alt="" />
                                Sign In With Google
                            </Button>
                        </div>
                        {authError && <Alert variant="danger">
                            {authError}
                        </Alert>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;