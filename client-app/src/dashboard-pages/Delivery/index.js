import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DeliveryList from "../../components/DeliveryList";
import { Context as DeliveryContext } from "./../../contexts/deliveryContext";

const Delivery = ({ setShowModal, mediaQuery }) => {
  const {
    state: { deliveries },
    updateDelivery,
    fetchAllDeliveries,
  } = useContext(DeliveryContext);

  useEffect(() => {
    fetchAllDeliveries();
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
              Deliveries
            </h5>
          </Col>
        </Row>
        <DeliveryList
          updateDelivery={updateDelivery}
          deliveries={deliveries}
          setShowModal={setShowModal}
          mediaQuery={mediaQuery}
        />
      </Container>
    </>
  );
};

export default Delivery;
