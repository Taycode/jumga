import React from "react";
import { Provider as ProductsProvider } from "./productsContext";
import { Provider as CartsProvider } from "./cartContext";

const ContextProvider = ({ children }) => {
  return (
    <CartsProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </CartsProvider>
  );
};

export default ContextProvider;
