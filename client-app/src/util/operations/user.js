import { apiRequest } from "../apiRequest";

export const verifyUser = (userDetails) => {
  return apiRequest(`/user/confirm/`, "POST", userDetails);
};
