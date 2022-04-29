import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import image1 from '../../../../images/right-image-search.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <Row className='text-white'>
                    <Col xs={12} md={5}>
                        <h4>Choose Your</h4>
                        <h1 className='display-3'>Dream Car</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, eligendi officia? Aspernatur, ullam accusantium voluptatem labore atque consequatur obcaecati vero officiis nesciunt perferendis non possimus nam architecto nobis recusandae repellendus.</p>
                    </Col>
                    <Col xs={12} md={7} className=''>
                        <div className=''>
                            <img className='w-100' src={image1} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;