import { apiRequest } from "../apiRequest";

export const fetchStores = () => {
  return apiRequest("/store/all/", "GET");
};

export const addStore = (storeData) => {
  return apiRequest("/store/create/", "POST", storeData);
};

export const deleteStore = (storeData) => {
  return apiRequest(`/store/delete/${storeData.id}`, "DELETE");
};

export const editStore = (storeData) => {
  return apiRequest(`/store/update/${storeData.id}/`, "PATCH", storeData);
};

export const fetchSingleStore = (storeData) => {
  return apiRequest(`/store/${storeData.id}`, "GET");
};
