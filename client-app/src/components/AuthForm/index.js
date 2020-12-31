import React, { useState } from "react";
import { Form, Row, Col, Spinner, Button } from "react-bootstrap";
import FormField from "../FormField";
import { useAuth } from "./../../util/auth";
import { useForm } from "react-hook-form";
import handleAuthFormSubmit from "./helper";
import { useRouter } from "./../../util/router.js";
import AuthAlert from "../AuthAlert";

const AuthForm = ({ authType, authFormData }) => {
  const auth = useAuth();
  console.log(auth);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState(false);

  const { handleSubmit, register, errors, getValues } = useForm();

  const onSubmit = (formData) => {
    return handleAuthFormSubmit(
      authType,
      formData,
      auth,
      setLoading,
      router,
      setAuthMessage
    );
  };

  return (
    <>
      {authMessage && (
        <AuthAlert
          type={authMessage.type}
          message={authMessage.message}
        ></AuthAlert>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {["register"].includes(authType) && (
          <Row>
            <Col>
              <Form.Group controlId="First Name">
                <FormField
                  size="md"
                  name="firstName"
                  type="text"
                  placeholder="Firstname"
                  error={errors.firstName}
                  inputRef={register({
                    required: "Your name is required",
                  })}
                ></FormField>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="Last Name">
                <FormField
                  size="md"
                  name="lastName"
                  type="text"
                  placeholder="Lastname"
                  error={errors.lastName}
                  inputRef={register({
                    required: "Your name is required",
                  })}
                ></FormField>
              </Form.Group>
            </Col>
          </Row>
        )}

        {["register", "login", "forgot-password"].includes(authType) && (
          <Form.Group controlId="Email">
            <FormField
              size="md"
              name="email"
              type="email"
              placeholder="Email"
              error={errors.email}
              inputRef={register({
                required: "Your email is required",
              })}
            ></FormField>
          </Form.Group>
        )}
        {["register", "login", "change-password"].includes(authType) && (
          <Form.Group controlId="Password">
            <FormField
              size="md"
              name="password"
              type="password"
              placeholder="Password"
              error={errors.password}
              inputRef={register({
                required: "Please enter a password",
              })}
            ></FormField>
          </Form.Group>
        )}

        {["register", "change-password"].includes(authType) && (
          <Form.Group controlId="Confirm Password">
            <FormField
              size="md"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              error={errors.confirmPassword}
              inputRef={register({
                required: "Please enter your password again",
                validate: (value) => {
                  if (value === getValues().password) {
                    return true;
                  } else {
                    return "This doesn't match your password";
                  }
                },
              })}
            ></FormField>
          </Form.Group>
        )}

        <Button
          variant="primary"
          block={true}
          size={"md"}
          type="submit"
          disabled={loading}
          className="mt-4"
        >
          {!loading && <span>{authFormData?.buttonText}</span>}

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
      </Form>
    </>
  );
};

export default AuthForm;
