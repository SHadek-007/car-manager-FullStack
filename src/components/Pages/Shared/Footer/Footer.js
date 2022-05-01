import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../../../../images/social-logo/facebook.png';
import twiter from '../../../../images/social-logo/twitter.png';
import linkedin from '../../../../images/social-logo/linkedin.png';
import github from '../../../../images/social-logo/github.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer1 text-muted'>
            <Container>
                <Row className='footer-style py-4'>
                    <Col sm={12} md={4}>
                        <div className='mx-auto'>
                        <h5 className='text-white'>CONTACT INFO</h5>
                        <p><small>We support to customize minor request as javascript conflict, css issue, etc. Enjoy the <br /> ultimate web design themes. Every layout is <br /> super flexible, amazingly powerful and <br /> visual by nature</small></p>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <small>via G. Cesare 87/A 47838<br />Riccione (RN) Italia</small> <br />
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <small>+0123456789</small> <br />
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <small>info@autoshowroom.com</small> <br />
                        </div> 
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='mx-auto'>
                        <h5 className='text-white'>OUR COMPANY</h5>
                        <p><small>Our Experince</small></p>
                        <p><small>Pricing & Pricelist</small></p>
                        <p><small>Solutions</small></p>
                        <p><small>Our Services</small></p>
                        <p><small>Clients</small></p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div>
                        <h5 className='text-white'>SOCIAL NETWORKS</h5>
                        <p><small>Visit DentiCare on these social links <br /> and connect with me. Make sure to <br /> follow my accounts for regular updates.</small></p>
                        <div className='mt-3'>
                            <img className='me-4' src={facebook} alt="" />
                            <img className='ms-3' src={twiter} alt="" />
                            <img className='ms-5' src={linkedin} alt="" />
                            <img className='ms-5' src={github} alt="" />
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='footer2'>
                <Container>
                    <Row className='text-white pt-4'>
                        <Col xs={12} md={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                            <p className='me-3'>Privacy & Policy</p>
                            <p className='ms-5'>Privacy Center</p>
                            <p className='ms-5'>Cookies</p>
                            <p className='ms-5'>About US</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='d-flex justify-content-center'>Copyright &copy; 2022 -carmanager.com</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;