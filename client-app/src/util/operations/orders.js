import { apiRequest } from "../apiRequest";

export const fetchOrders = () => {
  return apiRequest("/order/list/", "GET");
};
