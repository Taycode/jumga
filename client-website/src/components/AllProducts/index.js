import React from "react";
import ProductCard from "../ProductCard";
import { Row } from "react-bootstrap";
import "./styles.scss";

const AllProducts = ({ products }) => {
  return (
    <>
      <div className="all-products-section">
        <Row>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default AllProducts;
