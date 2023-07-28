import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const CheckoutForm = ({ price, data }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const { data: paymentData = [], refetch } = useQuery(["users"], async () => {
    const res = await axios.post("http://localhost:5000/create-payment-intent", { price });
    return res.data.clientSecret;
  });
  console.log(paymentData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error.message);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(paymentData, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      alert(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;
      //   save payment information
      const payment = {
        email: user?.email,
        transactionId: transactionId,
        price,
        date: new Date(),
        beforePaymentClassId: data._id,
        className: data.className,
        imageUrl: data.imageUrl,
        instructorName: data.instructorName,
        instructorEmail: data.instructorEmail,
      };
      axios.post("http://localhost:5000/payments", payment).then((res) => {
        if (res.data) {
          alert("Payment Success");
        }
      });
    }
  };
  return (
    <div className="">
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
        <button
          className="btn btn-outline btn-warning btn-sm"
          type="submit"
          disabled={!stripe || !paymentData || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Payment Complete With TransactionID : {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;