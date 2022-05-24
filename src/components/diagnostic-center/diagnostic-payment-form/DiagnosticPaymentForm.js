import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {  useNavigate } from 'react-router-dom';
import useTime from '../../../hooks/useTime';
import usePremiumMembershipStatus from '../../../hooks/usePremiumMembersipStatus';
const DiagnosticPaymentForm = ({diagnostic}) => {
    const stripe = useStripe();
    const elements = useElements();
const navigate=useNavigate();
const [error,setError]=useState('');
const [floatPrice,setFloatPrice]=useState(0);
const {premiumMemberDetails,premiumMembershipStatus}=usePremiumMembershipStatus();
const {date}=useTime();
useEffect(()=>{
  const fetchData=async()=>{
      // const floatDiscount=await (parseFloat(diagnostic?.selectedDiagnosis.discount).toFixed(2));    
      // const dd= (floatDiscount/100.00);
    await setFloatPrice((diagnostic?.selectedDiagnosis.price)-((diagnostic?.selectedDiagnosis.price)*((parseFloat(diagnostic?.selectedDiagnosis.discount).toFixed(2))/100.00))).toFixed(2);
    
    if(premiumMembershipStatus){
      const membershipDiscountPercentage=premiumMemberDetails?.categoryDetails.labTestDiscount;
      setFloatPrice(floatPrice-(floatPrice*parseFloat(membershipDiscountPercentage/100))).toFixed(2);
    }
    
  }
  fetchData().catch(console.error);
   
},[premiumMemberDetails,premiumMembershipStatus,diagnostic,floatPrice])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        const invoice={
          invoiceName:"Diagnostic Center",
          category:{...diagnostic},
          paymentMethod,
          amount:floatPrice,
          purchasedDate:date
        }
    if (error) {
      setError(error.message);
    } else {
      if(paymentMethod.id){
        fetch(`https://floating-basin-02241.herokuapp.com/bookedDiagnosis/${diagnostic._id}`,{
          method:"PUT"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.acknowledged){
            fetch(`https://floating-basin-02241.herokuapp.com/allInvoices`, {
              method: "POST",
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify(invoice)
          })
              .then(res=>res.json())
              .then(data=>{
                
                if(data.insertedId){
                  alert("Successfully paid");
                  navigate('/dashboard/user/my-diagnosises');
                }
              })
          }
       
          
        })
       
      }
    }

  };
    return (
        <form onSubmit={handleSubmit} className="my-5">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: 'white',
              '::placeholder': {
                color: '#c8d6e5',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {error&&<p className='mt-3'>{error}</p>}
      <button type="submit" className="btn-diagnosis-pay mt-5" disabled={!stripe}>
        Pay
      </button>
    </form>
    ); 
};

export default DiagnosticPaymentForm;
