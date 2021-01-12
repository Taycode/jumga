import React from "react";
import { Card } from "react-bootstrap";
import { getPaymentview } from "./helper";

const PaymentCard = ({ order, paymentStep, setPaymentStep }) => {
  return (
    <Card className="p-5 shadow">
      {paymentStep && getPaymentview(paymentStep, order, setPaymentStep)}
    </Card>
  );
};

export default PaymentCard;
