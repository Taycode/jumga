import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import { VIEW_ORDER } from "../../util/constants";

import trash from "../../assets/icons/trash.png";
import edit from "../../assets/icons/edit.png";
import { useRouter } from "../../util/router";
import "../StoreItem/styles.scss";

const OrderItem = ({ order, setShowModal }) => {
  const router = useRouter();
  const { product_name, rider, id, delivery_address, delivery_status } = order;
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
              <Col
                onClick={() => router.push(`/dashboard/stores/${id}`)}
                className="is-clickable"
                md={4}
              >
                <span> product name</span>
              </Col>
              <Col
                onClick={() => router.push(`/dashboard/stores/${id}`)}
                className="is-clickable"
                md={3}
              >
                Hi
              </Col>
              <Col
                onClick={() => router.push(`/dashboard/stores/${id}`)}
                className="text-center is-clickable"
                md={2}
              >
                <span className="store-item__name"> Blaaah</span>
              </Col>
              <Col className="" md={3}>
                <div className="store-item__actions-section">
                  <img
                    onClick={() => {
                      setShowModal({
                        show: true,
                        modalId: VIEW_ORDER,
                        data: {},
                      });
                    }}
                    alt="view order "
                    src={edit}
                  />
                  {/* <img
                    onClick={() =>
                      handleDeleteStore(store, setLoading, removeStore)
                    }
                    alt="Delete icon"
                    src={trash}
                  /> */}
                </div>
              </Col>
            </Row>
          )}
        </Card>
      </Col>
    </>
  );
};

export default OrderItem;
