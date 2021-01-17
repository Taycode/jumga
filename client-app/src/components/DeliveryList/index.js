import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { deliveryListTableHeader } from "./helper";
import "./../StoreList/styles.scss";
import DeliveryItem from "../DeliveryItem";

const DeliveryList = ({ setShowModal, deliveries }) => {
  return (
    <>
      <Row>
        <Col>
          <Card className=" store-list shadow">
            <div className="search-section">
              <span> All Deliveries </span>
            </div>
            <Row>
              {deliveryListTableHeader.map((tableHeader) => (
                <Col
                  className="store-list__header"
                  key={tableHeader.id}
                  md={tableHeader.width}
                >
                  {tableHeader.title}
                </Col>
              ))}
            </Row>

            <Row className="store-list__items-section">
              {deliveries && deliveries.length > 0 ? (
                <>
                  {deliveries.map((delivery) => (
                    <DeliveryItem
                      key={delivery.id}
                      delivery={delivery}
                      setShowModal={setShowModal}
                    />
                  ))}
                </>
              ) : (
                <Col className="text-center p-5">No deliveries yet !!</Col>
              )}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DeliveryList;
