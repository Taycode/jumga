import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormField from "../../components/FormField";

const SearchProducts = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (formData) => {
    return alert("this feature is not active yet !");
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="Search">
          <FormField
            size="md"
            name="searchParam"
            type="search"
            placeholder="Search"
            // error={}
            inputRef={register({
              required: "Please  a search term.",
            })}
          ></FormField>
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchProducts;
