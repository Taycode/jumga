import React, { useState } from "react";
import { getPaymentview } from "./helper";

const MakePayment = ({ setShowModal, data }) => {
  const { userData = {} } = data;

  const [paymentStep, setPaymentStep] = useState(1);

  return (
    <>
      <h5 className="text-center mb-3">Get Verified</h5>

      {getPaymentview(paymentStep, userData, setPaymentStep, setShowModal)}
    </>
  );
};

export default MakePayment;
