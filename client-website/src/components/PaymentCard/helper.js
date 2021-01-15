import React from "react";

import CardDetailsForm from "../CardDetailsForm";
import OTPForm from "../OTPForm";
import SuccessPayment from "../SuccessPayment";

const paymentSteps = {
  1: (orderDetails, setPaymentStep) => (
    <CardDetailsForm
      orderDetails={orderDetails}
      setPaymentStep={setPaymentStep}
    />
  ),
  2: (orderDetails, setPaymentStep) => (
    <OTPForm orderDetails={orderDetails} setPaymentStep={setPaymentStep} />
  ),
  3: () => <SuccessPayment />,
};

export const getPaymentview = (paymentStep, orderDetails, setPaymentStep) => {
  return paymentSteps[paymentStep](orderDetails, setPaymentStep);
};
