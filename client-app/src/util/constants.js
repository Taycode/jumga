export const AUTH_TYPES = {
  register: {
    title: "Get an account",
    buttonText: "Register",
  },
  login: {
    title: "Welcome back",
    buttonText: "Login",
  },
  "forgot-password": {
    title: "Recover your account",
    buttonText: "Send me a link",
  },
  "change-password": {
    title: "Set a new password",
    buttonText: "Reset",
  },
};

export const WEBSITE_DEV_URL = "http://localhost:3000";
export const WEBSITE_PROD_URL = "";

export const ADD_STORE = "ADD_STORE";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const VIEW_ORDER = "VIEW_ORDER";

export const SUPPORTED_COUNTRIES = [
  {
    country: "Nigeria",
    code: "nigeria",
    currency: "₦",
  },
  {
    country: "Ghana",
    code: "ghana",
    currency: "GH¢",
  },
  {
    country: "Kenya",
    code: "kenya",
    currency: "KES",
  },
  {
    country: "United Kingdom",
    code: "uk",
    currency: "$",
  },
];

export const currencyMap = {
  nigeria: "₦",
  ghana: "GH¢",
  kenya: "KES",
  uk: "$",
};
