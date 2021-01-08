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

export const personalDetails = [
  {
    name: "first_name",
    label: "First Name",
    required: true,
    type: "text",
  },
  {
    name: "last_name",
    label: "Last Name",
    required: true,
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    required: true,
    type: "email",
    disabled: true,
  },
];
