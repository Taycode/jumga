import React, { useState } from "react";
import { getPaymentview } from "./helper";

const MakePayment = ({ setShowModal, data }) => {
  const { userData = {}, setUser } = data;

  const [paymentStep, setPaymentStep] = useState(1);

  return (
    <>
      {getPaymentview(
        paymentStep,
        userData,
        setPaymentStep,
        setShowModal,
        setUser
      )}
    </>
  );
};

export default MakePayment;
