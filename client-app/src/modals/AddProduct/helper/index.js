import { notifyUser } from "../../../util/helper-functions";
import { addProduct, editProduct } from "../../../util/operations/product";

export const handleStoreSelected = async (storeId, setvalue) => {
  await setvalue("storeId", storeId);
  return "selected";
};

export const handleProductCreation = async (
  formData,
  setLoading,
  setShowModal,
  addNewProduct,
  editAProduct,
  shouldEdit
) => {
  setLoading(true);

  const response = shouldEdit
    ? await editProduct(formData)
    : await addProduct(formData);

  response && setLoading(false);
  response && notifyUser(response);

  if (response && response.status) {
    shouldEdit ? editAProduct(formData) : addNewProduct(response.data);
    return setShowModal({
      show: false,
    });
  }
  return setLoading(false);
};
