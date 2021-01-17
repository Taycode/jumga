import createDataContext from "./createContext";
import { fetchOrder } from "../util/operations/order";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ORDER_SUCCESSFULLY":
      return { order: action.payload, loading: false };
    case "UPDATE_ORDER_DATA":
      return { order: { ...state.order, ...action.payload } };
    case "ORDER_NOT_FOUND":
      return { order: null, loading: false };
    default:
      return state;
  }
};

const fetchOrderDetails = (dispatch) => async (orderID) => {
  const { data } = await fetchOrder(orderID);

  data && (await dispatch({ type: "FETCH_ORDER_SUCCESSFULLY", payload: data }));
  !data && (await dispatch({ type: "ORDER_NOT_FOUND" }));
};

const updateOrderdata = (dispatch) => async (data) => {
  await dispatch({ type: "UPDATE_ORDER_DATA", payload: data });
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    fetchOrderDetails,
    updateOrderdata,
  },
  {
    order: {},
    loading: true,
  }
);
