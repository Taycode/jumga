export const handleFormSubmission = (formData, setLoading) => {
  setLoading(true);
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
