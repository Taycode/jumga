import { currencyCodes } from "../../util/constants";
import { notifyUser } from "../../util/helper-functions";
import { initiatePayment } from "../../util/operations/payment";

export const handlePayment = async (
  orderDetails,
  formData,
  setLoading,
  setPaymentStep,
  updateOrderdata
) => {
  setLoading(true);
  const { total_cost, country, email, name } = orderDetails;

  const paymentDetails = {
    ...formData,
    amount: total_cost,
    currency: currencyCodes[country],
    email,
    fullname: name,
  };

  const response = await initiatePayment(paymentDetails);

  response && notifyUser(response);
  setLoading(false);

  if (response.status) {
    const { flw_ref } = response.data.data;

    await updateOrderdata({ flw_ref });

    setPaymentStep(2);
  }
};
