import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Cycles = () => {

    const [cycles, setCycles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cycles')
            .then(res => res.json())
            .then(data => setCycles(data.slice(0, 6)))
    }, []);

    return (
        <div className="my-5">
            <h2>Popular Cycles {cycles.length}</h2>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        cycles.map(cycle => <Col key={cycle?._id}>
                            <Card>
                                <Card.Img variant="top" src={cycle?.img} />
                                <Card.Body>
                                    <Card.Title>{cycle?.name}</Card.Title>
                                    <Card.Text>
                                        {cycle?.desc.slice(0, 130)}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <h5>BDT {cycle?.price} TK</h5>
                                        <NavLink to={`/order/${cycle._id}`}>
                                            <Button>Buy Now</Button>
                                        </NavLink>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Cycles;

