import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PremiumMembership.css';

export interface premiumMembership {
  id: string;
  amount: string;
  duration:string;
  category:string;
  pharmacyDiscount:string;
  appointmentDiscount:string;
  labTestDiscount:string;
  img:string;
}
type Props = {
  premiumMembership: premiumMembership;
  
};

const PremiumMembership: React.FC<Props>  = ({ premiumMembership}) => { 
  const {id,amount,duration,category,pharmacyDiscount,appointmentDiscount,labTestDiscount,img}=premiumMembership;
    return (
        
          
  <Card>
    <Card.Img variant="top" src={img} className="premium-membership-images"/>
    <Card.Body>
      <Card.Title>{category}</Card.Title>
      <Card.Text>
        
        <p><i className="fa fa-check"></i> Get Appointment Within an Hour</p>
        <p><i className="fa fa-check"></i> 24X7 Services</p>
        <p><i className="fa fa-check"></i> {pharmacyDiscount}% Discount on Pharmacy</p>
        <p><i className="fa fa-check"></i> {appointmentDiscount}% Discount on an Appointment</p>
        <p><i className="fa fa-check"></i> {labTestDiscount}% Discount on Lab Test</p>
        <h3 className='membership-amount'>$ {amount} for {duration} months</h3>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to={`/premiumPayment/${id}`}><button className="btn-premium-member">Get Membership Now</button></Link>
    </Card.Footer>
  </Card>
  
        
    );
};

export default PremiumMembership;

