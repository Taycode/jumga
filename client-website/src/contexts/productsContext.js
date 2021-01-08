import createDataContext from "./createContext";
import { notifyUser } from "../util/helper-functions";
import { fetchProducts } from "../util/operations/product";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESSFULLY":
      return { products: action.payload };
    default:
      return state;
  }
};

const fetchAllProducts = (dispatch) => async (products) => {
  if (products && products.length > 0) {
    return;
  }
  const { status, data, message } = await fetchProducts();

  !status && notifyUser({ status, message });

  data &&
    (await dispatch({ type: "FETCH_PRODUCTS_SUCCESSFULLY", payload: data }));
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    fetchAllProducts,
  },
  {
    products: [],
  }
);