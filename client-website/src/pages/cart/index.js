import React, { useContext, useEffect, useState } from "react";
import Section from "../../components/Section";
import { Row, Col } from "react-bootstrap";
import { Context as CartContext } from "./../../contexts/cartContext";
import CartItems from "../../components/CartItems";
import { useHistory } from "react-router-dom";
import { useCountryData } from "../../util/useCountryData";
import OrderForm from "../../components/OrderForm";

const CartPage = () => {
  const history = useHistory();

  const [country, setCountry] = useState();

  const {
    state: { cart },
    fetchCartItems,
    removeCartitem,
    clearCartItems,
  } = useContext(CartContext);

  useEffect(() => {
    fetchCartItems();
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

      <Row className="p-5">
        <Col>
          <CartItems
            country={country}
            products={cart}
            removeCartitem={removeCartitem}
          />
        </Col>
        {cart && cart.length > 0 && (
          <Col>
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
