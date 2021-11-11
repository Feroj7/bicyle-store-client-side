import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure, You want to delete this order?");
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
            <h2>Manage All Orders</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Customer Email</th>
                        <th>Customer Address</th>
                        <th>Phone No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.productName}</td>
                            <td>{order.price}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td>{order.phone}</td>
                            <td><Button onClick={() => handleDeleteOrder(order._id)} variant="danger">Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;