import { apiRequest } from "../apiRequest";

export const verifyUser = (userDetails) => {
  return apiRequest(`/user/verify/`, "POST", userDetails);
};
