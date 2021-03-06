import React, { useState } from "react";
import { FormGroup, Button, Spinner, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "../../util/router";
import { useIpData } from "../../util/useIpData";
import { handleCreateOrder, orderDetails } from "./helper";

const OrderForm = ({ orderItems, clearCartItems }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const userIp = useIpData();

  const submit = (formData) => {
    return handleCreateOrder(
      formData,
      orderItems,
      clearCartItems,
      setLoading,
      router,
      userIp
    );
  };

  return (
    <>
      <Card className="shadow p-5">
        <h3 className="text-center"> Checkout </h3>
        <form onSubmit={handleSubmit(submit)}>
          {orderDetails.map((detail) => (
            <FormGroup key={detail.name}>
              <label
                className={errors.title ? "error-label" : "label"}
                htmlFor="Fname "
              >
                {detail.label}
              </label>
              <input
                ref={register({ required: true })}
                className="form-control"
                type={detail.type}
                name={detail.name}
                disabled={detail.disabled}
              />
            </FormGroup>
          ))}

          <FormGroup>
            <label
              className={errors.address ? "error-label" : "label"}
              htmlFor="address "
            >
              Address
            </label>
            <textarea
              ref={register({ required: true })}
              rows="10"
              className="form-control"
              name="address"
            />
          </FormGroup>

          <Button
            variant="primary"
            block={true}
            size={"md"}
            type="submit"
            disabled={loading}
            className="mt-4"
          >
            {!loading && <span> Checkout </span>}

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
        </form>
      </Card>
    </>
  );
};

export default OrderForm;
