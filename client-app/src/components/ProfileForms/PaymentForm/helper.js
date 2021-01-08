import { editDetails } from "../../../util/operations/account";
import { notifyUser } from "../../../util/helper-functions";

export const handleFormSubmission = async (formData, setLoading) => {
  setLoading(true);

  const response = await editDetails(formData);

  response && notifyUser(response);

  if (response && response.status) {
    //
  }
  return setLoading(false);
};

export const paymentDetails = [
  {
    name: "account_number",
    label: "Account Number",
    required: true,
    type: "number",
  },
  {
    name: "account_name",
    label: "Account Name",
    required: false,
    type: "text",
    // disabled: true,
  },
  //   {
  //     name: "password",
  //     label: "Password",
  //     required: true,
  //     type: "password",
  //   },
];
