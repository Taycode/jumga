import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StoreList from "../../components/StoreList";

const Stores = ({ setShowModal }) => {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Stores</h5>
          </Col>
        </Row>

        <StoreList setShowModal={setShowModal} />
      </Container>
    </>
  );
};

export default Stores;
