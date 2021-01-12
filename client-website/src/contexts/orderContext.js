import createDataContext from "./createContext";
import { notifyUser } from "../util/helper-functions";
import { fetchOrder } from "../util/operations/order";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ORDER_SUCCESSFULLY":
      return { order: action.payload };
    default:
      return state;
  }
};

const fetchOrderDetails = (dispatch) => async () => {
  const { status, data, message } = await fetchOrder();

  !status && notifyUser({ status, message });

  data && (await dispatch({ type: "FETCH_ORDER_SUCCESSFULLY", payload: data }));
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    fetchOrderDetails,
  },
  {
    order: {},
  }
);
