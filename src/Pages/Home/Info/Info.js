import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Info.css';

const Info = () => {
    return (
        <div className="info-area">
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <div className="d-flex info-card p-4">
                            <div>
                                <img src="https://i.ibb.co/92HjcP1/present-1-pbr0rkwtf91aeu1tvwzwaem0g3xog7h2k5ufu0f4rk.png" alt="" />
                            </div>
                            <div className="ms-3 text-white text-start">
                                <h3>Special Items</h3>
                                <h6>Browse Items Now</h6>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex info-card p-4">
                            <div>
                                <img src="https://i.ibb.co/Hhv9R9V/download-box-1-pbr0rlunm32kqg0gqfeiuwdh1ht1nwkswahxbadqlc.png" alt="" />
                            </div>
                            <div className="ms-3 text-white text-start">
                                <h3>Just Arrived</h3>
                                <h6>Browse Items Now</h6>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex info-card p-4">
                            <div>
                                <img src="https://i.ibb.co/3z9KRC6/ribbon-2-pbr0rkwtf91aeu1tvwzwaem0g3xog7h2k5ufu0f4rk.png" alt="" />
                            </div>
                            <div className="ms-3 text-white text-start">
                                <h3>Top Selling</h3>
                                <h6>Browse Items Now</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Info;