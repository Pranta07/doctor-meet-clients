import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PremiumCheckoutForm from './PremiumCheckoutForm';

const stripePromise = loadStripe('pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt');
const PremiumPayment = () => {
    return (
        <div>
            <h1>Hello from primium payment</h1>
            <h3>Pay : $ 30</h3>
            <Elements stripe={stripePromise}>
      <PremiumCheckoutForm />
    </Elements>
        </div>
    );
};

export default PremiumPayment;