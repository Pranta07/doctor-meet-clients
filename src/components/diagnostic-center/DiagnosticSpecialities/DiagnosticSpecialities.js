import React, { useEffect, useState } from 'react';
import { Row,Container } from 'react-bootstrap';
import DiagnosticSpeciality from '../DiagnosticSpeciality/DiagnosticSpeciality';
import './DiagnosticSpecialities.css';
const DiagnosticSpecialities = () => {
    const [specialities,setSpecialities]=useState([]);
    useEffect(()=>{
        fetch("https://floating-basin-02241.herokuapp.com/speciality")
        .then(res=>res.json())
        .then(data=>setSpecialities(data))
    },[])
    return (
        <div className='diagnosis-speciality'>
            <Container>
            <div className='diagnosis-header'>
        <h1 className="diagnosis-title">
          Our Specialities
        </h1>
        <hr />
      </div>
        <Row>
            {
                specialities.map(speciality=><DiagnosticSpeciality speciality={speciality}></DiagnosticSpeciality>)
            }
        </Row>
        </Container>
        </div>
    );
};

export default DiagnosticSpecialities;