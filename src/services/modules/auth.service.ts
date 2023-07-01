import { AxiosResponse } from "axios";
import baseHTTP from "../config/axios.config";
interface ILoginPayload {
  email: string;
  password: string;
}
interface IRegisterPayload extends ILoginPayload {
  full_name: string;
}
export default {
  async login(payload: ILoginPayload): Promise<AxiosResponse<any>> {
    return baseHTTP.post("/auth/login", payload);
  },
  async register(payload: IRegisterPayload): Promise<AxiosResponse<any>> {
    return baseHTTP.post("/auth/register", payload);
  },
};
