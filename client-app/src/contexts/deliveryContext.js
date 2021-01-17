import createDataContext from "./createContext";
import { notifyUser } from "../util/helper-functions";
import { fetchDeliveries } from "../util/operations/deliveries";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DELIVERIES_SUCCESSFULLY":
      return { deliveries: action.payload };
    case "UPDATE_DELIVERY":
      return {
        deliveries: [
          ...state.deliveries.filter(
            (delivery) => delivery.id !== action.payload.id
          ),
          action.payload,
        ],
      };

    default:
      return state;
  }
};

const updateDelivery = (dispatch) => (deliveryData) => {
  dispatch({ type: "UPDATE_DELIVERY", payload: deliveryData });
};

const fetchAllDeliveries = (dispatch) => async (deliveries) => {
  if (deliveries && deliveries.length > 0) {
    return;
  }
  const { status, data, message } = await fetchDeliveries();

  !status && notifyUser({ status, message });

  data &&
    (await dispatch({ type: "FETCH_DELIVERIES_SUCCESSFULLY", payload: data }));
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    updateDelivery,
    fetchAllDeliveries,
  },
  {
    deliveries: [],
  }
);
