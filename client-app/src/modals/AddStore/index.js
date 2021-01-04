import React, { useState, useContext } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleStoreCreation } from "./helper";
import { Context as StoreContext } from "./../../contexts/storeContext";

const AddStore = ({ setShowModal, data }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { editStore = false, storeData = {} } = data;

  const { addNewStore, editAStore } = useContext(StoreContext);

  const submit = (formData) => {
    return handleStoreCreation(
      { ...storeData, ...formData },
      setLoading,
      setShowModal,
      addNewStore,
      editAStore,
      editStore
    );
  };

  return (
    <>
      <h5 className="text-center mb-3">
        {" "}
        {editStore ? "Edit Store" : "Add store "}
      </h5>
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
            defaultValue={storeData?.name}
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
          {!loading && <span>{editStore ? "Edit Store" : "Add Store "}</span>}

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
