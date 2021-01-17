import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import successPayment from "../../assets/img/success_payment.svg";

import "./styles.scss";

const SuccessPayment = () => {
  return (
    <div className="text-center">
      <h3> Thank You ! </h3>
      <h6> Your order is being processed ! </h6>
      <img
        alt="Successful Payment"
        className="success-img"
        src={successPayment}
      />
      <Link to="/products">
        {" "}
        <Button variant="primary"> Continue Shoping </Button>
      </Link>
    </div>
  );
};

export default SuccessPayment;
