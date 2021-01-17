import React, { useEffect, useState } from "react";
import CartItem from "../CartItem";
import {
  getCartTotal,
  formatMoney,
  getCurrency,
} from "../../util/helper-functions";

const CartItems = ({ products, removeCartitem, country }) => {
  const [total, setTotal] = useState([[], []]);

  useEffect(() => {
    products && setTotal(getCartTotal(products));
  }, [products]);

  return (
    <>
      <table class="table table-condensed">
        <thead>
          <tr>
            <th style={{ width: "25%" }}>Product</th>
            <th style={{ width: "35%" }}>Price</th>
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
            <td colspan="1">
              <strong> Total </strong>
            </td>
            <td colspan="3" class="text-right">
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
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CartItems;
