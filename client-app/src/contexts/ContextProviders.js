import React from "react";
import { Provider as StoresProvider } from "./storeContext";
import { Provider as ProductsProvider } from "./productContext";
import { Provider as DeliveriesProvider } from "./deliveryContext";
import { Provider as OrdersPRovider } from "./orderContext";

const ContextProvider = ({ children }) => {
  return (
    <DeliveriesProvider>
      <OrdersPRovider>
        <StoresProvider>
          <ProductsProvider>{children}</ProductsProvider>
        </StoresProvider>
      </OrdersPRovider>
    </DeliveriesProvider>
  );
};

export default ContextProvider;
