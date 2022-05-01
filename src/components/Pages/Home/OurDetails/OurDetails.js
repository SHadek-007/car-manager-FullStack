import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurDetails.css';

const OurDetails = () => {
    return (
        <div className='bg-style text-white text-center mt-5'>
            <Container>
                <Row className='gy-5'>
                <Col md={3}>
                    <div>
                    <h1 className='fw-bold'>892</h1>
                    <h5>HAPPY CLIENTS</h5>
                    </div>
                </Col> 
                <Col md={3}>
                    <div>
                        <h1 className='fw-bold'>2491</h1>
                        <h5>VEHICLES IN STOCK</h5>
                    </div>
                </Col> <Col md={3}>
                    <div>
                        <h1 className='fw-bold'>790</h1>
                        <h5>AWARDS</h5>
                    </div>
                </Col> 
                <Col md={3}>
                    <div>
                        <h1 className='fw-bold'>555</h1>
                        <h5>DEALER BRANCHES</h5>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurDetails;