import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import engine from '../../../images/services/car-engine.png';
import inspection from '../../../images/services/customer-support.png';
import serviceCar from '../../../images/services/service-car.png';
import oilChange from '../../../images/services/oil-change.png';
import steeringWheel from '../../../images/services/steering-wheel.png';
import './Services.css';

const Services = () => {
    return (
        <div>
            <Container>
                <h2 className='text-center mt-5 mb-4'>Our <span className='main-color'>Feature</span> Services</h2>
                <p className='text-center my-3'>Get the best Results for Canadian Car Dealerships. Find what you are looking for! 99% Match on Canadian Car Dealerships.</p>
                <div className='py-3 mt-5'>
                    <Row>
                        <Col xs={12} md={4}>
                            <Row>
                                <Col xs={12} md={8} className='order-en'>
                                <div className='' >
                                    <h5 className=' name-text'>Engine Upgrades</h5>
                                    <p><small>We have the right caring, experience and dedicated professional for you.</small></p>
                                </div>
                                </Col>
                                <Col xs={12} md={4} className=' d-flex align-items-center'>
                                    <div className=' border rounded-circle p-2 shadow'>
                                    <img src={engine} alt="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs={12} md={8} className='order-in'>
                                <div>
                                    <h5 className=' name-text'>Car Inspection</h5>
                                    <p><small>Vehicle inspection is a procedure mandated by national or subnational governments in many countries.</small></p>
                                </div>
                                </Col>
                                <Col xs={12} md={4} className='d-flex align-items-center'>
                                    <div className='border rounded-circle p-2 shadow'>
                                    <img src={inspection} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} className='order2 d-flex align-items-center'>
                            <div>
                                <img className='w-100' src={serviceCar} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                        <Row>
                                <Col xs={12} md={8} className='order-2'>
                                <div>
                                    <h5 className=' name-text'>Car Oil Change</h5>
                                    <p><small>Buy the Right Oil and Oil Filter While it might seem like a money-saver, an economy oil filter is typic</small></p>
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
                                    <h5 className=' name-text'>Power Steering</h5>
                                    <p><small>Power steering is a system that reduces the effort required of the driver to turn the steering wheel.</small></p>
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