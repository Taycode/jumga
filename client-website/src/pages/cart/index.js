import React, { useContext, useEffect, useState } from "react";
import Section from "../../components/Section";
import { Row, Col } from "react-bootstrap";
import { Context as CartContext } from "./../../contexts/cartContext";
import CartItems from "../../components/CartItems";
import { useHistory } from "react-router-dom";
import { useCountryData } from "../../util/useCountryData";
import { useRouter } from "../../util/router";
import { handleCheckout } from "./helper";

const CartPage = () => {
  const history = useHistory();
  const router = useRouter();

  const [country, setCountry] = useState();

  const {
    state: { cart },
    fetchCartItems,
    removeCartitem,
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
      <h3 className="text-center mb-5"> Cart </h3>
      <Row className="p-5">
        <Col>
          <CartItems
            country={country}
            products={cart}
            removeCartitem={removeCartitem}
            handleCheckout={handleCheckout}
            router={router}
          />
        </Col>
      </Row>
    </Section>
  );
};

export default CartPage;
