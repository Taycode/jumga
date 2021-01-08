import { apiRequest } from "../apiRequest";

export const fetchProducts = () => {
  return apiRequest("/user/my-products/", "GET");
};

export const fetchStoreProducts = (storeId) => {
  return apiRequest(`/store/${storeId}/product/all/`, "GET");
};

export const addProduct = (productdata) => {
  const { storeId } = productdata;
  return apiRequest(`/store/${storeId}/product/create/`, "POST", productdata);
};

export const deleteProduct = (productdata) => {
  const { store, id } = productdata;
  return apiRequest(`/store/${store}/product/${id}/delete/`, "DELETE");
};

export const editProduct = (productdata) => {
  const { store, id } = productdata;
  return apiRequest(
    `/store/${store}/product/${id}/update/`,
    "PUT",
    productdata
  );
};

export const addProductImage = (imageData, productdata) => {
  const { storeId, id } = productdata;
  return apiRequest(
    `/store/${storeId}/product/${id}/image/create/`,
    "POST",
    imageData
  );
};

export const fetchSingleProduct = (productdata) => {
  const { storeId, productId } = productdata;
  return apiRequest(`/store/${storeId}/product/${productId}/`, "GET");
};
