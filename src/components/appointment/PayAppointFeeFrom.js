import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import useTime from "../../hooks/useTime";
import usePremiumMembershipStatus from "../../hooks/usePremiumMembersipStatus";
import './style/style.css';
const PayAppointmentFeeFrom = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {date}=useTime();
    const [error,setError]=useState("");
    const [price,setPrice]=useState(0);
const navigate=useNavigate();
const {premiumMemberDetails,premiumMembershipStatus}=usePremiumMembershipStatus();

useEffect(()=>{
    
    const fetchData=async()=>{

        await setPrice(parseFloat(appointment?.doctorInfo.visit).toFixed(2));
       
       if(premiumMembershipStatus){
        const membershipDiscountPercentage=await premiumMemberDetails?.categoryDetails.appointmentDiscount;
         setPrice(price-(price*parseFloat(membershipDiscountPercentage/100)).toFixed(2));
       }
    }
    fetchData().catch(console.error);
    
},[premiumMembershipStatus,premiumMemberDetails,appointment,price])


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
            invoiceName:"Appointment Fee",
            category:{...appointment},
            paymentMethod,
            amount:price,
            purchasedDate:date
          }
        if (error) {
           
            setError(error.message);
        } else {
            
            
                fetch(
                    `https://floating-basin-02241.herokuapp.com/allAppointments/${appointment._id}`,
                    {
                        method: "PUT",
                    }
                )
                    .then((res) =>res.json())
                    .then((data) =>{
                        if(data.acknowledged){
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
                                        alert("Payment is successful");
                                         navigate("/dashboard/user/my-appointments")
                                    }
                                  })
                              }
                            
                        }
                    });
            
        }
    };
    return (
        <form onSubmit={handleSubmit} className="mt-5">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "white",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#c8d6e5",
                        },
                    },
                }}
            />
            {error&&<p className="my-3">{error}</p>}
            <button
                 type="submit" className="btn-diagnosis-pay" disabled={!stripe}
            >
                Pay
            </button>
        </form>
    );
};

export default PayAppointmentFeeFrom;
