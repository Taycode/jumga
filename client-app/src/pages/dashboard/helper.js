import React, { lazy } from "react";
import { ADD_STORE, ADD_PRODUCT, MAKE_PAYMENT } from "../../util/constants";

const AddStore = lazy(() => import("../../modals/AddStore"));
const AddProduct = lazy(() => import("../../modals/AddProduct"));
const MakePayment = lazy(() => import("../../modals/MakePayment"));

const allModals = {
  [ADD_STORE]: (setShowModal, data) => (
    <AddStore setShowModal={setShowModal} data={data} />
  ),
  [ADD_PRODUCT]: (setShowModal, data) => (
    <AddProduct setShowModal={setShowModal} data={data} />
  ),
  [MAKE_PAYMENT]: (setShowModal, data, setUserDetails) => (
    <MakePayment
      setShowModal={setShowModal}
      data={data}
      setUserDetails={setUserDetails}
    />
  ),
};

export default allModals;
