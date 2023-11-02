import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentForm = (props) => {
  // const stripe =  "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"
  // const elements = useElements();
  // const [paymentIntent, setPaymentIntent] = useState({
  //   option, price, qnty
  // });

  const api = process.env.REACT_APP_BACKEND_URL;
  const {option, price, qnty} = props;
  // console.log(typeof props);
  // console.log(props.price);

  const makePayment = async() => {
    const stripe = await loadStripe("pk_live_51O581GSC4pjh2Cs8C7tRgiHMMqxl1j7hNkBNTj097pjwhpaqSv7cotaA6Tnj2l1r5Zc7FsJMviiKmV6H2bW4nc1b00kb5MEuuj")

    
    const body = {
      "products": [
        {
          "option": option,
          "price": price,
          "qnty": qnty 
        }
      ]
    }

    console.log(body);

    // {
    //   "products": [
    //     {
    //       "option": "practice",
    //       "price":299,
    //       "qnty":1
    //     }
    //   ]
    // }

    const header = {
      "Content-Type": "application/json"
    }

    const response = await fetch(`${api}/api/create-checkout-session` , {
      method: "POST",
      headers: header,
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if(result.error){
      console.log(result.error);
    }
  }

  

  return (
    <Link
      className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
      to="#"
      onClick={ makePayment }
    >
      Get Start
    </Link>
  );
};

export default PaymentForm;
