import React from "react";
import { Provider as StoresProvider } from "./storeContext";
import { Provider as ProductsProvider } from "./productContext";
import { Provider as DeliveriesProvider } from "./deliveryContext";

const ContextProvider = ({ children }) => {
  return (
    <DeliveriesProvider>
      <StoresProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </StoresProvider>
    </DeliveriesProvider>
  );
};

export default ContextProvider;
