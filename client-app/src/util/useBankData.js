import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useBankData = (countryCode) => {
  const [data, setData] = useState([]);

  const getBanks = async function () {
    try {
      const { CancelToken } = axios;
      const source = CancelToken.source();
      const banks = await axios({
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/banks/${countryCode}`,
        cancelToken: source.token,
        headers: {
          Authorization: "Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X",
          // Authorization: `Bearer ${process.env.REACT_APP_FLUTTERWAVE_API_KEY} `,
        },
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

  useEffect(() => {
    getBanks().then((response) => setData(response));

    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  return data;
};
