import { toast } from "react-toastify";

/**
 * Function to toast API response messages
 * @param {response object} response
 */
export const notifyUser = (response) => {
  response.status
    ? toast.success(response.message)
    : toast.error(response.message);
};
