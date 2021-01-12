import React from "react";
import { Button } from "react-bootstrap";
import { formatMoney, getCurrency } from "../../util/helper-functions";
import "./styles.scss";

const OrderDetails = ({ order, handleCancleOrder, paymentStep }) => {
  const { address, email, name, phone_number, total_cost, country } = order;
  return (
    <>
      <div className="p-5">
        <div className=" mb-4 order-details-header">
          {" "}
          <h5 className="text-secondary"> Order Details</h5>
        </div>

        <div className="order-details">
          <span className="d-block">
            {" "}
            <b>Name</b> : {name}
          </span>
          <span className="d-block">
            {" "}
            <b>Delivery Address</b> : {address}
          </span>
          <span className="d-block">
            {" "}
            <b>Phone Number </b> : {phone_number}
          </span>
          <span className="d-block">
            {" "}
            <b>Email </b> : {email}
          </span>
        </div>

        <div className="total-cost">
          <sup className="total text-secondary"> Total</sup>{" "}
          {getCurrency(country)} {formatMoney(total_cost)}
        </div>

        {paymentStep < 3 && (
          <div className="m-auto text-center">
            <Button
              onClick={() => {
                handleCancleOrder();
              }}
              variant="link"
              className="text-danger text-center cancle-order-btn text-decoration-none btn-sm"
            >
              {" "}
              Cancel Order
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
