export const getStoreProducts = (products, storeId) => {
  return products.filter(
    (product) => parseInt(product.store) === parseInt(storeId)
  );
};

export const getStoreName = (stores, id) => {
  const store = stores.find((store) => parseInt(store.id) === parseInt(id));

  return store;
};
