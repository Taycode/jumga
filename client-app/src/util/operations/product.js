import { apiRequest } from "../apiRequest";

export const fetchProducts = () => {
  return apiRequest("/products/all/", "GET");
};

export const fetchStoreProducts = (storeId) => {
  return apiRequest(`/store/${storeId}/product/all/`, "GET");
};

export const addProduct = (productdata) => {
  const { storeId } = productdata;
  return apiRequest(`/store/${storeId}/product/create/`, "POST", productdata);
};

export const deleteProduct = (productdata) => {
  const { storeId, productId } = productdata;
  return apiRequest(`/store/${storeId}/product/${productId}/`, "DELETE");
};

export const editProduct = (productdata) => {
  const { storeId, productId } = productdata;
  return apiRequest(
    `/store/${storeId}/product/${productId}/update/`,
    "PUT",
    productdata
  );
};

export const fetchSingleProduct = (productdata) => {
  const { storeId, productId } = productdata;
  return apiRequest(`/store/${storeId}/product/${productId}/`, "GET");
};
