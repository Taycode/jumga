import React, { useEffect, useContext } from "react";
import PageLoader from "../../components/PageLoader";
import { Container, Row, Col } from "react-bootstrap";
import OrderList from "../../components/OrderList";
import { Context as OrdersContext } from "../../contexts/orderContext";

const Orders = ({ setShowModal, mediaQuery }) => {
  const {
    state: { orders, loading },
    fetchAllOrders,
  } = useContext(OrdersContext);

  useEffect(() => {
    fetchAllOrders(orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5
              className={`${
                mediaQuery === "isMobile" && "ml-4"
              } dashboard-header mb-5`}
            >
              {" "}
              Orders
            </h5>
          </Col>
        </Row>

        {loading ? (
          <PageLoader />
        ) : (
          <OrderList
            mediaQuery={mediaQuery}
            orders={orders}
            setShowModal={setShowModal}
          />
        )}
      </Container>
    </>
  );
};

export default Orders;
