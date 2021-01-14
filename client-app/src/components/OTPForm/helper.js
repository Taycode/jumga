import { notifyUser } from "../../util/helper-functions";
import { verifyUser } from "../../util/operations/user";
import { verifyPayment } from "../../util/operations/payment";

export const handlePaymentVefirication = async (
  formData,
  setLoading,
  setPaymentStep
) => {
  setLoading(true);
  const flw_ref = localStorage.getItem("flwRef");

  const response = await verifyPayment({
    flw_ref,
    ...formData,
  });

  if (response.status) {
    const { id } = response.data.data;

    const verconfirmData = {
      transaction_id: id,
    };
    const confirmVerResponse = await verifyUser(verconfirmData);

    notifyUser(response);
    confirmVerResponse && notifyUser(confirmVerResponse);

    confirmVerResponse.status && setPaymentStep(3);

    // Undo Quickie
    confirmVerResponse.status && localStorage.removeItem("flwRef");
  }

  setLoading(false);
};
