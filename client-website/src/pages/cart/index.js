import React, { useContext, useEffect, useState } from "react";
import Section from "../../components/Section";
import { Row, Col } from "react-bootstrap";
import { Context as CartContext } from "./../../contexts/cartContext";
import CartItems from "../../components/CartItems";
import { useHistory } from "react-router-dom";
import { useRouter } from "../../util/router";
import OrderForm from "../../components/OrderForm";
import { handleExistingOrder } from "./helper";
import "./styles.scss";
import PageLoader from "../../components/PageLoader";

const CartPage = ({ mediaQuery }) => {
  const history = useHistory();
  const router = useRouter();

  const {
    state: { cart, loading },
    fetchCartItems,
    removeCartitem,
    clearCartItems,
  } = useContext(CartContext);

  useEffect(() => {
    fetchCartItems();
    const existingOrderId = localStorage.getItem("orderId");

    existingOrderId && handleExistingOrder(existingOrderId, router);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section className="p-3">
      <span className=" go-back-icon" onClick={() => history.goBack()}>
        <i className="fa fa-arrow-left"></i> Back
      </span>

      <Row className={`${mediaQuery === "isMobile" ? "p-2 mt-3" : "p-5"}`}>
        {loading ? (
          <Col>
            {" "}
            <PageLoader />
          </Col>
        ) : (
          <>
            <Col md={6} className="cart-column">
              <CartItems products={cart} removeCartitem={removeCartitem} />
            </Col>
            {cart && cart.length > 0 && (
              <Col md={6} sm={12} xs={12}>
                <OrderForm orderItems={cart} clearCartItems={clearCartItems} />
              </Col>
            )}
          </>
        )}
      </Row>
    </Section>
  );
};

export default CartPage;
