import React from "react";

import CardDetailsForm from "../CardDetailsForm";
import OTPForm from "../OTPForm";

const paymentSteps = {
  1: () => <CardDetailsForm />,
  2: () => <OTPForm />,
};

export const getPaymentview = (paymentStep) => {
  return paymentSteps[paymentStep]("hello");
};
