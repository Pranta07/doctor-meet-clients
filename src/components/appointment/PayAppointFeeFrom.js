import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const PayAppointmentFeeFrom = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentMethod,setPaymentMethod]=useState({});
    const [error,setError]=useState("");
const navigate=useNavigate();
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

        if (error) {
            console.log("[error]", error);
            setError(error.message);
        } else {
            
            setPaymentMethod(paymentMethod);
            if (paymentMethod.id) {
                fetch(
                    `https://floating-basin-02241.herokuapp.com/allAppointments/${appointment._id}`,
                    {
                        method: "PUT",
                    }
                )
                    .then((res) =>res.json())
                    .then((data) =>{
                        if(data.acknowledged){
                            alert("Payment is successful");
                            navigate("/dashboard/user/my-appointments")
                        }
                    });
            }
        }
    };
    return (
        <RootStyle>
        <form onSubmit={handleSubmit} className="mt-5">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button
                 type="submit" className="btn-diagnosis-pay my-5" disabled={!stripe}
            >
                Pay
            </button>
        </form>
        </RootStyle>
    );
};

export default PayAppointmentFeeFrom;
