import React, { useState } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handlePayment } from "./helper";

const MakePayment = ({ setShowModal, data }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { userData = {} } = data;

  const submit = (formData) => {
    return handlePayment(
      { ...userData, ...formData },
      setLoading,
      setShowModal
    );
  };

  return (
    <>
      <h5 className="text-center mb-3">Get Verified</h5>
      <form onSubmit={handleSubmit(submit)}>
        <FormGroup>
          <label
            className={errors.title ? "error-label" : "label"}
            htmlFor="Title "
          >
            Store Name
          </label>
          <input
            ref={register({ required: true })}
            className="form-control"
            type="text"
            name="name"
            defaultValue={userData?.name}
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
          {!loading && <span> Get Verified </span>}

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

export default MakePayment;
