import React, { useEffect, useState } from "react";
import CartItem from "../CartItem";
import {
  getCartTotal,
  formatMoney,
  getCurrency,
} from "../../util/helper-functions";
import PageLoader from "../PageLoader";
import { Button } from "react-bootstrap";

const CartItems = ({ products, removeCartitem, country }) => {
  const [total, setTotal] = useState([[], []]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    products && setTotal(getCartTotal(products));
  }, [products]);

  return (
    <>
      {" "}
      {!loading ? (
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
              <td></td>
              <td colspan="2">
                <strong> Total </strong>
              </td>
              <td colspan="" class=" text-center">
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
      ) : (
        <PageLoader />
      )}
    </>
  );
};

export default CartItems;
