import { notifyUser } from "../../util/helper-functions";
import { createOrder } from "../../util/operations/order";

export const orderDetails = [
  {
    name: "name",
    label: "Full Name",
    required: true,
    type: "text",
  },
  {
    name: "phone_number",
    label: "Phone Number",
    required: true,
    type: "number",
  },
  {
    name: "email",
    label: "Email",
    required: true,
    type: "email",
  },
];

const formatProductsData = (products) => {
  const productsArray = [];
  for (let i = 0; i < products.length; i++) {
    const { id, quantity } = products[i];

    const data = {
      product_id: id,
      quantity,
    };

    productsArray.push(data);
  }

  return productsArray;
};

export const handleCreateOrder = async (
  formdata,
  cartdata,
  usersCountry,
  clearCartItems,
  setLoading,
  router
) => {
  setLoading(true);

  const formatedProductsData = await formatProductsData(cartdata);

  const orderData = {
    orders: formatedProductsData,
    country: usersCountry.toLowerCase(),
    ...formdata,
  };

  const response = await createOrder(orderData);

  response && notifyUser(response);

  if (response.status) {
    const {
      data: { id },
    } = response;
    clearCartItems(id);
    router.push(`/pay/${id}`);
  }

  setLoading(false);
};
