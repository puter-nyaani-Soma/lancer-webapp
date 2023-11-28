import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51O5SxtSEGmAME0lc37RBbz7RPeyF88RNdV7KfXKoNeo4TuD7P8R5YZSBhHQXbFTPS1jJ5Xs4ZRBRJhypuDWS1fHY00oNO8xPB9"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  

  const { id } = useParams();


  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'night',
    variables: {
      fontFamily: 'Sohne, system-ui, sans-serif',
      fontWeightNormal: '500',
      borderRadius: '8px',
      colorBackground: '#0A2540',
      colorPrimary: '#EFC078',
      accessibleColorOnColorPrimary: '#1A1B25',
      colorText: 'white',
      colorTextSecondary: 'white',
      colorTextPlaceholder: '#727F96',
      tabIconColor: 'white',
      logoColor: 'dark'
    },
    rules: {
      '.Input, .Block': {
        // backgroundColor: 'transparent',
        border: '3px solid var(--colorPrimary)'
      }
    }
  };
  const options = {
    clientSecret,
    appearance,
  };

  return <div className="flex max-w-full max-h-full h-auto items-center justify-center ">
  
    <div>

    {clientSecret && (
      <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      </div>
  </div>;
};

export default Pay;
