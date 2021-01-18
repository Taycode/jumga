import React, { lazy } from "react";
import {
  ADD_STORE,
  ADD_PRODUCT,
  MAKE_PAYMENT,
  SHOW_DELIVERY,
  VIEW_ORDER,
} from "../../util/constants";

const AddStore = lazy(() => import("../../modals/AddStore"));
const AddProduct = lazy(() => import("../../modals/AddProduct"));
const MakePayment = lazy(() => import("../../modals/MakePayment"));
const ShowDelivery = lazy(() => import("../../modals/ShowDelivery"));
const ShowOrder = lazy(() => import("../../modals/ShowOrder"));

const allModals = {
  [ADD_STORE]: (setShowModal, data) => (
    <AddStore setShowModal={setShowModal} data={data} />
  ),
  [ADD_PRODUCT]: (setShowModal, data) => (
    <AddProduct setShowModal={setShowModal} data={data} />
  ),
  [MAKE_PAYMENT]: (setShowModal, data) => (
    <MakePayment setShowModal={setShowModal} data={data} />
  ),
  [SHOW_DELIVERY]: (setShowModal, data) => (
    <ShowDelivery setShowModal={setShowModal} data={data} />
  ),
  [VIEW_ORDER]: (setShowModal, data) => (
    <ShowOrder setShowModal={setShowModal} data={data} />
  ),
};

export default allModals;
