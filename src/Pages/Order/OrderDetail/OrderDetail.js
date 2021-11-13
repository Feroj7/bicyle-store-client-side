import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const OrderDetail = () => {

    const history = useHistory();
    const { user } = useAuth();
    const { cycleId } = useParams();
    const [cycle, setCycle] = useState({});

    const initialInfo = { customerName: user.displayName, email: user.email, address: "", city: "", phone: "" };
    const [orderData, setOrderData] = useState(initialInfo);


    useEffect(() => {
        fetch(`https://young-falls-65140.herokuapp.com/cycles/${cycleId}`)
            .then(res => res.json())
            .then(data => setCycle(data))
    }, [cycleId]);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderData };
        newOrderData[field] = value;
        setOrderData(newOrderData);
    }

    const handleFormSubmit = e => {
        //send data to server
        orderData.price = cycle?.price;
        orderData.productName = cycle?.name;
        orderData.image = cycle?.img;
        orderData.status = "Pending";
        fetch('https://young-falls-65140.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Order Placed Successfully',
                        showConfirmButton: false,
                        timer: 1300
                    });
                    history.push("/");
                };
            })
        e.preventDefault();
    }

    return (
        <div className="my-5 py-5">
            <Container fluid>
                <Row xs={1} md={2} className="g-4">
                    <Col className="text-start">
                        <img className="img-fluid mb-5" src={cycle?.img} alt="cycle" />
                        <h2 className="mb-3">{cycle?.name}</h2>
                        <h4>৳ {cycle?.price}</h4>
                        <h1 className="p-2 mt-3" style={{ backgroundColor: 'black', color: 'white' }}>Description</h1>
                        <p className="mt-3">{cycle?.desc}</p>
                    </Col>
                    <Col>
                        <h2>Buy {cycle?.name}</h2>
                        <Form onSubmit={handleFormSubmit} className="text-start mt-5" style={{ width: '75%', margin: 'auto' }}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        name="name"
                                        onBlur={handleOnBlur}
                                        type="text"
                                        defaultValue={user?.displayName} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        name="email"
                                        onBlur={handleOnBlur}
                                        type="email"
                                        defaultValue={user?.email} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    required
                                    name="address"
                                    onBlur={handleOnBlur}
                                    placeholder="1234 Main St" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        required
                                        name="City"
                                        onBlur={handleOnBlur}
                                        placeholder="Enter your city"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Phone No</Form.Label>
                                    <Form.Control
                                        required
                                        name="phone"
                                        onBlur={handleOnBlur}
                                        placeholder="Phone No" />
                                </Form.Group>
                            </Row>
                            <Button className="w-100 mt-4" variant="warning" type="submit">
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