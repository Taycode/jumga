import React from "react";

const ShowOrder = ({ setShowModal, data }) => {
  const { order } = data;
  const {
    status,
    store_name,
    rider_commision,
    rider: { country },
    order: { address, name, phone_number, id },
  } = order;
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
            {" "}
            {getCurrency(country)} {formatMoney(rider_commision)}{" "}
          </span>
        </Col>
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

      {status !== "delivered" && (
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
      )}
    </section>
  );
};

export default ShowOrder;
