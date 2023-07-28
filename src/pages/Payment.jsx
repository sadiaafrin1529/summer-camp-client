import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData, useLocation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

// provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);

const Payment = () => {
  const data = useLoaderData();
  const getPrice = parseFloat(data.price);
  const price = getPrice.toFixed(2);
  console.log(data);
  return (
    <div>
      <h2 className="text-xl font-semibold">This is the payment section</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} data={data} />
      </Elements>
    </div>
  );
};

export default Payment;