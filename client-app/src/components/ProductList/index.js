import React from "react";
import { Row } from "react-bootstrap";
import "./styles.scss";
import ProductCard from "./../ProductCard";
import { sampleProducts } from "../../util/static-data";

const ProductList = ({ products, removeproduct, setShowModal }) => {
  return (
    <>
      <div className="product-list-section">
        <Row>
          {products.map((product) => (
            <ProductCard
              removeproduct={removeproduct}
              key={product.id}
              setShowModal={setShowModal}
              product={product}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductList;
