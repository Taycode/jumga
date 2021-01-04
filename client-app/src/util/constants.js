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
    code: "NG",
    currency: "₦",
  },
  {
    country: "Ghana",
    code: "GH",
    currency: "GH¢",
  },
  {
    country: "Kenya",
    code: "KE",
    currency: "KES",
  },
  {
    country: "Uganda",
    code: "UG",
    currency: "USh",
  },
  {
    country: "South Africa",
    code: "ZA",
    currency: "R",
  },
  {
    country: "Tanzania",
    code: "TZ",
    currency: "TZS",
  },
];

export const currencyMap = {
  NG: "₦",
  GH: "GH¢",
  KE: "KES",
  UG: "USh",
  ZA: "R",
  TZ: "TZS",
};
