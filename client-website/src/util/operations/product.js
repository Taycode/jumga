import { apiRequest } from "../apiRequest";

export const fetchProducts = (country) => {
  return apiRequest(`/all-products/?country=${country?.toLowerCase()}`, "GET");
};

export const fetchSingleProduct = (productdata) => {
  const { storeId, productId } = productdata;
  return apiRequest(`/store/${storeId}/product/${productId}/`, "GET");
};
