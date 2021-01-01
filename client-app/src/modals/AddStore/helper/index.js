import { notifyUser } from "../../../util/helper-functions";
import { createStore } from "../../../util/operations/store";

export const handleStoreCreation = async (
  formData,
  setLoading,
  setShowModal,
  addNewStore
) => {
  setLoading(true);

  const response = await createStore(formData);
  response && setLoading(false);
  response && notifyUser(response);
  // if (response && response.status) {
  //   addNewStore(response.data);
  //   return setShowModal({
  //     show: false,
  //   });
  // }
  return setLoading(false);
};
