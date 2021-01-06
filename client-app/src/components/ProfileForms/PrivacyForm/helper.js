export const handleFormSubmission = (formData, setLoading) => {
  setLoading(true);
};

export const privacyDetails = [
  {
    name: "oldPassword",
    label: "Old Password",
    required: true,
    type: "password",
  },
  {
    name: "newPassword",
    label: "New Password",
    required: true,
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    required: true,
    type: "password",
  },
];
