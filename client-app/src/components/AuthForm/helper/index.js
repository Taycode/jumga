const afterAuthRedirectPaths = {
  register: "/login",
  login: "/dashboard",
  "forgot-password": "#",
};

const handleAuthh = async (
  authType,
  formData,
  auth,
  setLoading,
  router,
  setAuthMessage
) => {
  setLoading(true);
  setAuthMessage(false);
  const response = await auth[authType](formData);
  response && setLoading(false);

  if (response.status) {
    setAuthMessage({
      type: "success",
      message: "Success !",
    });
    return router.push(afterAuthRedirectPaths[authType]);
  }

  return setAuthMessage({
    type: "error",
    message: response.message,
  });
};

export default handleAuthh;
