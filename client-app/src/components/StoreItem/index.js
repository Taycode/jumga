import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import Avatar from "react-string-avatar";
import "./styles.scss";
import trash from "../../assets/icons/trash.png";
import edit from "../../assets/icons/edit.png";
import { ADD_STORE } from "../../util/constants";

import { handleDeleteStore } from "./helper";

import { Link } from "../../util/router";

const StoreItem = ({ store, setShowModal, removeStore }) => {
  const { name, rider, product_count, id } = store;
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Col md={12}>
        <Card className="shadow store-item-card">
          {loading ? (
            <div className="store-item-loading text-center">
              {" "}
              Please wait...{" "}
            </div>
          ) : (
            <Row>
              <Col md={4}>
                <Link
                  className="text-decoration-none"
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
                  className="text-decoration-none"
                  to={`/dashboard/stores/${id}`}
                >
                  {rider ? (
                    <>
                      {" "}
                      <Avatar
                        roundShape="true"
                        textColor="#fff"
                        bgColor="#061123"
                        initials={rider.trim()[0]}
                      ></Avatar>{" "}
                      {rider}{" "}
                    </>
                  ) : (
                    <>Unassigned</>
                  )}
                </Link>
              </Col>
              <Col className="text-center" md={2}>
                <Link
                  className="text-decoration-none"
                  to={`/dashboard/stores/${id}`}
                >
                  <span className="store-item__name">{product_count}</span>
                </Link>
              </Col>
              <Col className="" md={3}>
                <div className="store-item__actions-section">
                  <img
                    onClick={() => {
                      setShowModal({
                        show: true,
                        modalId: ADD_STORE,
                        data: {
                          storeData: store,
                          editStore: true,
                        },
                      });
                    }}
                    alt="Edit icon"
                    src={edit}
                  />
                  <img
                    onClick={() =>
                      handleDeleteStore(store, setLoading, removeStore)
                    }
                    alt="Delete icon"
                    src={trash}
                  />
                </div>
              </Col>
            </Row>
          )}
        </Card>
      </Col>
    </>
  );
};

export default StoreItem;
