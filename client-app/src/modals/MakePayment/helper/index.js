import React from "react";

import CardDetailsForm from "../../../components/CardDetailsForm";
import SuccessPayment from "../../../components/SuccessPayment";
import OTPForm from "../../../components/OTPForm";

const paymentSteps = {
  1: (userDetails, setPaymentStep, setshowModal) => (
    <CardDetailsForm
      userDetails={userDetails}
      setPaymentStep={setPaymentStep}
      setshowModal={setshowModal}
    />
  ),
  2: (userDetails, setPaymentStep, setshowModal) => (
    <OTPForm
      userDetails={userDetails}
      setPaymentStep={setPaymentStep}
      setshowModal={setshowModal}
    />
  ),
  3: () => <SuccessPayment />,
};

export const getPaymentview = (
  paymentStep,
  userDetails,
  setPaymentStep,
  setshowModal
) => {
  return paymentSteps[paymentStep](userDetails, setPaymentStep, setshowModal);
};
