const DEV_URL = "http://localhost:3001";
const PROD_URL = "";

export const getAppRedirect = (role, authType) => {
  if (process.env.NODE_ENV === "development") {
    return `${DEV_URL}/${authType}?role=${role}`;
  }
  return `${PROD_URL}/${authType}?role=${role}`;
};
