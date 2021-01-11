import React, { useContext } from "react";
import {
  CLOUDINARY_IMAGE_PREPEND,
  INCREASE,
  DECREASE,
} from "./../../util/constants";
import "./styles.scss";
import {
  getCurrency,
  formatMoney,
  handleQuantityChange,
  getCurrentItemQuantity,
} from "../../util/helper-functions";
import { Context as CartContext } from "../../contexts/cartContext";

const CartItem = ({ product, removeCartitem }) => {
  const { images, name, price, country, id, rating, description } = product;

  const {
    state: { cart },
    addItemToCart,
    updateCartItems,
  } = useContext(CartContext);

  return (
    <tr>
      <td data-th="Product">
        <div class="row">
          <div class="col-sm-2 hidden-xs">
            <img
              className="pic-1"
              alt={name}
              src={`${CLOUDINARY_IMAGE_PREPEND}${images[0].image}`}
            />
          </div>
        </div>
      </td>
      <td data-th="Price">
        {" "}
        {getCurrency(country)} {formatMoney(price)}
      </td>
      <td data-th="Quantity">
        <div className="btn-group" role="group">
          <button
            onClick={() =>
              handleQuantityChange(
                DECREASE,
                product,
                cart,
                addItemToCart,
                updateCartItems
              )
            }
            type="button"
            className="btn btn-secondary btn-sm"
          >
            -
          </button>
          <button type="button" className="btn btn-sm btn-light">
            {getCurrentItemQuantity(product, cart)}
          </button>
          <button
            onClick={() =>
              handleQuantityChange(
                INCREASE,
                product,
                cart,
                addItemToCart,
                updateCartItems
              )
            }
            type="button"
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
        </div>
      </td>
      <td data-th="Subtotal" class="text-center">
        {getCurrency(country)}{" "}
        {formatMoney(price * getCurrentItemQuantity(product, cart))}
      </td>
      <td class="actions" data-th="">
        <button
          onClick={() => {
            removeCartitem(id);
          }}
          class="btn btn-link text-danger btn-sm"
        >
          <i class="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
