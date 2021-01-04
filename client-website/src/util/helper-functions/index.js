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
