import { apiRequest } from "../apiRequest";

export const editDetails = (data) => {
  return apiRequest("/user/details/update/", "PATCH", data);
};
