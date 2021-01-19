import React, { useEffect, useState } from "react";
import { FormGroup, Button, Spinner, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { COUNTRY_CODE_MAP } from "../../../util/constants";
import { useBankData } from "../../../util/useBankData";
import PageLoader from "../../PageLoader";
import { handleFormSubmission, paymentDetails } from "./helper";

const Paymentdata = ({ user, setShowModal, setUser, forced }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [bankLoading, setBankLoading] = useState(true);
  const [banksData, setBanksData] = useState(false);

  const submit = (formData) => {
    return handleFormSubmission(
      formData,
      setLoading,
      setShowModal,
      setUser,
      forced,
      user
    );
  };

  const countryCode = COUNTRY_CODE_MAP[user.country];

  const bankList = useBankData(countryCode);

  useEffect(() => {
    setBanksData(bankList);
    bankList && bankList.length > 0 && setBankLoading(false);
  }, [bankList]);

  return (
    <>
      {bankLoading ? (
        <PageLoader />
      ) : (
        <form className="mt-3 pl-5 pr-5" onSubmit={handleSubmit(submit)}>
          <FormGroup controlId="country">
            <FormLabel>Bank Name </FormLabel>
            <select
              ref={register({
                required: "Please select a bank",
              })}
              name="account_bank"
              className="form-control"
            >
              {banksData &&
                banksData.map((item) => (
                  <option
                    selected={
                      user.account_bank && user.account_bank === item.code
                        ? "selected"
                        : ""
                    }
                    key={item.id}
                    value={item.code}
                  >
                    {item.name}
                  </option>
                ))}
            </select>
          </FormGroup>

          {paymentDetails.map((detail) => (
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
            {!loading && <span>Update </span>}

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
      )}
    </>
  );
};

export default Paymentdata;
