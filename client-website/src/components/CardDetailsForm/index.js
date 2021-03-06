import React, { useContext, useState } from "react";
import { FormGroup, Form, Button, Spinner, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { formatMoney, getCurrency } from "../../util/helper-functions";
import { handlePayment } from "./helper";
import { Context as OrderContext } from "../../contexts/orderContext";

const CardDetailsForm = ({ orderDetails, setPaymentStep }) => {
  const { country, total_cost } = orderDetails;
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const { updateOrderdata } = useContext(OrderContext);

  const submit = (formData) => {
    return handlePayment(
      orderDetails,
      formData,
      setLoading,
      setPaymentStep,
      updateOrderdata
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <FormGroup>
          <label
            className={errors.card_number ? "error-label" : "label"}
            htmlFor="card number "
          >
            Card Number
          </label>
          <input
            ref={register({ required: true })}
            className="form-control"
            type="number"
            name="card_number"
            defaultValue="5531886652142950"
          />
        </FormGroup>
        <Form.Row>
          <Col>
            <FormGroup>
              <label
                className={errors.expired_month ? "error-label" : "label"}
                htmlFor="expire  month  "
              >
                Expiry Month
              </label>
              <input
                ref={register({ required: true })}
                className="form-control"
                type="number"
                name="expiry_month"
                defaultValue="09"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label
                className={errors.expired_month ? "error-label" : "label"}
                htmlFor="expire  year  "
              >
                Expiry Year
              </label>
              <input
                ref={register({ required: true })}
                className="form-control"
                type="number"
                name="expiry_year"
                defaultValue="32"
              />
            </FormGroup>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <FormGroup>
              <label
                className={errors.pin ? "error-label" : "label"}
                htmlFor="pin  "
              >
                Pin
              </label>
              <input
                ref={register({ required: true })}
                className="form-control"
                type="password"
                name="pin"
                defaultValue="3310"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label
                className={errors.expired_month ? "error-label" : "label"}
                htmlFor="cvv    "
              >
                Cvv
              </label>
              <input
                ref={register({ required: true })}
                className="form-control"
                type="number"
                name="cvv"
                defaultValue="564"
              />
            </FormGroup>
          </Col>
        </Form.Row>
        <Button
          variant="primary"
          block={true}
          size={"md"}
          type="submit"
          disabled={loading}
          className="mt-4"
        >
          {!loading && (
            <span>
              {" "}
              Pay {getCurrency(country)} {formatMoney(total_cost)}{" "}
            </span>
          )}

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
    </>
  );
};

export default CardDetailsForm;
