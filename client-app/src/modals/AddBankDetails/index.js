import React from "react";
import Paymentdata from "../../components/ProfileForms/PaymentForm";

const AddBankDetails = ({ setShowModal, data }) => {
  const { userData, setUser } = data;

  return (
    <>
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
