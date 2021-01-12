import { apiRequest } from "../apiRequest";

export const initiatePayment = (paymentDetails) => {
  return apiRequest("/payment/charge/card/", "POST", paymentDetails);
};

export const verifyPayment = (paymentDetails) => {
  return apiRequest(`/payment/charge/validate/`, "POST", paymentDetails);
};
