import { AxiosResponse } from "axios";
import baseHTTP from "../config/axios.config";
import IAnswer from "../../types/IAnswer";

export default {
  getAnswersBySurveyID(id: string): Promise<AxiosResponse<Array<IAnswer>>> {
    return baseHTTP.get("/answers", {
      params: {
        survey_id: id,
      },
    });
  },
  getAllAnswers(params: object): Promise<AxiosResponse<Array<IAnswer>>> {
    return baseHTTP.get("/answers", {
      params,
    });
  },
};
