import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DeliveryList from "../../components/DeliveryList";

const Delivery = ({ setShowModal }) => {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Deliveries</h5>
          </Col>
        </Row>
        <DeliveryList deliveries={[]} setShowModal={setShowModal} />
      </Container>
    </>
  );
};

export default Delivery;
