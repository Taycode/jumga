import React from "react";
import { Provider as ProductsProvider } from "./productsContext";
import { Provider as CartsProvider } from "./cartContext";
import { Provider as OrdersProvider } from "./orderContext";

const ContextProvider = ({ children }) => {
  return (
    <CartsProvider>
      <OrdersProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </OrdersProvider>
    </CartsProvider>
  );
};

export default ContextProvider;
