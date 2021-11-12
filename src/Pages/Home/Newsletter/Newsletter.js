import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Newsletter = () => {


    const newsletterStyle = {
        backgroundColor: '#FCB704',
        padding: '90px',
        borderRadius: '4px',
        position: 'relative',
        zIndex: 2,
        bottom: "-30px"
    }

    return (
        <div>
            <Container style={newsletterStyle} >
                <Row>
                    <Col xs={12} md={8} className="text-start">
                        <h6 className="text-success">NEWSLETTER</h6>
                        <h1>Join Our Newsletter</h1>
                        <p className="text-white">Subscribe with your email to get exclusive offers from us.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email address"
                                />
                            </Form.Group>
                            <Button variant="dark" className="w-100">Subscribe Now</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Newsletter;