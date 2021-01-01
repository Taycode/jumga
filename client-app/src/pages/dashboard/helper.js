import React, { lazy } from "react";
import { ADD_STORE } from "../../util/constants";

const AddStore = lazy(() => import("../../modals/AddStore"));

const allModals = {
  [ADD_STORE]: (setShowModal, data) => (
    <AddStore setShowModal={setShowModal} data={data} />
  ),
};

export default allModals;
