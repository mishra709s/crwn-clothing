import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HRM00D2fIamHKyhBgIMhNp8KaCxjqT4sbbTDZd7QI9mP1I9S0STIVY4yYzFgETUZg2iqx2MtkC1lnAYAk3SR3tB00j1OaEKnA";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN CLOTHING LTD."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total Amount Is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
