import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import useTime from '../../hooks/useTime';
import { useAppSelector } from '../../redux/store';

const PremiumCheckoutForm = ({ choosenCategory }) => {
  const { user } = useAppSelector((state) => state.user);
  const [error, setError] = useState('');

  const [expirationDate, setExpirationDate] = useState('');
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { date, expirationDateSilver,expirationDateGold,expirationDateDiamond } = useTime();

 useEffect(()=>{
    if(choosenCategory.category==="Silver"){
      setExpirationDate(expirationDateSilver);
    }
    if(choosenCategory.category==="Gold"){
      setExpirationDate(expirationDateGold);
    }
    if(choosenCategory.category==="Diamond"){
      setExpirationDate(expirationDateDiamond);
    }
 },[choosenCategory,expirationDateDiamond,expirationDateGold,expirationDateSilver])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    // set the expiration date of premium membership
    //============================

//     setExpirationMonth(parseInt(choosenCategory.duration) + month > 12 ? (parseInt(choosenCategory.duration) + month) - 12 : parseInt(choosenCategory.duration) + month);
//     setExpirationYear(parseInt(choosenCategory.duration) + month > 12 ? year + 1 : year);
//     setExpirationDate(expirationYear + "-" + expirationMonth + "-" + day);
// console.log(expirationDate)
    //=============================

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
      type: 'card',
      card,
    });

    const invoice = {
      invoiceName: "Appointment Fee",
      category: { ...choosenCategory },
      paymentMethod,
      amount: parseFloat(choosenCategory.amount),
      purchasedDate: date
    }
    const boughtCategoryDetails = {
      categoryName: choosenCategory.category,
      categoryDetails: { ...choosenCategory },
      userName: user.name,
      userEmail: user.email,
      paymentMethod,
      userInfo: user,
      purchasedDate: date,
      expirationDate: expirationDate
    }
    if (error) {
      setError(error.message);
    } else {


      fetch(`http://floating-basin-02241.herokuapp.com/premiumMembers`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(boughtCategoryDetails)
      })
        .then(res => res.json())
        .then(data => {

          if (data.insertedId) {
            //Adding the details and creating an invoice
            fetch(`https://floating-basin-02241.herokuapp.com/allInvoices`, {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(invoice)
            })
              .then(res => res.json())
              .then(data => {

                if (data.insertedId) {
                  alert("Congratulations! You are a Premium Member Now");
                  navigate("/")
                }
              })
          }
        })




    }

  };
  return (
    <form onSubmit={handleSubmit} className="mt-5">
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
      {error && <p className="my-3">{error}</p>}
      <button
        type="submit" className="btn-my-diagnosis-pay" style={{marginTop:"100px",marginBottom:"50px"}} disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default PremiumCheckoutForm;