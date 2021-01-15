import { notifyUser } from "../../util/helper-functions";

export const handleExistingOrder = async (orderId, router) => {
  await notifyUser({ status: true, message: "You have a pending order" });

  setTimeout(() => router.push(`/pay/${orderId}`), 1000);
};
