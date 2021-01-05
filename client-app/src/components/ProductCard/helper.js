import React from "react";
import { notifyUser } from "../../util/helper-functions";
import { deleteProduct } from "../../util/operations/product";

export const getRating = (rating) => {
  // I am still tryna figure this out...
  return (
    <>
      <li className="fa fa-star"></li>
      <li className="fa fa-star"></li>
      <li className="fa fa-star"></li>
      <li className="fa fa-star"></li>
      <li className="fa fa-star disable"></li>
    </>
  );
};

export const handleDeleteProduct = async (
  productData,
  setLoading,
  removeProduct
) => {
  setLoading(true);
  const response = await deleteProduct({ productData });
  response && notifyUser(response);

  if (response.status) {
    await removeProduct(productData);
  }

  return setLoading(false);
};
