import createDataContext from "./createContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return { cart: [...state.cart, action.payload] };
    case "FETCH_CART_ITEMS":
      return { cart: action.payload };
    case "CLEAR_CART":
      return { cart: [] };
    default:
      return state;
  }
};

const fetchCartItems = (dispatch) => async () => {
  const currentCart = JSON.parse(localStorage.getItem("cart"));
  dispatch({ type: "FETCH_CART_ITEMS", payload: currentCart });
};

const removeCartitem = (dispatch) => async (productId) => {
  const currentCart = JSON.parse(localStorage.getItem("cart"));
  const filteredCart = await currentCart.filter(
    (products) => parseInt(products.id) !== productId
  );

  localStorage.setItem("cart", JSON.stringify(filteredCart));
  dispatch({ type: "FETCH_CART_ITEMS", payload: filteredCart });
};

const addItemToCart = (dispatch) => async (product) => {
  const currentCart = JSON.parse(localStorage.getItem("cart"));
  if (!currentCart) {
    localStorage.setItem("cart", JSON.stringify([product]));
  } else {
    currentCart.push(product);
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }

  dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
};

const updateCartItems = (dispatch) => async (newCart) => {
  localStorage.setItem("cart", JSON.stringify(newCart));
  dispatch({ type: "FETCH_CART_ITEMS", payload: newCart });
};

const clearCartItems = (dispatch) => async (orderId) => {
  localStorage.removeItem("cart");
  dispatch({ type: "CLEAR_CART" });
  localStorage.setItem("orderId", orderId);
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    fetchCartItems,
    addItemToCart,
    updateCartItems,
    removeCartitem,
    clearCartItems,
  },
  {
    cart: [],
  }
);
