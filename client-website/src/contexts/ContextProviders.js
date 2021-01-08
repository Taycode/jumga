import React from "react";
import { Provider as ProductsProvider } from "./productsContext";

const ContextProvider = ({ children }) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default ContextProvider;
