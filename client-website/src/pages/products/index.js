import React from "react";
import Section from "../../components/Section";
import { Col, Row, Button } from "react-bootstrap";
import AllProducts from "../../components/AllProducts";
import SearchProducts from "../../components/SearchProducts";
import "./styles.scss";

const ProductsPage = (props) => {
  return (
    <>
      <Section className="p-3">
        <h3 className="text-center mb-5"> Products </h3>
        <Row>
          <Col md={2}>
            <div className="products-page-side">
              <SearchProducts />
              <div>Filter Here</div>
              <Button className="btn-sm" variant="primary">
                <i class="fa fa-shopping-cart"></i> View Cart
              </Button>
            </div>
          </Col>
          <Col md={10}>
            <AllProducts />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default ProductsPage;
