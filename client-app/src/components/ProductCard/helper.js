import { notifyUser } from "../../util/helper-functions";
import { deleteProduct } from "../../util/operations/product";

export const handleDeleteProduct = async (
  productData,
  setLoading,
  removeProduct
) => {
  setLoading(true);
  const response = await deleteProduct(productData);
  response && notifyUser(response);

  if (response.status) {
    await removeProduct(productData);
  }

  return setLoading(false);
};
