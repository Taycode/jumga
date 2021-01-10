import React, { useEffect, useState } from "react";
import CartItem from "../CartItem";
import {
  getCartTotal,
  formatMoney,
  getCurrency,
} from "../../util/helper-functions";

const CartItems = ({ products, removeCartitem }) => {
  const [total, setTotal] = useState([[], []]);

  useEffect(() => {
    products && setTotal(getCartTotal(products));
  }, [products]);

  return (
    <>
      <table class="table table-condensed">
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
        <tfoot>
          <tr>
            <td></td>
            <td colspan="2">
              <strong> Total </strong>
            </td>
            <td class="hidden-xs text-center">
              <strong>
                {total[0].map((countryName, i) => (
                  <>
                    <span>
                      {" "}
                      {getCurrency(countryName)} {formatMoney(total[1][i])}{" "}
                    </span>
                    <br />
                  </>
                ))}{" "}
              </strong>
            </td>
            <td>
              <a href="#" class="btn btn-success btn-block">
                Checkout
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CartItems;
