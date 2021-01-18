import React, { useState } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleFormSubmission, personalDetails } from "./helper";

const PersonalData = ({ user }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const submit = (formData) => {
    return handleFormSubmission(formData, setLoading);
  };

  return (
    <>
      <form className="mt-3 pl-5 pr-5" onSubmit={handleSubmit(submit)}>
        {personalDetails.map((detail) => (
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
              defaultValue={user[detail.name]}
              disabled={detail.disabled}
            />
          </FormGroup>
        ))}

        <Button
          variant="primary"
          block={true}
          size={"md"}
          type="submit"
          disabled={loading}
          className="mt-5"
        >
          {!loading && <span>Update Profile</span>}

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

export default PersonalData;
