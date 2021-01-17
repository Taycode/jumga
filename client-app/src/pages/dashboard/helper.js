import React, { lazy } from "react";
import {
  ADD_STORE,
  ADD_PRODUCT,
  MAKE_PAYMENT,
  SHOW_DELIVERY,
} from "../../util/constants";

const AddStore = lazy(() => import("../../modals/AddStore"));
const AddProduct = lazy(() => import("../../modals/AddProduct"));
const MakePayment = lazy(() => import("../../modals/MakePayment"));
const ShowDelivery = lazy(() => import("../../modals/ShowDelivery"));

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
  [SHOW_DELIVERY]: (setShowModal, data) => (
    <ShowDelivery setShowModal={setShowModal} data={data} />
  ),
};

export default allModals;
