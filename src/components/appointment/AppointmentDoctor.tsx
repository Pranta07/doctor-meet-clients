import {  Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './appointment-style/style.css'
export interface doctor {
    _id: string;
   name:string;
   img:string;
   specialist:string;
   phone:string;
   website:string;
   email:string;
   timeSlot:string;
   visit:string;
   availableDays:string;
   experience:string;
   review:string;
  }
  type Props = {
    doctor: doctor;
    
  };
const AppointmentDoctor: React.FC<Props>  = ({doctor}) => {
    const {_id,name,img,specialist,phone,website,email,availableDays,visit,experience,review}=doctor;
    const rating=Number(review);
    return (
      <Grid item xs={12} md={6} lg={4}>
      


    <Card sx={{ maxWidth: 345 }} style={{height:780}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {specialist}
          </Typography>
          <hr className="my-3"/>
          {/* <Typography variant="body2" color="text.secondary"> */}
          <h4 className="appointment-doctor-info">Available Days : {availableDays}</h4>
          <h4 className="appointment-doctor-info">Experience : {experience} years</h4>
          
          <h4 className="appointment-doctor-info">Visit : {visit} $</h4>
          <h4 className="appointment-doctor-info">Phone : {phone}</h4>
          <h4 className="appointment-doctor-info">Website : {website}</h4>
          <h4 className="appointment-doctor-info">Email : {email}</h4>
          <Rating name="read-only" value={rating} readOnly />
          {/* </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/get-appointment-form/${_id}`}>
        <button className="btn-get-appointment" >
          Book Now
        </button>
        </Link>
      </CardActions>
    </Card>
      </Grid>
      
    );
};

export default AppointmentDoctor ;