import { apiRequest } from "../apiRequest";

export const fetchProducts = (ipAddress) => {
  return apiRequest(`/all-products/?ip=${ipAddress}`, "GET");
};

export const fetchSingleProduct = (productdata) => {
  const { storeId, productId } = productdata;
  return apiRequest(`/store/${storeId}/product/${productId}/`, "GET");
};
