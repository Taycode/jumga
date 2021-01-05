import { apiRequest } from "../apiRequest";

export const fetchProducts = () => {
  return apiRequest("/store/16/product/all/", "GET");
};
// 14
export const fetchStoreProducts = (storeId) => {
  return apiRequest(`/store/${storeId}/product/all/`, "GET");
};

export const addProduct = (productdata) => {
  const { storeId } = productdata;
  return apiRequest(`/store/${storeId}/product/create/`, "POST", productdata);
};

export const deleteProduct = (productdata) => {
  const { store, id } = productdata;
  return apiRequest(`/store/${store}/product/${id}/`, "DELETE");
};

export const editProduct = (productdata) => {
  const { store, id } = productdata;
  return apiRequest(
    `/store/${store}/product/${id}/update/`,
    "PUT",
    productdata
  );
};

export const fetchSingleProduct = (productdata) => {
  const { storeId, productId } = productdata;
  return apiRequest(`/store/${storeId}/product/${productId}/`, "GET");
};
