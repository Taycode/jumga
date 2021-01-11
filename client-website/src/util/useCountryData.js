import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useCountryData = () => {
  const [data, setData] = useState([]);

  const getBanks = async function () {
    try {
      const { CancelToken } = axios;
      const source = CancelToken.source();
      const data = await axios({
        method: "get",
        url: `https://ipapi.co/json/`,
        cancelToken: source.token,
      });

      return data.data;
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
    getBanks().then((response) => setData(response));

    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
