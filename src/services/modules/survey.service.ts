import { AxiosResponse } from "axios";
import ISurvey from "../../types/ISurvey";
import baseHTTP from "../config/axios.config";

export default {
  async getAllSurveys(): Promise<AxiosResponse<Array<ISurvey>>> {
    return baseHTTP.get("/surveys");
  },
  async getSurveyDetail(id: string): Promise<AxiosResponse<ISurvey>> {
    return baseHTTP.get(`/surveys/${id}`);
  },
  async create(payload: {}): Promise<AxiosResponse<any>> {
    return baseHTTP.post("/surveys", payload);
  },
  async delete(survey_id: string): Promise<AxiosResponse<any>> {
    return baseHTTP.delete(`/surveys/${survey_id}`);
  },
  async update(payload: {}): Promise<AxiosResponse<any>> {
    return baseHTTP.put("/surveys", payload);
  },
};
