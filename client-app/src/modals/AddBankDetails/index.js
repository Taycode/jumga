import React from "react";
import Paymentdata from "../../components/ProfileForms/PaymentForm";

const AddBankDetails = ({ setShowModal, data }) => {
  const { userData, setUser } = data;

  return (
    <>
      <h4 className="text-center mb-3"> Add Payment Details</h4>
      <Paymentdata
        user={userData}
        setShowModal={setShowModal}
        setUser={setUser}
        forced={true}
      />
    </>
  );
};

export default AddBankDetails;
