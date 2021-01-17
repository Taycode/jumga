import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import Avatar from "react-string-avatar";
import { deliveryStatusMap, SHOW_DELIVERY } from "../../util/constants";

import "../StoreItem/styles.scss";

const DeliveryItem = ({ delivery, setShowModal }) => {
  const {
    store_name,
    product_name,

    order: { address },
    status,
  } = delivery;

  return (
    <>
      <Col md={12}>
        <Card
          onClick={() =>
            setShowModal({
              show: true,
              data: {
                delivery,
              },
              modalId: SHOW_DELIVERY,
            })
          }
          className="shadow store-item-card"
        >
          <Row>
            <Col className="is-clickable" md={3}>
              <Avatar
                roundShape="true"
                textColor="#fff"
                bgColor="#061123"
                initials={store_name.trim()[0]}
              ></Avatar>{" "}
              {store_name}
            </Col>
            <Col className="is-clickable" md={3}>
              <span> {product_name} </span>
            </Col>
            <Col className="text-center is-clickable" md={3}>
              <span className="store-item__name">
                {" "}
                {address?.slice(0, 100)}...
              </span>
            </Col>
            <Col className="text-center is-clickable" md={3}>
              <span className="store-item__name">
                {" "}
                {deliveryStatusMap[status]}
              </span>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default DeliveryItem;
