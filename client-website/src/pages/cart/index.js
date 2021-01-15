import React, { useContext, useEffect, useState } from "react";
import Section from "../../components/Section";
import { Row, Col } from "react-bootstrap";
import { Context as CartContext } from "./../../contexts/cartContext";
import CartItems from "../../components/CartItems";
import { useHistory } from "react-router-dom";
import { useCountryData } from "../../util/useCountryData";
import OrderForm from "../../components/OrderForm";
import { useRouter } from "../../util/router";
import { handleExistingOrder } from "./helper";
import "./styles.scss";

const CartPage = ({ mediaQuery }) => {
  const history = useHistory();
  const router = useRouter();

  const [country, setCountry] = useState();

  const {
    state: { cart },
    fetchCartItems,
    removeCartitem,
    clearCartItems,
  } = useContext(CartContext);

  useEffect(() => {
    fetchCartItems();
    const existingOrderId = localStorage.getItem("orderId");

    existingOrderId && handleExistingOrder(existingOrderId, router);
  }, []);

  const countryData = useCountryData();

  useEffect(() => {
    countryData && setCountry(countryData.country_name);
  }, [countryData]);

  return (
    <Section className="p-3">
      <span className=" go-back-icon" onClick={() => history.goBack()}>
        <i className="fa fa-arrow-left"></i> Back
      </span>

      <Row className={`${mediaQuery === "isMobile" ? "p-2 mt-3" : "p-5"}`}>
        <Col md={6} className="cart-column">
          <CartItems
            country={country}
            products={cart}
            removeCartitem={removeCartitem}
          />
        </Col>
        {cart && cart.length > 0 && (
          <Col md={6} sm={12} xs={12}>
            <OrderForm
              orderItems={cart}
              country={country}
              clearCartItems={clearCartItems}
            />
          </Col>
        )}
      </Row>
    </Section>
  );
};

export default CartPage;
