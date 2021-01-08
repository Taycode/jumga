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

export const calculateImagesLength = (images, setCount) => {
  return setCount(images.length);
};

const handleFormData = async (formdata) => {
  const docData = new FormData();

  const { images } = formdata;
  const imagesArray = [];
  for (let i = 0; i < images.length; i++) {
    docData.set("image", images[i], images[i].name);

    const response = await addProductImage(docData, formdata);
    console.log(`Resp ${i}`, response);
    imagesArray.push(response.data);
  }
  formdata.images = imagesArray;
  return formdata;
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

  if (response && response.status) {
    const productsDataWithImages = await handleFormData({
      ...formData,
      ...response.data,
    });
    setLoading(false);
    await notifyUser(response);

    shouldEdit
      ? editAProduct(productsDataWithImages)
      : addNewProduct(productsDataWithImages);
    return setShowModal({
      show: false,
    });
  }

  notifyUser(response);

  return setLoading(false);
};
