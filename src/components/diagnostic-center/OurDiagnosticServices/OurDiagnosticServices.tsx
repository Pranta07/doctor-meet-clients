import React from 'react';
import { Container } from 'react-bootstrap';
import DiagnosticImagings from '../DiagnosticImagings/DiagnosticImagings';
import DiagnosticPathologies from '../DiagnosticPathologies/DiagnosticPathologies';

const OurDiagnosticServices = () => {
    return (
        <div style={{backgroundColor:"#F2F2F2",padding:"1px 0 100px 0px"}} className="mt-3 mb-3">
            <div className='diagnosis-header'>
        <h1 className="diagnosis-title">
          Our Diagnosis Services
        </h1>
       
        <hr />
      </div>
        <Container>
            <DiagnosticImagings></DiagnosticImagings>
            <DiagnosticPathologies></DiagnosticPathologies>
        </Container>
        </div>
    );
};

export default OurDiagnosticServices;