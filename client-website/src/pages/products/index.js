import React, { useContext, useEffect } from "react";
import Section from "../../components/Section";
import { Col, Row, Button } from "react-bootstrap";
import AllProducts from "../../components/AllProducts";
import SearchProducts from "../../components/SearchProducts";
import "./styles.scss";
import { useRouter } from "../../util/router";
import { Context as ProductsContext } from "./../../contexts/productsContext";
import { Context as CartContext } from "./../../contexts/cartContext";

const ProductsPage = (props) => {
  const router = useRouter();

  const {
    state: { products },
    fetchAllProducts,
  } = useContext(ProductsContext);

  const { fetchCartItems } = useContext(CartContext);

  useEffect(() => {
    fetchAllProducts(products);
    fetchCartItems();
  }, []);

  return (
    <>
      <Section className="p-3">
        <h3 className="text-center mb-5"> Products </h3>
        <Row>
          <Col md={2}>
            <div className="products-page-side">
              <SearchProducts />
              <div className="filter-section">
                <span className="filter-section__title"> Filter by</span>
                <div>
                  <div className="filter-section__filter"></div>
                </div>
              </div>
              <Button
                onClick={() => router.push("/cart")}
                className="btn-sm btm-btn"
                variant="primary"
              >
                <i className="fa fa-shopping-cart"></i> View Cart
              </Button>
            </div>
          </Col>
          <Col md={10}>
            <AllProducts products={products.sort((a, b) => b.id - a.id)} />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default ProductsPage;
