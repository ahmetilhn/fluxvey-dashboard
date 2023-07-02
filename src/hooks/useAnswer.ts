import { useCallback } from "react";
import { useAnswerStore, useCommonStore } from "../store";
import answerService from "../services/modules/answer.service";

const useAnswer = () => {
  const { updateLoading } = useCommonStore((store) => store);
  const { setLastAnswers } = useAnswerStore((store) => store);
  const initLastAnswersState = useCallback(async (): Promise<any> => {
    try {
      updateLoading(true);
      const date = new Date();
      const dateRange = {
        end_of_date: date,
        start_of_date: JSON.parse(
          JSON.stringify(new Date(date.getTime() - 7 * 60 * 60 * 24 * 1000))
        ),
      };
      const res = await answerService.getAllAnswers(dateRange);
      if (Array.isArray(res)) {
        setLastAnswers(res);
      }
    } catch (error) {
    } finally {
      updateLoading(false);
    }
  }, []);
  return {
    initLastAnswersState,
  };
};

export default useAnswer;
