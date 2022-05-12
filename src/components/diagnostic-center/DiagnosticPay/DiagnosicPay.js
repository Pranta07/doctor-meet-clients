import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import DiagnosticPaymentForm from "../DiagnosticPaymentForm/DiagnosticPaymentForm";
import './DiagnosicPay.css';

const stripePromise = loadStripe(
    "pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt"
);

const DiagnosicPay = () => {
    const [diagnostic, setDiagnostic] = useState({});
    const params = useParams();
    
  useEffect(()=>{
    fetch(`https://floating-basin-02241.herokuapp.com/bookedDiagnosis/${params.id}`)
    .then(res=>res.json())
    .then(data=>setDiagnostic(data))
  },[params])
  const intPrice=diagnostic?.selectedDiagnosis?.price;
    const intDiscount=diagnostic?.selectedDiagnosis?.discount;
      const floatDiscount=parseFloat(intDiscount).toFixed(2);
      
      const dd=floatDiscount/100.00;
      // console.log(intPrice,dd);
  const floatPrice=intPrice-(intPrice*dd);
  

    return (
    <div className="payment-box">
            <div className="container">
                
                <h3 className="text-center">Pay : $ {floatPrice}</h3>
                <Elements stripe={stripePromise}>
                    <DiagnosticPaymentForm diagnostic={diagnostic} />
                </Elements>
            </div>
        </div>
    );
};

export default DiagnosicPay;
