import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss";
import ProductCard from "./../ProductCard";
import { sampleProducts } from "../../util/static-data";

const ProductList = ({ products, removeproduct, setShowModal }) => {
  return (
    <>
      <div className="product-list-section">
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
              Add a product to any store you own !
            </Col>
          )}
        </Row>
      </div>
    </>
  );
};

export default ProductList;
