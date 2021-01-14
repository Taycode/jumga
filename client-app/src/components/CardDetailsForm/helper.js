import { currencyCodes, SELLER_VERIFY_AMOUNT } from "../../util/constants";
import { notifyUser } from "../../util/helper-functions";
import { initiatePayment } from "../../util/operations/payment";

export const handlePayment = async (
  userDetails,
  formData,
  setLoading,
  setPaymentStep
) => {
  setLoading(true);
  const { email, first_name, last_name } = userDetails;

  alert(first_name);
  const paymentDetails = {
    ...formData,
    amount: SELLER_VERIFY_AMOUNT,
    currency: currencyCodes["uk"],
    email,
    fullname: `${first_name} ${last_name}`,
  };

  const response = await initiatePayment(paymentDetails);

  response && notifyUser(response);
  setLoading(false);

  if (response.status) {
    const { flw_ref } = response.data.data;

    // Ugghhfff a Quickie !
    localStorage.setItem("flwRef", flw_ref);

    setPaymentStep(2);
  }
};
