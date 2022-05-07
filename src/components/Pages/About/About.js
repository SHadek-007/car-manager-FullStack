import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <Row className='g-4'>
                    <Col xs={12} md={12} lg={6} className='d-flex align-items-center'>
                        <div>
                            <h2>ABOUT US</h2>
                            <h4 className='my-3'>Car Manager is the best Car Dealer. we have too many Branches.</h4>
                            <p>A car dealership, or vehicle local distribution, is a business that sells new or used cars at the retail level, based on a dealership contract with an automaker or its sales subsidiary. It can also carry a variety of Certified Pre-Owned vehicles. It employs automobile salespeople to sell their automotive vehicles. It may also provide maintenance services for cars, and employ automotive technicians to stock and sell spare automobile parts and process warranty claims.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <div>
                            <img className='w-75' src="https://autocare.dexignlab.com/xhtml/images/worker.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;