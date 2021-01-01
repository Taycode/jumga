import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import Avatar from "react-string-avatar";
import "./styles.scss";
import trash from "../../assets/icons/trash.png";
import edit from "../../assets/icons/edit.png";

import { Link } from "../../util/router";

const StoreItem = ({ store }) => {
  const { name, rider, product_count, id } = store;
  return (
    <>
      <Col md={12}>
        <Card className="shadow store-item-card">
          <Row>
            <Col md={4}>
              <Link
                classname="text-decoration-none"
                to={`/dashboard/stores/${id}`}
              >
                <Avatar
                  bgColor="#d2ddef3b"
                  textColor="#061123"
                  roundShape="true"
                  initials={name.trim()[0]}
                ></Avatar>{" "}
                <span> {name}</span>
              </Link>
            </Col>
            <Col md={3}>
              <Link
                classname="text-decoration-none"
                to={`/dashboard/stores/${id}`}
              >
                <Avatar
                  roundShape="true"
                  textColor="#fff"
                  bgColor="#061123"
                  initials={rider.trim()[0]}
                ></Avatar>{" "}
                {rider}
              </Link>
            </Col>
            <Col className="text-center" md={2}>
              <Link
                classname="text-decoration-none"
                to={`/dashboard/stores/${id}`}
              >
                <span className="store-item__name">{product_count}</span>
              </Link>
            </Col>
            <Col className="" md={3}>
              <div className="store-item__actions-section">
                <img alt="Edit icon" src={edit} />
                <img alt="Delete icon" src={trash} />
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default StoreItem;
