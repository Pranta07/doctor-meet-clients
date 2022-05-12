import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SimpleProcess.css';
const SimpleProcess = () => {
    return (
        <div className='simple-process-container'>
            <Container>
                <div className='diagnosis-header'>
                    <h1 className="diagnosis-title">
                        Simple &#38; Quick Process
                    </h1>
                    <h6 className='diagnosis-title-content'>
                        In just a 4 steps you can book and appointment for diagnosis
                    </h6>
                    <hr />
                </div>
                {/* Second Part */}
                <div>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <div className='simple-process-card text-center'>
                                <div className='simple-process-img-container mb-4 d-flex justify-content-center flex-column align-items-center'>
                                    <img src="https://cdn-icons.flaticon.com/png/128/2721/premium/2721688.png?token=exp=1651262311~hmac=afc3dd866acabbb3c764416721e1ff92" alt="website-demo" style={{width:"50px",height:"50px"}} />
                                </div>
                                <hr className="simple-process-hr mb-2"/>
                                <div className='simple-process-content'>
                                    <h1 className='mb-3 simple-process-content-header'>Go to Website</h1>
                                    <h6 className="simple-process-content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis esse deleniti vero, reprehenderit dolorem?</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <div className='simple-process-card text-center'>
                                <div className='simple-process-img-container mb-4 d-flex justify-content-center flex-column align-items-center'>
                                    <img src="https://cdn-icons-png.flaticon.com/128/1570/1570490.png" alt="website-demo" style={{width:"50px",height:"50px"}} />
                                </div>
                                <hr className="simple-process-hr mb-2"/>
                                <div className='simple-process-content'>
                                    <h1 className='mb-3 simple-process-content-header'>Book a Test</h1>
                                    <h6 className="simple-process-content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis esse deleniti vero, reprehenderit dolorem?</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <div className='simple-process-card text-center'>
                                <div className='simple-process-img-container mb-4 d-flex justify-content-center flex-column align-items-center'>
                                    <img src="https://cdn-icons.flaticon.com/png/128/3214/premium/3214020.png?token=exp=1651263500~hmac=1d274afbdc13449fccadec12289a82f8" alt="website-demo" style={{width:"50px",height:"50px"}} />
                                </div>
                                <hr className="simple-process-hr mb-2"/>
                                <div className='simple-process-content'>
                                    <h1 className='mb-3 simple-process-content-header'>Collect Sample</h1>
                                    <h6 className="simple-process-content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis esse deleniti vero, reprehenderit dolorem?</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <div className='simple-process-card text-center'>
                                <div className='simple-process-img-container mb-4 d-flex justify-content-center flex-column align-items-center'>
                                    <img src="https://cdn-icons-png.flaticon.com/128/2810/2810390.png" alt="website-demo" style={{width:"50px",height:"50px"}} />
                                </div>
                                <hr className="simple-process-hr mb-2"/>
                                <div className='simple-process-content'>
                                    <h1 className='mb-3 simple-process-content-header'>Download Report</h1>
                                    <h6 className="simple-process-content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis esse deleniti vero, reprehenderit dolorem?</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>

        </div>
    );
};

export default SimpleProcess;