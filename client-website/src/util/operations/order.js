import { apiRequest } from "../apiRequest";

export const createOrder = (orderData) => {
  return apiRequest(`/order/`, "POST", orderData);
};

export const fetchOrder = (orderId) => {
  return apiRequest(`/order/${orderId}`, "GET");
};
