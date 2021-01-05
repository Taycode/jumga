import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const SingleStore = () => {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Single store</h5>
          </Col>
        </Row>

        {/* Fetch products that belong to store here */}
      </Container>
    </>
  );
};

export default SingleStore;
