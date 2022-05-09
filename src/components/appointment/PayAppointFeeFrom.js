import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const PayAppointmentFeeFrom = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();

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
        } else {
            console.log("[PaymentMethod]", paymentMethod);
            if (paymentMethod.id) {
                fetch(
                    `https://doctor-meet-appointment-server.vercel.app/allAppointments/${appointment._id}`,
                    {
                        method: "PUT",
                    }
                )
                    .then((res) => res.json())
                    .then((data) => console.log(data));
            }
        }
    };
    return (
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
                type="submit"
                disabled={!stripe}
                className="btn btn-danger mt-4"
            >
                Pay
            </button>
        </form>
    );
};

export default PayAppointmentFeeFrom;
