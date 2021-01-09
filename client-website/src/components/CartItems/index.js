import React from "react";
import CartItem from "../CartItem";

const CartItems = ({ products, removeCartitem }) => {
  return (
    <table id="cart" class="table table-hover table-condensed">
      <thead>
        <tr>
          <th style={{ width: "50%" }}>Product</th>
          <th style={{ width: "10%" }}>Price</th>
          <th style={{ width: "8%" }}>Quantity</th>
          <th style={{ width: "22%" }} className="text-center">
            Subtotal
          </th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {products &&
          products
            .sort((a, b) => b.id - a.id)
            .map((product) => (
              <CartItem
                removeCartitem={removeCartitem}
                product={product}
                key={product.id}
              />
            ))}
      </tbody>
    </table>
  );
};

export default CartItems;
