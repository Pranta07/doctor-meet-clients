import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import AppointmentDoctor from './AppointmentDoctor';
import './AppointmentDoctos.css';
const AppointmentDoctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch("./doctors.json")
        .then(res=>res.json())
        .then(data=>setDoctors(data))

    },[])
   
    return (
        <div>
            <h1 className="appointment-title text-center my-5">Book an Appointment</h1>
            <Container>
            <Grid container spacing={1}>         
            {
                doctors.map((doctor:any,id)=>(<AppointmentDoctor key={id} doctor={doctor}/>
                ))
            }
            </Grid>  
            </Container>
        </div>
    );
};

export default AppointmentDoctors;