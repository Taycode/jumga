import React, { useState, useEffect, useContext, createContext } from "react";
import { apiRequest } from "./apiRequest";
import PageLoader from "../components/PageLoader";
import { history } from "./router";

const authContext = createContext();

// Context Provider component that wraps your app and makes auth object
// available to any child component that calls the useAuth() hook.
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook that enables any component to subscribe to auth state
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleAuthStateChange = async () => {
    const response = await apiRequest("/auth/user", "GET");
    if (response && response.status) {
      return setUser({ ...response.data.user });
    }
    return setUser(false);
  };

  const register = async (registerData) => {
    const response = await apiRequest(
      "user/registration/",
      "POST",
      registerData
    );
    return response;
  };

  const login = async (signInData) => {
    const loginResponse = await await apiRequest(
      "user/login/",
      "POST",
      signInData
    );
    if (loginResponse && loginResponse.status) {
      const {
        data: { token },
      } = loginResponse;
      localStorage.setItem("token", token);
      await handleAuthStateChange();
    }
    return loginResponse;
  };

  const logout = () => {
    setUser(false);
    return localStorage.clear();
  };

  useEffect(() => {
    console.log("called");
    handleAuthStateChange();
  }, []);

  return {
    user,
    register,
    login,
    logout,
  };
}

// A Higher Order Component for requiring authentication
export const requireAuth = (Component) => {
  return (props) => {
    // Get authenticated user
    const auth = useAuth();

    useEffect(() => {
      // Redirect if not signed in
      if (auth.user === false) {
        history.replace("/user/login");
      }
    }, [auth]);

    // Show loading indicator
    // We're either loading (user is null) or we're about to redirect (user is false)
    if (!auth.user) {
      return <PageLoader />;
    }

    // Render component now that we have user
    return <Component {...props} />;
  };
};
