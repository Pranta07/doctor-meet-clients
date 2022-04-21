import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import PremiumMembership from './PremiumMembership';


const PremiumMemberships = () => {
    const [premiumMemberships,setPremiumMemberships]=useState([]);
    useEffect(()=>{
        fetch('./premiumMembership.json')
        .then(res=>res.json())
        .then(data=>setPremiumMemberships(data))
    },[])
    return (
        <Container>
            <CardGroup>
            {
                premiumMemberships.map((premiumMembership:any,id)=>(
                    <PremiumMembership
                    key={id} premiumMembership={premiumMembership}
                    ></PremiumMembership>
                ))
            }
            </CardGroup>
        </Container>
    );
};

export default PremiumMemberships;