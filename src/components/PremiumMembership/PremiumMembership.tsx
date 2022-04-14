import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PremiumMembership.css';


const PremiumMembership = () => {
    return (
        <div>
           <Container>
          <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf93PuZaF4oQB--lg-XERMAHSupMamtHe9yg&usqp=CAU" className="premium-membership-images"/>
    <Card.Body>
      <Card.Title>Silver</Card.Title>
      <Card.Text>
        
        <p><i className="fa fa-check"></i> Get Appointment Within an Hour</p>
        <p><i className="fa fa-check"></i> 24X7 Services</p>
        <p><i className="fa fa-check"></i> 10% Discount on Pharmacy</p>
        <p><i className="fa fa-check"></i> 12% Discount on an Appointment</p>
        <p><i className="fa fa-check"></i> 3% Discount on Lab Test</p>
        <h3 className='membership-amount'>$ 10 for 3 months</h3>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button className="btn-premium-member">Get Membership Now</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="premium-membership-images"/>
    <Card.Body>
      <Card.Title>Gold</Card.Title>
      <Card.Text>
      
      <p><i className="fa fa-check"></i> Get Appointment Within an Hour</p>
        <p><i className="fa fa-check"></i> 24X7 Services</p>
        <p><i className="fa fa-check"></i> 14% Discount on Pharmacy</p>
        <p><i className="fa fa-check"></i> 18% Discount on an Appointment</p>
        <p><i className="fa fa-check"></i> 5% Discount on Lab Test</p>
        <h3 className='membership-amount'>$ 20 for 6 months</h3> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/premiumPayment"><button className="btn-premium-member">Get Membership Now</button></Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28865.jpg?w=900&t=st=1649953331~exp=1649953931~hmac=c28388f3e71d80a1c699c75fe17193a8fe9e6023434628022c886d528f195d3d" className="premium-membership-images"/>
    <Card.Body>
      <Card.Title>Diamond</Card.Title>
      <Card.Text>
      
      <p><i className="fa fa-check"></i> Get Appointment Within an Hour</p>
        <p><i className="fa fa-check"></i> 24X7 Services</p>
        <p><i className="fa fa-check"></i> 20% Discount on Pharmacy</p>
        <p><i className="fa fa-check"></i> 20% Discount on an Appointment</p>
        <p><i className="fa fa-check"></i> 10% Discount on Lab Test</p>
        <h3 className='membership-amount'>$ 30 for 1 Year</h3>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button className="btn-premium-member">Get Membership Now</button>
    </Card.Footer>
  </Card>
</CardGroup>
</Container>
        </div>
    );
};

export default PremiumMembership;