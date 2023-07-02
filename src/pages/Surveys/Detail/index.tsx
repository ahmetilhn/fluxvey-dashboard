import { useEffect, useState } from "react";
import AnswersChart from "../../../components/charts/AnswersChart";
import answerService from "../../../services/modules/answer.service";
import "./index.scss";
import IAnswer from "../../../types/IAnswer";
import { useParams } from "react-router-dom";
import BaseWidget from "../../../components/BaseWidget";
import AnswerList from "../../../components/AnswerList";

const SurveyDetail = () => {
  const [answers, setAnswers] = useState<Array<IAnswer>>([]);
  const params = useParams();
  const initAnswers = async () => {
    try {
      const res = await answerService.getAnswersBySurveyID(
        params.surveyId || ""
      );
      if (Array.isArray(res)) {
        setAnswers(res);
      }
    } catch (error) {}
  };

  useEffect(() => {
    initAnswers();
  }, []);

  return (
    <div className="survey-detail vertical-center">
      <BaseWidget title="Answer Graph" width="100%" height="400px">
        <AnswersChart data={answers} />
      </BaseWidget>
      <BaseWidget title="Answers" width="100%" height="400px">
        <AnswerList isDetailed={true} data={answers} />
      </BaseWidget>
      <BaseWidget width="100%" height="400px">
        <h1>aslkjd</h1>
      </BaseWidget>
    </div>
  );
};

export default SurveyDetail;
