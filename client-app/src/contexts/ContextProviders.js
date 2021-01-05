import React from "react";
import { Provider as StoresProvider } from "./storeContext";
import { Provider as ProductsProvider } from "./productContext";

const ContextProvider = ({ children }) => {
  return (
    <StoresProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </StoresProvider>
  );
};

export default ContextProvider;
