import { notifyUser } from "../../../util/helper-functions";
import { addStore, editStore } from "../../../util/operations/store";

export const handleStoreCreation = async (
  formData,
  setLoading,
  setShowModal,
  addNewStore,
  editAStore,
  shouldEdit
) => {
  setLoading(true);

  const response = shouldEdit
    ? await editStore(formData)
    : await addStore(formData);

  response && setLoading(false);
  response && notifyUser(response);

  if (response && response.status) {
    shouldEdit ? editAStore(formData) : addNewStore(response.data);
    return setShowModal({
      show: false,
    });
  }
  return setLoading(false);
};
