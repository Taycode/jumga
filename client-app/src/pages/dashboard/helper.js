import React, { lazy } from "react";
import { ADD_STORE, ADD_PRODUCT } from "../../util/constants";

const AddStore = lazy(() => import("../../modals/AddStore"));
const AddProduct = lazy(() => import("../../modals/AddProduct"));

const allModals = {
  [ADD_STORE]: (setShowModal, data) => (
    <AddStore setShowModal={setShowModal} data={data} />
  ),
  [ADD_PRODUCT]: (setShowModal, data) => (
    <AddProduct setShowModal={setShowModal} data={data} />
  ),
};

export default allModals;
