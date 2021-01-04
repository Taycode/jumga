import createDataContext from "./createContext";
import { notifyUser } from "../util/helper-functions";
import { fetchStores } from "../util/operations/store";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_STORE":
      return { ...state, stores: [...state.stores, action.payload] };
    case "FETCH_STORES_SUCCESSFULLY":
      return { stores: action.payload };
    case "EDIT_A_STORE":
      return {
        stores: [
          ...state.stores.filter((store) => store.id !== action.payload.id),
          action.payload,
        ],
      };
    case "REMOVE_A_STORE":
      return {
        stores: [
          ...state.stores.filter((store) => store.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

const addNewStore = (dispatch) => (storeData) => {
  dispatch({ type: "ADD_NEW_STORE", payload: storeData });
};

const removeStore = (dispatch) => (storeData) => {
  dispatch({ type: "REMOVE_A_STORE", payload: storeData });
};

const editAStore = (dispatch) => (storeData) => {
  dispatch({ type: "EDIT_A_STORE", payload: storeData });
};

const fetchAllStores = (dispatch) => async () => {
  const { status, data, message } = await fetchStores();

  !status && notifyUser({ status, message });

  data &&
    (await dispatch({ type: "FETCH_STORES_SUCCESSFULLY", payload: data }));
  // useMemo(() => {
  // }, [data, status, message]);
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    addNewStore,
    editAStore,
    fetchAllStores,
    removeStore,
  },
  {
    stores: [],
  }
);
