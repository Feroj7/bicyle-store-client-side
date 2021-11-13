import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="my-5 py-5">
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col className="text-start">
                        <h6 className="text-success">ABOUT US</h6>
                        <h1>Welcome To Bicycle Store</h1>
                        <p className="text-secondary">Rangpur Metal Industries Ltd. is a sister concern of RFL Group, comprising 35 sister concerns dealing with food and plastic Item. The company has been founded by Ret. Maj. Gen. Amjad Khan Chowdhury In 1981 with a vision, to leveraging the farmer in irrigation as well as ensuring drinking water through Water Pump & Tube well. After that it commenced its operation in different categories & gradually started PVC in 1996 & Plastic line in 2003. </p>
                        <Button variant="outline-dark">Read More <i className="fas fa-long-arrow-alt-right ms-1"></i></Button>
                    </Col>
                    <Col>
                        <iframe className="w-100" width="560" height="315" src="https://www.youtube.com/embed/-jDKJT2dDZQ?start=24" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;

