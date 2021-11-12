import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
                            <Button variant="warning" className="mt-5">Shop Now</Button>
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