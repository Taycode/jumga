import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { getCurrency, formatMoney } from "../../util/helper-functions";
import { formatGalleryimages } from "./helper";
import "./styles.scss";

const SingleProduct = ({ product }) => {
  const { name, price, description, rating, country } = product;
  return (
    <>
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
            <Button onClick={() => alert("wahala")} variant="primary">
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
