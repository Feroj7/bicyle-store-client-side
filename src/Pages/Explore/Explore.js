import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Explore = () => {

    const [cycles, setCycles] = useState([]);

    useEffect(() => {
        fetch('https://young-falls-65140.herokuapp.com/cycles')
            .then(res => res.json())
            .then(data => setCycles(data))
    }, []);

    return (
        <div className="pt-5">
            <Header></Header>
            <div className="my-5">
                <h1>Top Rated Cycles</h1>
                <p className="mb-5">Choose best cycle from here</p>
                <Container>
                    <Row xs={1} md={3} className="g-5">
                        {
                            cycles.map(cycle => <div className="cycle-card" key={cycle?._id}>
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
            <Footer></Footer>
        </div>
    );
};

export default Explore;

// {
//     cycles.map(cycle => <Col key={cycle?._id}>
//         <Card className="h-100">
//             <div className="d-flex justify-content-evenly">
//                 <Card.Img className="img-fluid w-50" variant="top" src={cycle?.img} />
//                 <div className="mt-3 me-3">
//                     <h5>BDT {cycle?.price} TK</h5>
//                     <NavLink to={`/order/${cycle._id}`}>
//                         <Button>Buy Now</Button>
//                     </NavLink>
//                 </div>
//             </div>
//             <Card.Body>
//                 <div>
//                     <Card.Title>{cycle?.name}</Card.Title>
//                     <Card.Text>
//                         {cycle?.desc.slice(0, 130)}
//                     </Card.Text>
//                 </div>

//             </Card.Body>
//         </Card>
//     </Col>)
// }