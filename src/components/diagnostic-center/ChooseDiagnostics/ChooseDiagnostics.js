import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChooseDiagnostic from '../ChooseDiagnostic/ChooseDiagnostic';
import './ChooseDiagnostics.css';
const ChooseDiagnostics = () => {
    const [sections,setSections]=useState([]);
    useEffect(()=>{
        fetch("https://floating-basin-02241.herokuapp.com/sections")
        .then(res=>res.json())
        .then(data=>setSections(data))
    },[])
    return (
        <div>
            <Container>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                <div className='diagnosis-header'>
        <h1 className="diagnosis-title">
          We Provide Best Diagnosis
        </h1>
        <h6 className='diagnosis-title-content'>
          From us you can get the best diagnosis services. We are always commited to your satisfaction
        </h6>
        <hr />
      </div>
                
                </Col>
            <Col  lg={12} md={12} sm={12} xs={12}>
            <div className='choose-diagnotocs-card-container'>
                <Row>
                    {
                        sections.map(section=><ChooseDiagnostic section={section}></ChooseDiagnostic>)
                    }
                </Row>
            </div>
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default ChooseDiagnostics;