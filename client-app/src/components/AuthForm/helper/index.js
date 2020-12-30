const afterAuthRedirectPaths = {
  register: "/user/login",
  login: "/dashboard",
  "forgot-password": "#",
};

export default async (
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
      message: response.message,
    });
    return router.push(afterAuthRedirectPaths[authType]);
  }

  return setAuthMessage({
    type: "error",
    message: response.message,
  });
};
