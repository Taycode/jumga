import React, { useContext, useState } from "react";
import { updateTextMap, handleUpdateDelivery } from "./helper";
import { Button, Spinner } from "react-bootstrap";
import { Context as DeliveryContext } from "../../contexts/deliveryContext";

const ShowDelivery = ({ setShowModal, data }) => {
  const { delivery } = data;
  const { delivery_status } = delivery;
  const [loading, setLoading] = useState(false);

  const { updateDelivery } = useContext(DeliveryContext);

  return (
    <>
      <section>
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
            {!loading && <span>{updateTextMap[delivery_status]}</span>}

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
