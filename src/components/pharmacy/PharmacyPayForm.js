import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {  useNavigate } from 'react-router-dom';
import useTime from '../../hooks/useTime';
import usePremiumMembershipStatus from '../../hooks/usePremiumMembersipStatus';
//it will receive prop when become dynamic
// const PharmacyPayForm = ({orderDetails}) => {
const PharmacyPayForm = () => {
    const stripe = useStripe();
    const elements = useElements();
const navigate=useNavigate();
const [error,setError]=useState('');
const [floatPrice,setFloatPrice]=useState(0);
const {premiumMemberDetails,premiumMembershipStatus}=usePremiumMembershipStatus();
const {date}=useTime();
useEffect(()=>{
  const fetchData=async()=>{
 
    // await setFloatPrice((orderDetails.price)-((orderDetails.price)*((parseFloat(orderDetails?.discount).toFixed(2))/100.00))).toFixed(2);


    await setFloatPrice(20.00);//It is static data

    if(premiumMembershipStatus){
      const membershipDiscountPercentage=premiumMemberDetails?.categoryDetails.pharmacyDiscount;
      setFloatPrice((floatPrice-(floatPrice*parseFloat(membershipDiscountPercentage/100))).toFixed(2));
    }
    
  }
  fetchData().catch(console.error);
   
},[premiumMemberDetails,premiumMembershipStatus,floatPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
           
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        const invoice={
          invoiceName:"Diagnostic Center",
        //   category:{...orderDetails},
          paymentMethod,
          amount:floatPrice,
          purchasedDate:date
        }
    if (error) {
      setError(error.message);
    } else {
      if(paymentMethod.id){
          //Dont't delete this.It will create a invoice and send the invoice to AllInvoices section of dashboard
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
                // navigate('/dashboard/user/my-diagnosises');
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

export default PharmacyPayForm;
