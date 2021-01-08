import { toast } from "react-toastify";
import { APP_DEV_URL, APP_PROD_URL, currencyMap } from "../constants";

export const getAppRedirect = (role, authType) => {
  if (process.env.NODE_ENV === "development") {
    return `${APP_DEV_URL}/${authType}?role=${role}`;
  }
  return `${APP_PROD_URL}/${authType}?role=${role}`;
};

export const getCurrency = (country) => {
  return currencyMap[country];
};

export const handleAddToCart = (productId) => {
  alert("Alaye e no dey work ");
};

/**
 * Function to toast API response messages
 * @param {response object} response
 */
export const notifyUser = (response) => {
  response.status
    ? toast.success(response.message ? response.message : "Success")
    : toast.error(response.message);
};

// Function to format monetary values with commas
export function formatMoney(x) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return 0;
}
