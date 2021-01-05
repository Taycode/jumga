import React, { useContext, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import PageLoader from "../../components/PageLoader";
import SingleProductComp from "../../components/SingleProductcard";
import { Context as ProductsContext } from "./../../contexts/productContext";

const SingleProduct = (props) => {
  const [product, setProduct] = useState();
  const {
    setShowModal,
    match: {
      params: { productId },
    },
  } = props;

  const {
    state: { products },
    fetchAllProducts,
    removeProduct,
  } = useContext(ProductsContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    products &&
      setProduct(
        products.find((product) => parseInt(product.id) === parseInt(productId))
      );
  }, [products]);

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Single product</h5>
          </Col>
        </Row>

        {product && (
          <SingleProductComp
            setShowModal={setShowModal}
            product={product}
            removeProduct={removeProduct}
          />
        )}
        {products && products.length > 0 && !product && (
          <>This Product cannot be found, or does not exist</>
        )}
        {!products && <PageLoader />}
      </Container>
    </>
  );
};

export default SingleProduct;
