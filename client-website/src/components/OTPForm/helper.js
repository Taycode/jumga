import { notifyUser } from "../../util/helper-functions";
import { confirmOrder } from "../../util/operations/order";
import { verifyPayment } from "../../util/operations/payment";

export const handlePaymentVefirication = async (
  formData,
  setLoading,
  orderDetails,
  setPaymentStep
) => {
  setLoading(true);
  const { flw_ref, id } = orderDetails;

  const response = await verifyPayment({
    flw_ref,
    ...formData,
  });

  if (response.status) {
    const { tx_ref } = response.data.data;

    const orderConfirmData = {
      order_id: id,
      flutterwave_reference: flw_ref,
      jumga_reference: tx_ref,
    };
    const confirmOrderResponse = await confirmOrder(orderConfirmData);

    notifyUser(response);
    confirmOrderResponse && notifyUser(confirmOrderResponse);

    confirmOrderResponse.status && setPaymentStep(3);
    confirmOrderResponse.status && localStorage.removeItem("orderId");
  }

  setLoading(false);
};
