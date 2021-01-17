import { apiRequest } from "../apiRequest";

export const createOrder = (orderData) => {
  return apiRequest(`/order/checkout/`, "POST", {
    ...orderData,
    country: "ghana",
  });
};

export const fetchOrder = (orderId) => {
  return apiRequest(`/order/${orderId}`, "GET");
};

export const confirmOrder = (orderData) => {
  return apiRequest(`/order/checkout/confirm/`, "PATCH", orderData);
};
