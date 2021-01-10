import { toast } from "react-toastify";
import {
  APP_DEV_URL,
  APP_PROD_URL,
  currencyMap,
  DECREASE,
  INCREASE,
} from "../constants";

export const getAppRedirect = (role, authType) => {
  if (process.env.NODE_ENV === "development") {
    return `${APP_DEV_URL}/${authType}?role=${role}`;
  }
  return `${APP_PROD_URL}/${authType}?role=${role}`;
};

export const getCurrency = (country) => {
  return currencyMap[country];
};

export const handleAddToCart = async (product, addToCart, cart) => {
  const item = cart.find(
    (cartItem) => parseInt(cartItem.id) === parseInt(product.id)
  );

  if (item) {
    return notifyUser({
      status: false,
      message: `${product.name} is already in your cart.`,
    });
  }
  product.quantity = 1;
  await addToCart(product);
  return notifyUser({
    status: true,
    message: `${product.name} has been added to cart.`,
  });
};

export const handleQuantityChange = async (
  mode,
  product,
  cart,
  addToCart,
  updateCart
) => {
  const itemInCart = cart.find(
    (cartItem) => parseInt(cartItem.id) === parseInt(product.id)
  );

  if (!itemInCart) {
    if (mode === INCREASE) {
      return handleAddToCart(product, addToCart, cart);
    }
    return notifyUser({
      status: false,
      message: `${product.name} is not in cart.`,
    });
  }

  if (mode === DECREASE) {
    if (itemInCart.quantity === 0) {
      return;
    }

    if (itemInCart.quantity === 1) {
      updateCart(
        cart.filter(
          (cartItem) => parseInt(cartItem.id) !== parseInt(product.id)
        )
      );
      return notifyUser({
        status: true,
        message: `${product.name} has been removed from cart`,
      });
    }
    itemInCart.quantity = itemInCart.quantity - 1;
  } else {
    itemInCart.quantity = itemInCart.quantity + 1;
  }

  const newCartItems = cart.filter(
    (cartItem) => parseInt(cartItem.id) !== parseInt(product.id)
  );

  return updateCart([...newCartItems, itemInCart]);
};

export const getCurrentItemQuantity = (product, cart) => {
  const itemInCart = cart.find(
    (cartItem) => parseInt(cartItem.id) === parseInt(product.id)
  );

  if (itemInCart) {
    return itemInCart.quantity;
  }
  return 0;
};
/**
 * Function to toast API response messages
 * @param {response object} response
 */
export const notifyUser = (response) => {
  response.status
    ? toast.success(response.message ? response.message : "Success")
    : toast.error(response.message);
};

// Function to format monetary values with commas
export function formatMoney(x) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return 0;
}

export const getCartTotal = (products) => {
  const totalPrices = {};

  // country, price

  for (let i = 0; i < products.length; i++) {
    const { country, price, quantity } = products[i];
    if (totalPrices[country]) {
      totalPrices[country] =
        parseInt(totalPrices[country]) + parseInt(price) * quantity;
    } else {
      totalPrices[country] = parseInt(price) * quantity;
    }
  }

  const subtotalArray = [Object.keys(totalPrices), Object.values(totalPrices)];

  // console.log(subtotalArray);
  return subtotalArray;
};
