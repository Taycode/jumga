import { notifyUser } from "../../../util/helper-functions";
import {
  addProduct,
  editProduct,
  addProductImage,
} from "../../../util/operations/product";

export const handleStoreSelected = async (storeId, setvalue) => {
  await setvalue("storeId", storeId);
  return "selected";
};

const handleFormData = async (formdata) => {
  const docData = new FormData();

  console.log(formdata);
  const { images } = formdata;
  for (let i = 0; i < images.length; i++) {
    docData.set("image", images[0], images[0].name);

    const response = await addProductImage(docData, formdata);
    console.log(`Resp ${i}`, response);
  }
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

  response && notifyUser(response);

  if (response && response.status) {
    await handleFormData({ ...formData, ...response.data });
    setLoading(false);

    shouldEdit ? editAProduct(formData) : addNewProduct(response.data);
    return setShowModal({
      show: false,
    });
  }
  setLoading(false);

  return setLoading(false);
};
