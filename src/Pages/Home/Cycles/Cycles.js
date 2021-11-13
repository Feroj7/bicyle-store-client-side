import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Cycles.css';

const Cycles = () => {

    const [cycles, setCycles] = useState([]);

    useEffect(() => {
        fetch('https://young-falls-65140.herokuapp.com/cycles')
            .then(res => res.json())
            .then(data => setCycles(data.slice(0, 6)))
    }, []);

    return (
        <div className="my-5 py-5">
            <h6 className="text-success">FEATURED BICYCLES</h6>
            <h1 className="mb-5">Find Your Next Bike</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        cycles.map(cycle => <div className="cycle-card h-100" key={cycle?._id}>
                            <div className="border py-3">
                                <img className="img-fluid w-75" src={cycle?.img} alt="cycle" />
                            </div>
                            <div className="text-start p-4 cycle-card-text">
                                <h4>{cycle?.name}</h4>
                                <p>{cycle?.desc.slice(0, 90)}</p>
                                <div className="d-flex justify-content-between">
                                    <h5>৳ {cycle?.price}</h5>
                                    <NavLink to={`/order/${cycle._id}`}>
                                        <Button variant="warning">Buy Now</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Cycles;

