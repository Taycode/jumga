import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import Avatar from "react-string-avatar";
import { deliveryStatusMap, SHOW_DELIVERY } from "../../util/constants";

import "../StoreItem/styles.scss";

const DeliveryItem = ({ mediaQuery, delivery, setShowModal }) => {
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
            {mediaQuery !== "isMobile" && (
              <>
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
              </>
            )}
            {mediaQuery === "isMobile" && (
              <Col>
                <>
                  <div className="mobile-store-item">
                    <span className="store-initials-mob">
                      <Avatar
                        bgColor="#d2ddef3b"
                        textColor="#061123"
                        roundShape="true"
                        initials={store_name.trim()[0]}
                      ></Avatar>{" "}
                      <br />
                    </span>
                    <div className="store-details-mob">
                      <div className="mob-data-row">
                        <div className="mb-1 ">
                          <span className="store-item-mob-title"> Store</span>
                          <span> {store_name}</span>
                        </div>
                        <div className="mb-1">
                          <span className="store-item-mob-title">
                            {" "}
                            Product Name
                          </span>
                          <span> {product_name}</span>
                        </div>
                      </div>

                      <div className="mob-data-row">
                        <div className="mb-1">
                          <span className="store-item-mob-title">
                            Delivery Status
                          </span>
                          <span> {deliveryStatusMap[status]}</span>
                        </div>
                        <div className="mb-1">
                          <span className="store-item-mob-title">
                            Delivery Commision
                          </span>
                          <span> N 300,000 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </Col>
            )}
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default DeliveryItem;
