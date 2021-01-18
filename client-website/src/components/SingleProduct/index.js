import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import {
  getCurrency,
  formatMoney,
  handleQuantityChange,
  getCurrentItemQuantity,
  handleAddToCart,
} from "../../util/helper-functions";
import { formatGalleryimages } from "./helper";
import { Context as CartContext } from "../../contexts/cartContext";
import { INCREASE, DECREASE } from "./../../util/constants";
import "./styles.scss";
import { useHistory } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { name, price, description, country } = product;
  const history = useHistory();
  const {
    state: { cart },
    addItemToCart,
    updateCartItems,
  } = useContext(CartContext);

  return (
    <>
      <span className=" go-back-icon" onClick={() => history.goBack()}>
        <i className="fa fa-arrow-left"></i> Back
      </span>
      <Row>
        <Col md={6}>
          <ImageGallery
            lazyLoad={true}
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            items={formatGalleryimages(product)}
          />
        </Col>
        <Col md={6}>
          <div className="prouct-details-section">
            <h3> {name}</h3>
            <span className="product-price">
              {" "}
              {getCurrency(country)} {formatMoney(price)}{" "}
            </span>
            <p> {description}</p>
            <div className="price mb-3">
              <div className="btn-group" role="group">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      DECREASE,
                      product,
                      cart,
                      addItemToCart,
                      updateCartItems
                    )
                  }
                  type="button"
                  className="btn btn-secondary btn-sm"
                >
                  -
                </button>
                <button type="button" className="btn btn-sm btn-light">
                  {getCurrentItemQuantity(product, cart)}
                </button>
                <button
                  onClick={() =>
                    handleQuantityChange(
                      INCREASE,
                      product,
                      cart,
                      addItemToCart,
                      updateCartItems
                    )
                  }
                  type="button"
                  className="btn btn-secondary btn-sm"
                >
                  +
                </button>
              </div>
            </div>

            <Button
              onClick={() => handleAddToCart(product, addItemToCart, cart)}
              variant="primary"
            >
              {" "}
              <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SingleProduct;
