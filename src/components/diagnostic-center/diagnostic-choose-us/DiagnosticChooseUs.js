import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './DiagnosticChooseUs.css';
const DiagnosticChooseUs = () => {
    return (
        <div className="my-5">
            <Container>
                <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="p-5">
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        
                        <div>
                        <h6 className='diagnosis-choose-us-subtitle'>About Clinic</h6>
                        <h1 className='mb-4 diagnosis-choose-us-title'>Why patients choose our center</h1>
                        <p className='diagnosis-choose-us-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit harum nisi magni voluptate fuga ducimus consequuntur excepturi molestias impedit corrupti exercitationem, eveniet dolorem dolor amet modi in perferendis! Possimus, sint.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <div>

                        <h6 className='diagnosis-choose-us-subtitle'>Clinic Skills</h6>
                        <h1 className="diagnosis-choose-us-title" style={{marginBottom:"80px"}}>Our Accuracy</h1>
                        <div>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" >Neurosurgery</div>
                            </div>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{ width: "68%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">MRI Diagnostic</div>
                            </div>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Cardiology</div>
                            </div>
                        </div>

                        </div>
                        
                    </Col>
                </Row>
                </div>
            </Container>

        </div>
    );
};

export default DiagnosticChooseUs;