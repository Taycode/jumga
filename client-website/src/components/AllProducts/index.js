import React from "react";
import ProductCard from "../ProductCard";
import { sampleProducts } from "./helper";
import { Row } from "react-bootstrap";
import "./styles.scss";

const AllProducts = () => {
  return (
    <>
      <div className="all-products-section">
        <Row>
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default AllProducts;
