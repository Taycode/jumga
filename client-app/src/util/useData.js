import { useState, useEffect } from "react";

export const useData = (callApiForData) => {
  const [data, setData] = useState({});

  useEffect(() => {
    callApiForData().then((response) => setData(response));

    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
