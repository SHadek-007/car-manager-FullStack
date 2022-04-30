import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import engine from '../../../images/services/car-engine.png';
import inspection from '../../../images/services/customer-support.png';
import serviceCar from '../../../images/services/service-car.png';
import oilChange from '../../../images/services/oil-change.png';
import steeringWheel from '../../../images/services/steering-wheel.png';

const Services = () => {
    return (
        <div>
            <Container>
                <h2 className='text-center mt-5 mb-4'>Our <span className='text-danger'>Feature</span> Services</h2>
                <p className='text-center my-3'>Eu delicata rationibus usu. Vix te putant utroque, ludus fabellas duo eu, his dico ut debet consectetuer.</p>
                <div className='py-3 mt-5'>
                    <Row>
                        <Col xs={12} md={4}>
                            <Row>
                                <Col xs={12} md={8}>
                                <div>
                                    <h5>Engine Upgrades</h5>
                                    <p><small>We have the right caring, experience and dedicated professional for you.</small></p>
                                </div>
                                </Col>
                                <Col xs={12} md={4} className='d-flex align-items-center'>
                                    <div className='border rounded-circle p-2 shadow'>
                                    <img src={engine} alt="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs={12} md={8}>
                                <div>
                                    <h5>Car Inspection</h5>
                                    <p><small>We have the right caring, experience and dedicated professional for you.</small></p>
                                </div>
                                </Col>
                                <Col xs={12} md={4} className='d-flex align-items-center'>
                                    <div className='border rounded-circle p-2 shadow'>
                                    <img src={inspection} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <div>
                                <img className='w-100' src={serviceCar} alt="" />
                            </div>
                        </Col>
                        <Col xs={1} md={4}>
                        <Row>
                                <Col xs={12} md={8} className='order-2'>
                                <div>
                                    <h5>Car Oil Change</h5>
                                    <p><small>We have the right caring, experience and dedicated professional for you.</small></p>
                                </div>
                                </Col>
                                <Col xs={12} md={4} className='d-flex align-items-center order-1'>
                                    <div className='border rounded-circle p-2 shadow'>
                                    <img src={oilChange} alt="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs={12} md={8} className='order-2'>
                                <div>
                                    <h5>Power Steering</h5>
                                    <p><small>We have the right caring, experience and dedicated professional for you.</small></p>
                                </div>
                                </Col>
                                <Col xs={12} md={4} className='d-flex align-items-center order-1'>
                                    <div className='border rounded-circle p-2 shadow'>
                                    <img src={steeringWheel} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Services;