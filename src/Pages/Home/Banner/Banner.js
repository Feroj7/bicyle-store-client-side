import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-area">
            <Container>
                <Row>
                    <Col>
                        <div className="text-area text-start">
                            <h6>WELCOME</h6>
                            <h1>Full Suspension <br /> Mountain Bikes</h1>
                            <Link to="/explore">
                                <Button variant="warning" className="mt-5">Shop Now <i className="fas fa-long-arrow-alt-right ms-1"></i></Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;