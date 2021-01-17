import { apiRequest } from "../apiRequest";

export const fetchDeliveries = () => {
  return apiRequest("/rider/delivery/all/", "GET");
};

export const updateDeliveryStatus = (deliveryData) => {
  const { id } = deliveryData;
  return apiRequest(`/delivery/status/${id}/`, "PATCH", deliveryData);
};
