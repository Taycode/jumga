import React from "react";
import { orderListTableHeaders } from "./helper";
import OrderItem from "../OrderItem";
import { Row, Card, Col } from "react-bootstrap";
import "../StoreList/styles.scss";

const OrderList = ({ orders, setShowModal }) => {
  return (
    <>
      <Row>
        <Col>
          <Card className=" store-list shadow">
            <div className=" mb-3">
              <div>
                <span> All Orders</span>
              </div>
            </div>

            <Row>
              {orderListTableHeaders.map((tableHeader) => (
                <Col
                  className="store-list__header"
                  key={tableHeader.id}
                  md={tableHeader.width}
                >
                  {" "}
                  {tableHeader.title}
                </Col>
              ))}
            </Row>

            <Row className="store-list__items-section">
              {orders && orders.length > 0 ? (
                <>
                  {orders.map((order) => (
                    <OrderItem
                      setShowModal={setShowModal}
                      key={orders.id}
                      order={order}
                    />
                  ))}
                </>
              ) : (
                <Col className="text-center p-5">No Orders yet !</Col>
              )}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderList;
