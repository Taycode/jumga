import React, { useState } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handlePaymentVefirication } from "./helper";

const OTPForm = ({ orderDetails, setPaymentStep }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const submit = (formData) => {
    return handlePaymentVefirication(
      formData,
      setLoading,
      orderDetails,
      setPaymentStep
    );
  };

  return (
    <>
      <h5 className="text-center mb-3"> Verify Payment</h5>
      <form onSubmit={handleSubmit(submit)}>
        <FormGroup>
          <label
            className={errors.title ? "error-label" : "label"}
            htmlFor="OTP "
          >
            OTP
          </label>
          <input
            ref={register({ required: true })}
            className="form-control"
            type="password"
            name="otp"
            defaultValue="12345"
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
          {!loading && <span> Verify Payment </span>}

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

export default OTPForm;
