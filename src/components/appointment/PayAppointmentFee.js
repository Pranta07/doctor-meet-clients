import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useParams } from "react-router-dom";
import PayAppointmentFeeFrom from "./PayAppointFeeFrom";

const stripePromise = loadStripe(
    "pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt"
);

const PayAppointmentFee = () => {
   

    const [appointment, setAppointment] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`https://floating-basin-02241.herokuapp.com/allAppointments/${params.id}`)
            .then((res) => res.json())
            .then((data) => setAppointment(data));
    }, [params]);
    return (
        <div className="payment-box">
        <div className="container">
            
            <h3 className="text-center mt-5">Pay : $ {appointment?.doctorInfo?.visit}</h3>
            <Elements stripe={stripePromise}>
                <PayAppointmentFeeFrom  appointment={appointment}></PayAppointmentFeeFrom>
            </Elements>
        </div>
    </div>
    );
};

export default PayAppointmentFee;
