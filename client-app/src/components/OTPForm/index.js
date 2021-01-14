import React, { useState, useContext } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handlePaymentVefirication } from "./helper";

const OTPForm = ({ userDetails, setPaymentStep }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const submit = (formData) => {
    return handlePaymentVefirication(formData, setLoading, setPaymentStep);
  };

  return (
    <>
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
            type="number"
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
