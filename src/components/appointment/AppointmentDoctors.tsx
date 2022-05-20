import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AppointmentDoctor from './AppointmentDoctor';
import './appointment-style/style.css';
const AppointmentDoctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch("https://floating-basin-02241.herokuapp.com/doctors")
        .then(res=>res.json())
        .then(data=>setDoctors(data))

    },[])
   
    return (
        <div>
            <h1 className="appointment-title text-center" style={{marginTop:"100px",marginBottom:"100px"}}>Book an Appointment</h1>
            <Container>
            <Grid container spacing={1}>         
            {
                doctors.map((doctor:any,_id)=>(<AppointmentDoctor key={_id} doctor={doctor}/>
                ))
            }
            </Grid>  
            </Container>
        </div>
    );
};

export default AppointmentDoctors;