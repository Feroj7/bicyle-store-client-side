import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email]);

    const handleCancelOrder = id => {
        const proceed = window.confirm("Are you sure, You want to cancel this order?");
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }

    return (
        <div className="mt-5 pt-5">
            <h2>You have {orders?.length} Orders</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    orders.map(order => <Col key={order._id}>
                        <Card>
                            <Card.Img className="img-fluid w-50 m-auto" variant="top" src={order.image} />
                            <Card.Body>
                                <Card.Title>{order.productName}</Card.Title>
                                <h5>Price: {order.price}</h5>
                                <Button
                                    onClick={() => handleCancelOrder(order._id)} variant="danger">
                                    Cancel
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;