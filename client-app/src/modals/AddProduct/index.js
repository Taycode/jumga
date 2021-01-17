import React, { useState, useContext, useEffect } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleProductCreation, calculateImagesLength } from "./helper";
import { Context as ProductsContext } from "./../../contexts/productContext";
import { Context as StoresContext } from "./../../contexts/storeContext";
import { useAuth } from "../../util/auth";
import uploadImg from "../../assets/icons/upload.png";
import "./styles.scss";

const AddStore = ({ setShowModal, data }) => {
  const {
    user: { country },
  } = useAuth();

  const { register, handleSubmit, errors, getValues } = useForm();
  const [loading, setLoading] = useState(false);
  const { editProduct = false, productData = {} } = data;

  const [count, setCount] = useState(false);

  const { addNewProduct, editAProduct } = useContext(ProductsContext);

  const {
    state: { stores },
    fetchAllStores,
  } = useContext(StoresContext);

  useEffect(() => {
    fetchAllStores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            className={errors.storeId ? "error-label" : "label"}
            htmlFor="Store "
          >
            Store
          </label>
          <select
            ref={register({ required: true })}
            className="form-control"
            name="storeId"
            // disabled={productData.storeId && true}
          >
            {stores.map((store) => (
              <option
                selected={
                  parseInt(productData.storeId) === parseInt(store.id)
                    ? "selected"
                    : false
                }
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

        <div className="upload-card mb-4">
          <label className="upload-btn mb-3">
            <img
              className="upload-img"
              src={uploadImg}
              alt="Upload file icon"
            />
            <span className="mt-3 file-name">
              {errors.images
                ? errors.images && getValues().images.length === 1
                  ? "Please select more than one image"
                  : "Please select images to upload"
                : count > 0
                ? `${count} image(s) selected`
                : "Select file"}
            </span>
            <input
              type="file"
              ref={register({
                required: true,
                validate: (value) => {
                  if (value && value.length > 1) {
                    return true;
                  } else {
                    return "Select an image";
                  }
                },
              })}
              accept=".png, .jpeg, .jpg,"
              name="images"
              multiple="multiple"
              onChange={(e) =>
                calculateImagesLength(getValues().images, setCount)
              }
            />
          </label>
        </div>
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
