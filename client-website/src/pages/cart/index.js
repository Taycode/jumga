import React, { useContext, useEffect } from "react";
import Section from "../../components/Section";
import { Row, Col } from "react-bootstrap";
import { Context as CartContext } from "./../../contexts/cartContext";
import CartItems from "../../components/CartItems";
import { useHistory } from "react-router-dom";

const CartPage = () => {
  const history = useHistory();
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
      <span className=" go-back-icon" onClick={() => history.goBack()}>
        <i className="fa fa-arrow-left"></i> Back
      </span>
      <h3 className="text-center mb-5"> Cart </h3>
      <Row className="p-5">
        <Col>
          <CartItems products={cart} removeCartitem={removeCartitem} />
        </Col>
      </Row>
    </Section>
  );
};

export default CartPage;
