import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import image1 from '../../../../images/right-image-search.png';
import logo from '../../../../images/logo.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <Row className='text-white gy-5'>
                    <Col xs={12} md={5} className='banner-text'>
                        <h4>We Don't Sell Car,</h4>
                        <h1 className='display-3 fw-bold'>We Sell a Dream</h1>
                        <div className=''>
                        <img src={logo} alt="" />
                        </div>
                        <h5 className='mt-2'>With Thousands of Car <br /> We Have Just The Right One For You.</h5>
                    </Col>
                    <Col xs={12} md={7} className='d-flex align-items-center'>
                        <div className='img-info'>
                            <img className='w-100' src={image1} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;