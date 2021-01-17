import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss";
import ProductCard from "./../ProductCard";
import PageLoader from "../PageLoader";

const ProductList = ({ loading, products, removeproduct, setShowModal }) => {
  return (
    <>
      <div className="product-list-section">
        {loading ? (
          <PageLoader />
        ) : (
          <Row>
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  removeproduct={removeproduct}
                  key={product.id}
                  setShowModal={setShowModal}
                  product={product}
                />
              ))
            ) : (
              <Col className="text-center">
                {" "}
                Add a product for them to appear here !
              </Col>
            )}
          </Row>
        )}
      </div>
    </>
  );
};

export default ProductList;
