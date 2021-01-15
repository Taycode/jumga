import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
              Support
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Orders;
