import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { ADD_PRODUCT } from "../../util/constants";
import { formatMoney, getCurrency } from "../../util/helper-functions";
import { useRouter } from "../../util/router";
import { formatGalleryimages, handleDeleteProduct } from "./helper";
import "./styles.scss";

const SingleProduct = ({ product, removeProduct, setShowModal }) => {
  const { name, price, description, rating, country } = product;
  const router = useRouter();

  const [loading, setLoading] = useState(false);

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
              {getCurrency(country)} {formatMoney(price)}
            </span>
            <p> {description}</p>
          </div>
          <div className="text-right">
            <Button
              variant="link"
              className="text-primary text-decoration-none"
              onClick={() =>
                setShowModal({
                  show: true,
                  modalId: ADD_PRODUCT,
                  data: {
                    productData: product,
                    editProduct: true,
                  },
                })
              }
            >
              {" "}
              Edit
            </Button>
            <Button
              onClick={() => {
                handleDeleteProduct(product, setLoading, removeProduct, router);
              }}
              variant="link"
              className="text-danger text-decoration-none"
            >
              {" "}
              Delete
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SingleProduct;
