import React, { useState } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleStoreCreation } from "./helper";

const AddStore = ({ setShowModal }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const submit = (formData) => {
    return handleStoreCreation(
      formData,
      setLoading,
      setShowModal
      //   addNewCollection
    );
  };

  return (
    <>
      <h5 className="text-center mb-3">Add Store</h5>

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
          {!loading && <span>Add Store</span>}

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

export default AddStore;
