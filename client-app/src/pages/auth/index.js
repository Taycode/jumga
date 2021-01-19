import React, { useEffect } from "react";
import { useRouter } from "../../util/router";
import AuthSection from "../../components/AuthSection";
import NotFoundPage from "../not-found";
import { useAuth } from "../../util/auth";

const AuthPage = () => {
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    user && router.push("/dashboard");
  }, [user]);

  const {
    match: {
      params: { authType },
    },
    query: { role },
  } = router;

  return (
    <>
      {((role && ["seller", "rider"].includes(role)) || !role) &&
      ["register", "login", "forgot-password"].includes(authType) ? (
        <AuthSection
          role={role ? role.toLowerCase() : "seller"}
          authType={authType}
        />
      ) : (
        <NotFoundPage {...router} />
      )}
    </>
  );
};

export default AuthPage;
