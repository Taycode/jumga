import React from "react";
import { Col, Card, Row, Badge } from "react-bootstrap";
import { VIEW_ORDER } from "../../util/constants";
import "../StoreItem/styles.scss";

const OrderItem = ({ orderData, setShowModal, mediaQuery }) => {
  const {
    product: { name },
    order: { paid, rider },
  } = orderData;

  return (
    <>
      <Col md={12}>
        <Card
          onClick={() => {
            setShowModal({
              show: true,
              data: {
                orderData,
              },
              modalId: VIEW_ORDER,
            });
          }}
          className="shadow store-item-card"
        >
          <Row>
            {mediaQuery !== "isMobile" ? (
              <>
                <Col className="is-clickable" md={3}>
                  <span> {name}</span>
                </Col>
                <Col className="is-clickable" md={3}>
                  Unassigned
                </Col>
                <Col className="text-center is-clickable" md={2}>
                  <span className="store-item__name"> Enroute Delivery </span>
                </Col>
                <Col className="" md={2}>
                  <div className="store-item__actions-section">
                    {" "}
                    <Badge variant={paid ? "success" : "dark"}>
                      {paid ? "Paid" : "Pending"}{" "}
                    </Badge>{" "}
                  </div>
                </Col>
                <Col className="text-center" md={2}>
                  <span className="store-item__name"> N 300,000 </span>
                </Col>
              </>
            ) : (
              <Col>
                {" "}
                <div className="mobile-store-item">
                  <div className="store-details-mob">
                    <div className="mob-data-row">
                      <div className="mb-1 ">
                        <span className="store-item-mob-title"> Product</span>
                        <span> {name}</span>
                      </div>
                      <div className="mb-1">
                        <span className="store-item-mob-title">
                          {" "}
                          Dispatch Rider
                        </span>
                        <span> {rider?.name ? rider.name : "Unassigned"}</span>
                      </div>
                    </div>

                    <div className="mob-data-row">
                      <div className="mb-1">
                        <span className="store-item-mob-title">
                          Delivery status
                        </span>
                        <span> Enroute delivery </span>
                      </div>
                      <div className="mb-1">
                        <span className="store-item-mob-title">
                          Payment status
                        </span>
                        <span>
                          {" "}
                          <Badge variant={paid ? "success" : "dark"}>
                            {paid ? "Paid" : "Pending"}{" "}
                          </Badge>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="mob-data-row">
                      <div className="mb-1">
                        <span className="store-item-mob-title">Commision</span>
                        <span> N 300,000 </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default OrderItem;
