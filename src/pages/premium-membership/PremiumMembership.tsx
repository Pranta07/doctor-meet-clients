import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PremiumMembership.css";

export interface premiumMembership {
  _id: string;
  amount: string;
  duration: string;
  category: string;
  pharmacyDiscount: string;
  appointmentDiscount: string;
  labTestDiscount: string;
  img: string;
}
type Props = {
  premiumMembership: premiumMembership;
};

const PremiumMembership: React.FC<Props> = ({ premiumMembership }) => {
  
  const {
    _id,
    amount,
    duration,
   
    pharmacyDiscount,
    appointmentDiscount,
    labTestDiscount,
  } = premiumMembership;
  
  return (
    <Card className="premium-membership-card">
      <Card.Body>
        <Card.Title className="premium-membership-card-title text-center mb-5">{duration} months plan</Card.Title>
        <Card.Text className="text-center premium-member-card-text">
          <p>
            <i className="fa fa-check"></i> 24X7 Services
            <hr className="w-50 mx-auto"/>
          </p>
          <p>
            <i className="fa fa-check"></i> Get Appointment Within an Hour
            <hr className="w-50 mx-auto"/>
          </p>
          <p>
            <i className="fa fa-check"></i> {pharmacyDiscount}% Discount on
            Pharmacy
            <hr className="w-50 mx-auto"/>
          </p>
          <p>
            <i className="fa fa-check"></i> {appointmentDiscount}% Discount on
            an Appointment
            <hr className="w-50 mx-auto"/>
          </p>
          <p>
            <i className="fa fa-check"></i> {labTestDiscount}% Discount on Lab
            Test
            <hr className="w-50 mx-auto"/>
          </p>
          <h3 className="membership-amount">
            Only at <i className="fas fa-dollar-sign"></i> {amount}
          </h3>
        </Card.Text>
      
      </Card.Body>
      <Card.Footer className="premium-member-card-footer">
        <Link to={`/premium-payment/${_id}`}>
          <button className="btn-premium-member">Bill Now</button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default PremiumMembership;
