import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const OrderDetail = () => {

    const { user } = useAuth();
    const { cycleId } = useParams();
    const [cycle, setCycle] = useState({});

    const initialInfo = { CustomerName: user.displayName, email: user.email, address: "", city: "", phone: "" };
    const [bookingData, setBookingData] = useState(initialInfo);


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
        setBookingData(newBookingData);
        console.log(newBookingData);
    }

    const handleFormSubmit = e => {
        //send data to server
        bookingData.price = cycle?.price;
        bookingData.productName = cycle?.name;
        bookingData.image = cycle?.img;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Your Order Placed Successfully');
                };
            })
        e.preventDefault();
    }

    return (
        <div className="my-5 pt-5">
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
                                        defaultValue={user?.displayName} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        onBlur={handleOnBlur}
                                        type="email"
                                        defaultValue={user?.email} />
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
                                        placeholder="Enter your city"
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

export default OrderDetail;