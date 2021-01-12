import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { getPaymentview } from "./helper";

const PaymentCard = ({ orderDetails }) => {
  const [paymentStep, setPaymentStep] = useState(2);

  return <Card className="p-5 shadow">{getPaymentview(paymentStep)}</Card>;
};

export default PaymentCard;
