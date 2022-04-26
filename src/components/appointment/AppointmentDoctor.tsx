import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface doctor {
  id: string;
  name: string;
  img: string;
  specialist: string;
  phone: string;
  website: string;
  email: string;
  timeSlot: string;
}
type Props = {
  doctor: doctor;
};
const AppointmentDoctor: React.FC<Props> = ({ doctor }) => {
  const { id, name, img, specialist, phone, website, email, timeSlot } = doctor;

  return (
    <Col lg={4} md={6} sm={12} xs={12}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name} </Card.Title>
          <h3>{specialist}</h3>
          <Card.Text>
            <h4>Available Hours : {timeSlot}</h4>
            <h4>Phone : {phone}</h4>
            <h4>Website : {website}</h4>
            <h4>Email : {email}</h4>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/get-appointment-form/${id}`}>
            <button className="btn btn-success">Get Appointment</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default AppointmentDoctor;
