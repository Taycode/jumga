import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import StoreList from "../../components/StoreList";

const Stores = () => {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Stores</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn-info"> + Add Store </Button>
          </Col>
        </Row>
        <StoreList />
      </Container>
    </>
  );
};

export default Stores;
