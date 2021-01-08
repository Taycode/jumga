import axios from "axios";
import { toast } from "react-toastify";

export const verifyAccount = async function (data) {
  try {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    const banks = await axios({
      method: "POST",
      url: `https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/accounts/resolve`,
      cancelToken: source.token,
      //   headers: {
      //     Authorization: "Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X",
      //     // Authorization: `Bearer ${process.env.REACT_APP_FLUTTERWAVE_API_KEY} `,
      //   },
    });

    if (banks.status === 200) {
      const { data } = banks;
      // console.log(data.data.banks);
      return data.data;
    }
  } catch (err) {
    if (axios.isCancel(err)) {
      toast.error("Request has been canceled");
      return [];
    }
    toast.error(err.message);
    return [];
  }
};
