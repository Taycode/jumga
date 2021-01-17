import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import successPayment from "../../assets/img/success_payment.svg";

import "./styles.scss";

const SuccessPayment = ({ userDetails, setshowModal, setUserDetails }) => {
  useEffect(() => {
    setUserDetails({ ...userDetails, verified: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="text-center">
      <h3> Thank You ! </h3>
      <h6> Your can now sell on jumga ! </h6>
      <img
        alt="Successful Payment"
        className="success-img"
        src={successPayment}
      />
      <Button
        onClick={() =>
          setshowModal({
            show: false,
          })
        }
        variant="primary"
      >
        Start Selling
      </Button>
    </div>
  );
};

export default SuccessPayment;
