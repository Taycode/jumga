import React, { useState, useContext } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleProductCreation } from "./helper";
import { Context as ProductsContext } from "./../../contexts/storeContext";

// image1, image2, name, description, price, country, rating, id
const AddStore = ({ setShowModal, data }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { editProduct = false, productData = {} } = data;

  const { addNewProduct, editAProduct } = useContext(ProductsContext);

  const submit = (formData) => {
    return handleProductCreation(
      { ...productData, ...formData },
      setLoading,
      setShowModal,
      addNewProduct,
      editAProduct,
      editProduct
    );
  };

  return (
    <>
      <h5 className="text-center mb-3">
        {" "}
        {editProduct ? "Edit Product" : "Add Product "}
      </h5>
      <form onSubmit={handleSubmit(submit)}>
        <FormGroup>
          <label
            className={errors.title ? "error-label" : "label"}
            htmlFor="Title "
          >
            Product Name
          </label>
          <input
            ref={register({ required: true })}
            className="form-control"
            type="text"
            name="name"
            defaultValue={productData?.name}
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
          {!loading && (
            <span>{editProduct ? "Edit Product" : "Add Product "}</span>
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

export default AddStore;
