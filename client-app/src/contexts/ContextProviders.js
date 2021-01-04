import React from "react";
import { Provider as StoresProvider } from "./storeContext";

const ContextProvider = ({ children }) => {
  return <StoresProvider>{children}</StoresProvider>;
};

export default ContextProvider;
