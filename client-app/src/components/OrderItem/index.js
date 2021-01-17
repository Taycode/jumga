import React from "react";
import { Col, Card, Row } from "react-bootstrap";
// import { VIEW_ORDER } from "../../util/constants";
import "../StoreItem/styles.scss";

const OrderItem = ({ order, setShowModal }) => {
  // const {id} = order;

  return (
    <>
      <Col md={12}>
        <Card
          onClick={() => {
            setShowModal({
              // show: true,
              data: {
                order,
              },
            });
          }}
          className="shadow store-item-card"
        >
          <Row>
            <Col className="is-clickable" md={4}>
              <span> product name</span>
            </Col>
            <Col className="is-clickable" md={3}>
              Hi
            </Col>
            <Col className="text-center is-clickable" md={2}>
              <span className="store-item__name"> Blaaah</span>
            </Col>
            <Col className="" md={3}>
              <div className="store-item__actions-section">{/* Order */}</div>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default OrderItem;
