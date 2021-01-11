import { apiRequest } from "../apiRequest";

export const createOrder = (orderData) => {
  return apiRequest(`/order/checkout/`, "POST", orderData);
};

export const fetchOrder = (orderId) => {
  return apiRequest(`/order/${orderId}`, "GET");
};
