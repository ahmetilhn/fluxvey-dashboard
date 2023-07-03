import { toast } from "react-hot-toast";
import surveyService from "../services/modules/survey.service";
import { useCommonStore, useSurveyStore } from "../store";
import { useCallback, useState } from "react";
import ISurvey from "../types/ISurvey";

const useSurvey = () => {
  const [detail, setDetail] = useState<ISurvey>();
  const { updateLoading } = useCommonStore((store) => store);
  const { setSurveys } = useSurveyStore((store) => store);
  const deleteSurvey = async (survey_id: string) => {
    try {
      const res = await surveyService.delete(survey_id);
      if (res) {
        toast.success("Survey Deleted");
        initSurveyState();
      }
      return res;
    } catch (error) {}
  };
  const updateSurvey = async (payload: {}) => {
    try {
      const res = await surveyService.update(payload);
      if (res) {
        toast.success("Survey Updated");
        initSurveyState();
      }
      return res;
    } catch (error) {}
  };
  const createSurvey = async (payload: {}) => {
    try {
      const res = await surveyService.create(payload);
      if (res) {
        toast.success("Survey Created");
      }
      return res;
    } catch (error) {}
  };
  const getSurveyDetail = async (id: string): Promise<void> => {
    try {
      const res: ISurvey | any = await surveyService.getSurveyDetail(id);
      if (typeof res === "object") {
        setDetail(res);
      }
    } catch (error) {}
  };
  const initSurveyState = useCallback(async (): Promise<any> => {
    try {
      updateLoading(true);
      const res = await surveyService.getAllSurveys();
      if (Array.isArray(res)) {
        setSurveys(res);
      }
    } catch (error) {
    } finally {
      updateLoading(false);
    }
  }, []);
  return {
    deleteSurvey,
    createSurvey,
    updateSurvey,
    initSurveyState,
    getSurveyDetail,
    detail,
  };
};

export default useSurvey;
