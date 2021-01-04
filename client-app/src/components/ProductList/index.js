import React from "react";
import { Row } from "react-bootstrap";
import "./styles.scss";
import ProductCard from "./../ProductCard";
import { sampleProducts } from "../../util/static-data";

const ProductList = () => {
  return (
    <>
      <div className="product-list-section">
        <Row>
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductList;
