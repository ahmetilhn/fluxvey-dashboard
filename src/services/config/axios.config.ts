import axios, { AxiosInstance } from "axios";
import resInterceptor from "../interceptors/res";
// Set config defaults when creating the instance
const baseHTTP: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
resInterceptor(baseHTTP);
export default baseHTTP;
