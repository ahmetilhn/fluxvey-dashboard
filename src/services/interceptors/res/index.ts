import { AxiosError, AxiosInstance } from "axios";
import { toast } from "react-hot-toast";

export default (axios: AxiosInstance) => {
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    },
    function (error: AxiosError<{ message?: string }>) {
      if (error instanceof AxiosError && error?.response?.data) {
        toast.error((error.response.data.message as string) || "Unknown error");
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
};
