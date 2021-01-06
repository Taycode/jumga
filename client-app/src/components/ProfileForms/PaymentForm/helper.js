export const handleFormSubmission = (formData, setLoading) => {
  setLoading(true);
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
    disabled: true,
  },
  {
    name: "password",
    label: "Password",
    required: true,
    type: "password",
  },
];
