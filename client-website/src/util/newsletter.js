import { apiRequest } from "./apiRequest";

function subscribe(data) {
  return apiRequest("newsletter", "POST", data);
}

export default { subscribe };
