import { apiRequest } from "../apiRequest";

export const fetchProducts = () => {
  return apiRequest("/products/all/", "GET");
};

export const addProduct = (productdata) => {
  return apiRequest("/products/create/", "POST", productdata);
};

export const deleteProduct = (productdata) => {
  return apiRequest(`/product/delete/${productdata.id}`, "DELETE");
};

export const editProduct = (productdata) => {
  return apiRequest(`/product/update/${productdata.id}`, "PUT");
};

export const fetchSingleProduct = (productdata) => {
  return apiRequest(`/product/${productdata.id}`, "GET");
};
