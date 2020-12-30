import React from "react";
import { useRouter } from "../../util/router";
import AuthSection from "../../components/AuthSection";
import NotFoundPage from "../not-found";

const AuthPage = () => {
  const router = useRouter();

  const {
    match: {
      params: { authType },
      query,
    },
  } = router;

  return (
    <>
      {["register", "login", "forgot-password"].includes(authType) ? (
        <AuthSection
          role={query?.role ? query?.role.toLowerCase() : "seller"}
          authType={authType}
        />
      ) : (
        <NotFoundPage {...router} />
      )}
    </>
  );
};

export default AuthPage;
