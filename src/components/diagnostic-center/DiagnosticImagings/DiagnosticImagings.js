import React, { useEffect, useState } from 'react';

import './DiagnosticImagings.css';
import DiagnosticImaging from './DiagnosticImaging/DiagnosticImaging';
import { Col, Row } from 'react-bootstrap';
const DiagnosticImagings = () => {
    const [imagings,setImagings]=useState([]);
    useEffect(()=>{
        fetch("https://floating-basin-02241.herokuapp.com/imaging")
        .then(res=>res.json())
        .then(data=>setImagings(data))
    },[])
    return (
        <div>
            <div className="mb-3">
                <h3 className='services-title'>Imaging</h3>
                <hr className='services-hr'/>
            </div>
        <Row className='d-flex align-items-center justify-content-between'>
            <Col item xs={12} md={4} lg={2}>
               <div className="imaging-icon-holder d-flex justify-content-center align-items-center flex-column">
                    <img src="https://cdn-icons-png.flaticon.com/128/4245/4245134.png" alt="imaging-microscope" />
               </div>
            </Col>
            <Col item xs={12} md={8} lg={9} className="ms-5">
                <div className="imaging-services-holder">
                    {
                        imagings.map(imaging=><DiagnosticImaging imaging={imaging}></DiagnosticImaging>)
                    }
                </div>
            </Col>
        </Row>
        </div>
    );
};

export default DiagnosticImagings;
