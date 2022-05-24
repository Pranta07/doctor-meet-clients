import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useParams } from "react-router-dom";
import PayAppointmentFeeFrom from "./PayAppointFeeFrom";
import usePremiumMembershipStatus from "../../hooks/usePremiumMembersipStatus";
import './style/style.css';

const stripePromise = loadStripe(
    "pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt"
);

const PayAppointmentFee = () => {


    const [appointment, setAppointment] = useState({});
    const [price, setPrice] = useState(0);
    const [lastPrice, setLastPrice] = useState(0);
    const [membershipDiscountPrice, seteMembershipDiscountPrice] = useState(0);
    const params = useParams();
    const { premiumMemberDetails, premiumMembershipStatus } = usePremiumMembershipStatus();

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://floating-basin-02241.herokuapp.com/allAppointments/${params?.id}`)
                .then((res) => res.json())
                .then((data) => {

                    setAppointment(data)
                    setPrice(parseFloat(data?.doctorInfo?.visit).toFixed(2));
                    if (price && premiumMembershipStatus) {
                        const membershipDiscountPercentage = premiumMemberDetails.categoryDetails.appointmentDiscount;
                        setLastPrice((price - (price * parseFloat(membershipDiscountPercentage / 100))).toFixed(2));
                        seteMembershipDiscountPrice((price * parseFloat(membershipDiscountPercentage / 100)).toFixed(2));
                    }



                });
        }
        fetchData().catch(console.error);

    }, [params, premiumMemberDetails, price, premiumMembershipStatus]);


    return (
        <div className="payment-box-background">
            <div className="payment-box">
                <div className="container">

                    {
                        premiumMembershipStatus ?
                            <div>
                                <div className="d-flex justify-content-center align-items-center">

                                    <h3 className="text-left">Total</h3>
                                    <hr className="w-50 mx-auto" style={{ border: "1px solid white" }} />
                                    <h3 className="text-right">$ {price}</h3>
                                </div>


                                <div className="d-flex justify-content-center align-items-center">

                                    <h3 className="text-left">Membership Discount</h3>
                                    <hr className="w-50 mx-auto" style={{ border: "1px solid white" }} />
                                    <h3 className="text-right">$ {membershipDiscountPrice}</h3>
                                </div>

                                <hr className="w-100 my-3 mx-auto" style={{ border: "2px solid #c8d6e5" }} />

                                <div className="d-flex justify-content-center align-items-center">

                                    <h3 className="text-left">Subtotal</h3>
                                    <hr className="w-50 mx-auto" style={{ border: "1px solid white" }} />
                                    <h3 className="text-right">$ {lastPrice}</h3>
                                </div>



                            </div> : <div className="d-flex justify-content-center align-items-center">

                                <h3 className="text-left">Subtotal</h3>
                                <hr className="w-50 mx-auto" style={{ border: "1px solid white" }} />
                                <h3 className="text-right">$ {price}</h3>
                            </div>

                    }            <Elements stripe={stripePromise}>
                        <PayAppointmentFeeFrom appointment={appointment}></PayAppointmentFeeFrom>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default PayAppointmentFee;
