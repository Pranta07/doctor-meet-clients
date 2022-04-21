import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import AppointmentDoctor from './AppointmentDoctor';

const AppointmentDoctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch("./doctors.json")
        .then(res=>res.json())
        .then(data=>setDoctors(data))

    },[])
   
    return (
        <div>
            <h1>Get Appointment</h1>
            <Row>
            {
                doctors.map((doctor:any,id)=>(<AppointmentDoctor key={id} doctor={doctor}/>
                ))
            }
            </Row>
            
        </div>
    );
};

export default AppointmentDoctors;