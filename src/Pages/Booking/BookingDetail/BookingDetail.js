import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const BookingDetail = () => {

    const { cycleId } = useParams();
    const [cycle, setCycle] = useState({});
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cycles/${cycleId}`)
            .then(res => res.json())
            .then(data => setCycle(data))
    }, [cycleId]);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingData = { ...bookingData };
        newBookingData[field] = value;
        console.log(newBookingData);
        setBookingData(newBookingData);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="my-5">
            <Container fluid>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <img className="img-fluid" src={cycle?.img} alt="cycle" />
                        <h2>{cycle?.name}</h2>
                        <h1 style={{ backgroundColor: 'black', color: 'white' }}>Description</h1>
                        <p>{cycle?.desc}</p>
                    </Col>
                    <Col>
                        <h2>Buy This Cycle</h2>
                        <Form onSubmit={handleFormSubmit} className="text-start mt-4" style={{ width: '75%', margin: 'auto' }}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        onBlur={handleOnBlur}
                                        type="text"
                                        placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        onBlur={handleOnBlur}
                                        type="email"
                                        placeholder="Email" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    name="address"
                                    onBlur={handleOnBlur}
                                    placeholder="1234 Main St" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        name="City"
                                        onBlur={handleOnBlur}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Phone No</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        onBlur={handleOnBlur}
                                        placeholder="Phone No" />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookingDetail;