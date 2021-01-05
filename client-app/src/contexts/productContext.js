import createDataContext from "./createContext";
import { notifyUser } from "../util/helper-functions";
import { fetchProducts } from "../util/operations/product";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "FETCH_PRODUCTS_SUCCESSFULLY":
      return { products: action.payload };
    case "EDIT_A_PRODUCT":
      return {
        products: [
          ...state.products.filter(
            (product) => product.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    case "REMOVE_A_PRODUCT":
      return {
        products: [
          ...state.products.filter(
            (product) => product.id !== action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};

const addNewProduct = (dispatch) => (productData) => {
  dispatch({ type: "ADD_NEW_PRODUCT", payload: productData });
};

const removeProduct = (dispatch) => (productData) => {
  dispatch({ type: "REMOVE_A_PRODUCT", payload: productData });
};

const editAProduct = (dispatch) => (productData) => {
  dispatch({ type: "EDIT_A_PRODUCT", payload: productData });
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
    addNewProduct,
    editAProduct,
    fetchAllProducts,
    removeProduct,
  },
  {
    products: [],
  }
);
