import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import Avatar from "react-string-avatar";
import { deliveryStatusMap, SHOW_DELIVERY } from "../../util/constants";
import { useRouter } from "../../util/router";
import "../StoreItem/styles.scss";

const sampleDeliverydata = {
  store_name: "Slot.NG",
  product_name: "Oppo reno 3",
  delivery_address: "20 Jogunosimi Street, Alausa, Ikeja, Lagos",
  delivery_status: "in_shop",
  reciever_name: "Olar Gold",
  reciever_phoneNumber: "090989898788",
};

const DeliveryItem = ({ delivery, setShowModal }) => {
  const router = useRouter();
  const {
    store_name,
    product_name,
    id,
    delivery_address,
    reciever_name,
    reciever_phoneNumber,
    delivery_status,
  } = sampleDeliverydata;

  return (
    <>
      <Col md={12}>
        <Card
          onClick={() =>
            setShowModal({
              show: true,
              data: {
                delivery: sampleDeliverydata,
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
            <Col
              onClick={() => router.push(`/dashboard/stores/${id}`)}
              className="text-center is-clickable"
              md={3}
            >
              <span className="store-item__name">
                {" "}
                {delivery_address.slice(0, 100)}...
              </span>
            </Col>
            <Col
              onClick={() => router.push(`/dashboard/stores/${id}`)}
              className="text-center is-clickable"
              md={3}
            >
              <span className="store-item__name">
                {" "}
                {deliveryStatusMap[delivery_status]}
              </span>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default DeliveryItem;
