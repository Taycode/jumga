import { createOrder } from "../../util/operations/order";
import { notifyUser } from "../../util/helper-functions";

export const handleCheckout = async (
  products,
  usersCountry,
  setLoading,
  router
) => {
  setLoading(true);
  const orderData = { products, country: usersCountry };

  const response = await createOrder(orderData);

  response && notifyUser(response);

  if (response.status) {
  }
  router.push(`/order/1`);

  setLoading(false);
};
