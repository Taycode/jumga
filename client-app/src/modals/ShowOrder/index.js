import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { formatMoney, getCurrency } from "../../util/helper-functions";
import "../ShowDelivery/styles.scss";

const ShowOrder = ({ setShowModal, data }) => {
  const { orderData } = data;
  const {
    status,
    id,
    order: { paid },
    product: { name },
    rider,
  } = orderData;
  return (
    <section>
      <h5 className="text-center"> Order details</h5>
      <div className="d-block m-auto text-center mb-5">
        <Badge variant={status === "delivered" ? "success" : "dark"}>
          {" "}
          #{id}{" "}
        </Badge>
      </div>
      <Row>
        <Col className="mt-3" md={4}>
          <span className="dd-title"> Commision </span>
          <span className="dd-data ">
            N 300,000
            {/* {getCurrency(country)} {formatMoney(rider_commision)}{" "} */}
          </span>
        </Col>
        <Col className="mt-3" md={4}>
          <span className="dd-title"> Product </span>
          <span className="dd-data ">{name}</span>
        </Col>
        <Col className="mt-3" md={4}>
          <span className="dd-title"> Dispatch Rider </span>
          <span className="dd-data ">
            {rider?.name ? rider.name : "Unassigned"}
          </span>
        </Col>
        <Col className="mt-3" md={4}>
          <span className="dd-title"> Delivery Status </span>
          <span className="dd-data ">Enroute delivery</span>
        </Col>
        <Col className="mt-3" md={4}>
          <span className="dd-title"> Payment Status </span>
          <span className="dd-data ">
            {" "}
            <Badge variant={paid ? "success" : "dark"}>
              {paid ? "Paid" : "Pending"}{" "}
            </Badge>{" "}
          </span>
        </Col>
      </Row>
    </section>
  );
};

export default ShowOrder;
