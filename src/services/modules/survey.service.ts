import { AxiosResponse } from "axios";
import ISurvey from "../../types/ISurvey";
import baseHTTP from "../config/axios.config";

export default {
  getAllSurveys(): Promise<AxiosResponse<Array<ISurvey>>> {
    return baseHTTP.get("/surveys");
  },
};
