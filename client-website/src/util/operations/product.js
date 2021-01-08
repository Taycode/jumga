import { apiRequest } from "../apiRequest";

export const fetchProducts = () => {
  return apiRequest("/all-products/", "GET");
};

// export const fetchStoreProducts = (storeId) => {
//   return apiRequest(`/store/${storeId}/product/all/`, "GET");
// };

export const fetchSingleProduct = (productdata) => {
  const { storeId, productId } = productdata;
  return apiRequest(`/store/${storeId}/product/${productId}/`, "GET");
};
