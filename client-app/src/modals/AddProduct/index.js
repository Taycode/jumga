import React, { useState, useContext, useEffect } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleProductCreation } from "./helper";
import { Context as ProductsContext } from "./../../contexts/productContext";
import { Context as StoresContext } from "./../../contexts/storeContext";
import { SUPPORTED_COUNTRIES } from "../../util/constants";
import { useAuth } from "../../util/auth";

const AddStore = ({ setShowModal, data }) => {
  const {
    user: { country },
  } = useAuth();

  const { register, handleSubmit, errors, getValues } = useForm();
  const [loading, setLoading] = useState(false);
  const { editProduct = false, productData = {} } = data;

  const { addNewProduct, editAProduct } = useContext(ProductsContext);

  const {
    state: { stores },
    fetchAllStores,
  } = useContext(StoresContext);

  useEffect(() => {
    fetchAllStores();
  }, []);

  const submit = (formData) => {
    return handleProductCreation(
      { ...productData, ...formData, country },
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

        <FormGroup>
          <label
            className={errors.currency ? "error-label" : "label"}
            htmlFor="Store "
          >
            Store
          </label>
          <select
            ref={register({ required: true })}
            className="form-control"
            name="storeId"
          >
            {stores.map((store) => (
              <option
                selected={productData.storeId === store.id ? "selected" : false}
                key={store.id}
                value={store.id}
              >
                {store.name}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormGroup>
          <label
            className={errors.title ? "error-label" : "label"}
            htmlFor="Title "
          >
            Price
          </label>
          <input
            ref={register({
              required: true,
              validate: (value) => {
                if (value > 0) {
                  return true;
                } else {
                  return "Product cannot be valueless";
                }
              },
            })}
            className="form-control"
            type="number"
            name="price"
            defaultValue={productData?.price}
          />
        </FormGroup>

        <FormGroup>
          <label
            className={errors.message ? "error-label" : "label"}
            htmlFor="description "
          >
            Product Description
          </label>
          <textarea
            ref={register({ required: true })}
            rows="10"
            className="form-control"
            name="description"
            defaultValue={productData?.description}
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
