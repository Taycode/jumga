import React, { useContext, useEffect } from "react";
import Section from "../../components/Section";
import { Row, Col } from "react-bootstrap";

import { Context as CartContext } from "./../../contexts/cartContext";
import CartItems from "../../components/CartItems";

const CartPage = () => {
  const {
    state: { cart },
    fetchCartItems,
    removeCartitem,
  } = useContext(CartContext);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <Section className="p-3">
      <h3 className="text-center mb-5"> Cart </h3>
      <Row>
        <Col>
          <CartItems products={cart} removeCartitem={removeCartitem} />
        </Col>
      </Row>
    </Section>
  );
};

export default CartPage;
