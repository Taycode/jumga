import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OrderList from "../../components/OrderList";
import { sampleOrders } from "../../util/static-data";

const Orders = ({ setShowModal, mediaQuery }) => {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5
              className={`${
                mediaQuery === "isMobile" && "ml-4"
              } dashboard-header mb-5`}
            >
              {" "}
              Orders
            </h5>
          </Col>
        </Row>

        <OrderList orders={[]} setShowModal={setShowModal} />
      </Container>
    </>
  );
};

export default Orders;
