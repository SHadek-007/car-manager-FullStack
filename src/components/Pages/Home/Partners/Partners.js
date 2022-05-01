import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Partners = () => {
    return (
        <div className='mb-5'>
            <Container>
            <h2 className='text-center mt-5'>Our Partners</h2>
            <p className='text-center my-3'>We'd like to share with you their top quality products and services that you will enjoy.</p>
            <Row className='gy-4 text-center my-4'>
                <Col md={3}>
                    <div>
                        <img src="https://autoshowroom.co/wp-content/uploads/2019/12/Vector-Smart-Object-1.png" alt="" />
                    </div>
                </Col>
                <Col md={3}>
                    <div>
                        <img src="https://autoshowroom.co/wp-content/uploads/2019/12/Vector-Smart-Object1-1.png" alt="" />
                    </div>
                </Col>
                <Col md={3}>
                    <div>
                        <img src="https://autoshowroom.co/wp-content/uploads/2019/12/Vector-Smart-Object2-1.png" alt="" />
                    </div>
                </Col>
                <Col md={3}>
                    <div>
                        <img src="https://autoshowroom.co/wp-content/uploads/2019/12/Vector-Smart-Object3-1.png" alt="" />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Partners;