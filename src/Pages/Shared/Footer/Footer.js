import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-area text-white">
            <Container>
                <Row xs={1} lg={3}>
                    <Col className="text-start mb-3">
                        <div className="d-flex mb-4">
                            <h1 className="ms-2">Bicycle</h1>
                        </div>
                        <p>This is a bicycle selling website named Bicycle.You can choose different bicycle from here.</p>
                        <i className="fab fa-whatsapp icon-style"></i>
                        <i className="fab fa-facebook-f icon-style"></i>
                        <i className="fab fa-twitter icon-style"></i>
                        <i className="fab fa-google icon-style"></i>
                    </Col>
                    <Col className="mb-3">
                        <h3 className="mb-3">Support</h3>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Explore</p>
                    </Col>
                    <Col>
                        <h3 className="mb-3">Get In Touch</h3>
                        <div>
                            <h5><i className="fas fa-phone-alt"></i> Phone</h5>
                            <p>01234567890</p>
                        </div>
                        <div>
                            <h5><i className="far fa-envelope"></i> Email</h5>
                            <p>contact@bicycle.com</p>
                        </div>
                        <div>
                            <h5><i className="fas fa-map-marker-alt"></i> Address</h5>
                            <p>North Tower, Uttara</p>
                        </div>
                    </Col>
                </Row>
                <span>Copyright &copy; 2021 || All Rights Reserved By Bicycle</span>
            </Container>
        </div>
    );
};

export default Footer;