import { notifyUser } from "../../util/helper-functions";
import { deleteStore } from "../../util/operations/store";

export const handleDeleteStore = async (storeData, setLoading, removeStore) => {
  setLoading(true);
  const response = await deleteStore(storeData);
  response && notifyUser(response);

  if (response.status) {
    await removeStore(storeData);
  }

  return setLoading(false);
};
