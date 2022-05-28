import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Alert, Button, LinearProgress } from "@mui/material";
import { useAppSelector } from "../../../redux/store";

const PayForm = ({ appointment, setUpdate }) => {
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState();
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const { visit } = appointment?.doctorInfo;
    const { user } = useAppSelector((state) => state.user);

    //geting client secret from server side api
    useEffect(() => {
        fetch(
            "https://frozen-inlet-30875.herokuapp.com/create-payment-intent",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ price: visit }),
            }
        )
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [visit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement); //geting CardElement form data

        if (card == null) {
            return;
        }

        setProcessing(true); //payment proccessing

        // Use your card Element with other Stripe.js APIs/payment method
        const { error, /* paymentMethod */ } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess("");
            setProcessing(false);
        } else {
            setError("");
            // console.log(paymentMethod);
        }

        //payment confirmation/payment intent
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.name,
                        email: user?.email,
                    },
                },
            });

        if (intentError) {
            setError(intentError.message);
            setSuccess("");
        } else {
            setError("");
            setSuccess("Your Payment Processed Successfully!");
            setProcessing(false);
            // setUpdate(false);
            // console.log(paymentIntent);

            //save to db
            const payment = {
                amount: paymentIntent.amount,
                id: paymentIntent.id,
                status: paymentIntent.status,
            };

            const newApp = appointment;
            newApp["payment"] = true;
            newApp["payInfo"] = payment;
            // console.log(payment);
            fetch(
                `http://localhost:5000/api/v1/appointment/${appointment._id}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newApp),
                }
            ).then((res) => {
                // if (res.status === 200) setUpdate(true);
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                {processing ? (
                    <LinearProgress sx={{ my: 2 }}></LinearProgress>
                ) : (
                    <Button
                        sx={{ my: 3 }}
                        variant="contained"
                        type="submit"
                        disabled={!stripe || success.length !== 0}
                    >
                        Pay ${visit}
                    </Button>
                )}
            </form>
            {error && (
                <Alert severity="error" sx={{ my: 2 }}>
                    {error}!
                </Alert>
            )}
            {success && (
                <Alert severity="success" sx={{ my: 2 }}>
                    {success}
                </Alert>
            )}
        </>
    );
};

export default PayForm;
