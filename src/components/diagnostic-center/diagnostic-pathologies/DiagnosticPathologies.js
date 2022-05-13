import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DiagnosticPathology from '../diagnostic-pathology/DiagnosticPathology';

const DiagnosticPathologies = () => {
    const [pathologies,setPathologies]=useState([]);
    useEffect(()=>{
        fetch('https://floating-basin-02241.herokuapp.com/pathology')
        .then(res=>res.json())
        .then(data=>setPathologies(data))
    },[])
    return (
        <div>
        <div className="mb-3 mt-5">
                <h3 className='services-title'>Pathology</h3>
                <hr className='services-hr'/>
            </div>
        <Row className='d-flex align-items-center justify-content-between'>
            <Col item xs={12} md={4} lg={2}>
               <div className="imaging-icon-holder d-flex justify-content-center align-items-center flex-column">
                    <img src="https://cdn-icons.flaticon.com/png/512/4118/premium/4118864.png?token=exp=1652349424~hmac=bde5b80003f55e881ef0d435c95e6180" alt="pathology-icon"/>
               </div>
            </Col>
            <Col item xs={12} md={8} lg={9} className="ms-5">
                <div className="imaging-services-holder">
                    {
                        pathologies.map(pathology=><DiagnosticPathology pathology={pathology} key={pathology._id}></DiagnosticPathology>)
                    }
                </div>
            </Col>
        </Row>
        </div>
    );
};

export default DiagnosticPathologies;