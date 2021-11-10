import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Explore = () => {

    const [cycles, setCycles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cycles')
            .then(res => res.json())
            .then(data => setCycles(data))
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="my-5">
                <h2>Popular Cycles {cycles.length}</h2>
                <Container>
                    <Row xs={1} md={2} className="g-5">
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
                                            <NavLink to={`/booking/${cycle?._id}`}>
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
            <Footer></Footer>
        </div>
    );
};

export default Explore;