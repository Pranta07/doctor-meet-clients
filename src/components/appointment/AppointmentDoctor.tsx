import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './style/style.css';
export interface doctor {
  _id: string;
  name: string;
  img: string;
  specialist: string;
  phone: string;
  website: string;
  email: string;
  timeSlot: string;
  visit: string;
  availableDays: string;
  experience: string;
  review: string;
}
type Props = {
  doctor: doctor;
};
const AppointmentDoctor: React.FC<Props> = ({ doctor }) => {
  const {
    _id,
    name,
    img,
    specialist,
    phone,
    website,
    email,
    availableDays,
    visit,
    experience,
    review,
  } = doctor;
  const rating = Number(review);
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 345 }} style={{ height: 680 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={img}
            alt="green iguana"
            className="appointment-doctor-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Dr.{name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {specialist}
            </Typography>
            <hr className="my-3" />
            <h4 className="appointment-doctor-info"><span className="appointment-info-title">Phone</span> : {phone}</h4>
            <h4 className="appointment-doctor-info"><span className="appointment-info-title">Website</span> : {website}</h4>
            <h4 className="appointment-doctor-info"><span className="appointment-info-title">Email</span> : {email}</h4>
            <h4 className="appointment-doctor-info">
            <span className="appointment-info-title">Experience</span> : {experience} years
            </h4>
            <h4 className="appointment-doctor-info">Available in
            <span className="appointment-info-title"> {availableDays}</span>
            </h4>
            <h4 className="appointment-doctor-info"><span className="appointment-info-title">Visit</span> : $ {visit} </h4>

            <Rating name="read-only" value={rating} readOnly />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/get-appointment-form/${_id}`}>
            <button className="btn-get-appointment my-auto">
              Book Now
            </button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AppointmentDoctor;
