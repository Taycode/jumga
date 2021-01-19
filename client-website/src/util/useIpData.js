import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// d0449587db056408a2e7cc50d38b60ce00f433283bfb0801bd39fd05

export const useIpData = () => {
  const [data, setData] = useState("");

  const getData = async function () {
    try {
      const { CancelToken } = axios;
      const source = CancelToken.source();
      const data = await axios({
        method: "get",
        url: "https://api.ipify.org?format=json",
        cancelToken: source.token,
      });

      return data.data.ip;
    } catch (err) {
      if (axios.isCancel(err)) {
        toast.error("Request has been canceled");
        return [];
      }
      toast.error(err.message);
      return {};
    }
  };

  useEffect(() => {
    getData().then((response) => setData(response));

    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
