import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import usePremiumMembershipStatus from "../../hooks/usePremiumMembersipStatus";
import './style/style.css';
import PharmacyPayForm from "./PharmacyPayForm";


const stripePromise = loadStripe(
    "pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt"
);

const PharmacyPay = () => {

const [orderDetails,setOrderDetails]=useState({});
    const [floatPrice, setFloatPrice] = useState(0);
    const [membershipDiscountPrice, seteMembershipDiscountPrice] = useState(0);
    const [lastPrice, setLastPrice] = useState(0);
    const params = useParams();
    const { premiumMemberDetails, premiumMembershipStatus } = usePremiumMembershipStatus();

    useEffect(() => {
        const fechData=async()=>{
            // fetch orderDetails from database or localStorage and setOrderDetails and thenthe sent it to PharmacyPayForm

            const intPrice = 20;//orderDetails.price
            const intDiscount = 5;//orderDetails.discount
  
            
  
            setFloatPrice(intPrice - (intPrice * ((parseFloat(intDiscount).toFixed(2))/100.00)));
            if (premiumMembershipStatus) {
  
              const membershipDiscountPercentage =await premiumMemberDetails?.categoryDetails.pharmacyDiscount;
              setLastPrice((floatPrice - (floatPrice * parseFloat(membershipDiscountPercentage / 100))).toFixed(2));
              seteMembershipDiscountPrice(((floatPrice * parseFloat(membershipDiscountPercentage / 100))).toFixed(2));
            }
        }
    
        fechData().catch(console.error);
    }, [params, premiumMemberDetails, premiumMembershipStatus,floatPrice]);


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
                                    <h3 className="text-right">$ {floatPrice}</h3>
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
                                <h3 className="text-right">$ {lastPrice}</h3>
                            </div>

                    } 
                    <Elements stripe={stripePromise}>
                    {/* Have to sent pharmacy details */}
                        {/* <PharmacyPayForm orderDetails={orderDetails}/> */}

                        <PharmacyPayForm/>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default PharmacyPay;
