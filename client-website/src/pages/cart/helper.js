import { createOrder } from "../../util/operations/order";
import { notifyUser } from "../../util/helper-functions";

const formatProductsData = (products) => {
  const productsArray = [];
  for (let i = 0; i < products.length; i++) {
    const { id, quantity } = products[i];

    const data = {
      id,
      quantity,
    };

    productsArray.push(data);
  }

  return productsArray;
};

export const handleCheckout = async (
  products,
  usersCountry,
  setLoading,
  router
) => {
  setLoading(true);

  const formatedProductsData = await formatProductsData(products);

  const orderData = {
    products: formatedProductsData,
    country: usersCountry.toLowerCase(),
  };
  console.log(orderData);

  const response = await createOrder(orderData);

  response && notifyUser(response);

  if (response.status) {
  }

  //   Clear cart in localStorage
  //    Save OrderId in localstorage;
  router.push(`/order/1`);

  setLoading(false);
};
