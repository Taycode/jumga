import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const SingleProduct = () => {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Single product</h5>
          </Col>
        </Row>
        {/* Does not matter which store... Just render the product */}
      </Container>
    </>
  );
};

export default SingleProduct;
