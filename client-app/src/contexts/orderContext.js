import createDataContext from "./createContext";
import { notifyUser } from "../util/helper-functions";
import { fetchOrders } from "../util/operations/orders";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ORDERS_SUCCESSFULLY":
      return { orders: action.payload, loading: false };
    default:
      return state;
  }
};

const fetchAllOrders = (dispatch) => async (orders) => {
  if (orders && orders.length > 0) {
    return;
  }
  const { status, data, message } = await fetchOrders();

  !status && notifyUser({ status, message });

  data &&
    (await dispatch({ type: "FETCH_ORDERS_SUCCESSFULLY", payload: data }));
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    fetchAllOrders,
  },
  {
    orders: [],
    loading: true,
  }
);
