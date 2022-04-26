import React, { useEffect, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PremiumCheckoutForm from './PremiumCheckoutForm';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt');
const PremiumPayment = () => {
    // const [premiumMemberships,setPremiumMemberships]=useState({});
    const [choosenCategory,setChoosenCategory]=useState([]);
    const params = useParams();
    useEffect(()=>{
        fetch('/premiumMembership.json')
        .then(res=>res.json())
        .then(data=>{
            
            for(const d of data){
               
                if (d.id === Number(params.id)){
                    
                    setChoosenCategory(d);
                }
            }
            
        })
    },[params])

    return (
        <div className="container">
            <h3>Pay : $ {choosenCategory.amount} to get membership "{choosenCategory.category}" for {choosenCategory.duration} months</h3>
            <Elements stripe={stripePromise}>
      <PremiumCheckoutForm choosenCategory={choosenCategory}/>
    </Elements>
        </div>
    );
};

export default PremiumPayment;