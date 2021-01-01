import axios from "axios";

const logRequests = () => {
  return (
    process.env.NODE_ENV === "development" &&
    (axios.interceptors.request.use((request) => {
      console.log("Starting Request", request);
      return request;
    }),
    axios.interceptors.response.use((response) => {
      console.log("Response:", response);
      return response;
    }))
  );
};

logRequests();

export async function apiRequest(path, method = "GET", data, params) {
  const accessToken = localStorage.getItem("token");

  const { CancelToken } = axios;
  const source = CancelToken.source();

  try {
    const response = await axios({
      url: `${process.env.REACT_APP_API_BASEURL}${path}`,
      method,
      headers: {
        Authorization: accessToken ? `token ${accessToken}` : null,
      },
      params: {
        ...params,
      },
      cancelToken: source.token,
      data,
    });
    const {
      data: { status, message },
    } = response;
    if (status) {
      return {
        status: true,
        data: response.data.data,
        message,
      };
    }
  } catch (err) {
    return {
      status: false,
      message: err.response ? err.response.data.message : err.message,
      err,
    };
  }
}
