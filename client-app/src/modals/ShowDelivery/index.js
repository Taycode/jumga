import React, { useContext, useState } from "react";
import { updateTextMap, handleUpdateDelivery } from "./helper";
import { Button, Spinner, Row, Col, Badge } from "react-bootstrap";
import { Context as DeliveryContext } from "../../contexts/deliveryContext";
import "./styles.scss";

const ShowDelivery = ({ setShowModal, data }) => {
  const { delivery } = data;
  const {
    status,
    store_name,
    order: { address, name, phone_number, id },
  } = delivery;
  const [loading, setLoading] = useState(false);

  const { updateDelivery } = useContext(DeliveryContext);

  return (
    <>
      <section>
        <h5 className="text-center"> Delivery details</h5>
        <div className="d-block m-auto text-center mb-5">
          <Badge variant="dark"> #{id} </Badge>
        </div>
        <Row>
          <Col className="mt-3" md={4}>
            <span className="dd-title"> Delivery Address</span>
            <span className="dd-data ">{address} </span>
          </Col>
          <Col className="mt-3" md={4}>
            <span className="dd-title"> Reciever's Name</span>
            <span className="dd-data ">{name} </span>
          </Col>
          <Col className="mt-3" md={4}>
            <span className="dd-title"> Reciever's Phone number</span>
            <span className="dd-data ">{phone_number} </span>
          </Col>
          <Col className="mt-3" md={4}>
            <span className="dd-title"> Store Name</span>
            <span className="dd-data ">{store_name} </span>
          </Col>
        </Row>

        <div>
          <Button
            onClick={() =>
              handleUpdateDelivery(
                delivery,
                setLoading,
                updateDelivery,
                setShowModal
              )
            }
            variant="primary"
            block={true}
            size={"md"}
            type="submit"
            disabled={loading}
            className="mt-4"
          >
            {!loading && <span>{updateTextMap[status]}</span>}

            {loading && (
              <Spinner
                animation="border"
                size="sm"
                role="status"
                aria-hidden={true}
                className="align-baseline"
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </Button>
        </div>
      </section>
    </>
  );
};

export default ShowDelivery;
