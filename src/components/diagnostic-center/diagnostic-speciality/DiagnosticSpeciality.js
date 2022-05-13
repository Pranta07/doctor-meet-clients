import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './DiagnosticSpeciality.css';
const DiagnosticSpeciality = ({speciality}) => {
    // console.log(speciality)
    return (
       <Col>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={speciality.img} />
  <Card.Body>
    <Card.Title>{speciality.title}</Card.Title>
    <Card.Text>
    {speciality.content}
    </Card.Text>
  
  </Card.Body>
</Card>
       </Col>
    );
};

export default DiagnosticSpeciality;