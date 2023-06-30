import { useEffect } from "react";
import AnswersWidget from "../../components/AnswersWidget";
import SurveysWidget from "../../components/SurveysWidget";
import AnswersChart from "../../components/charts/AnswersChart";
import surveyService from "../../services/modules/survey.service";
import "./index.scss";
import { useSurveyStore } from "../../store";
import answerService from "../../services/modules/answer.service";
const Home: React.FC = () => {
  useEffect(() => {
    initSurveys();
    initAnswers();
  }, []);
  const { setSurveys, setLast7DaysAnswers } = useSurveyStore((store) => store);
  const initSurveys = async (): Promise<any> => {
    try {
      const res = await surveyService.getAllSurveys();
      if (Array.isArray(res)) {
        setSurveys(res);
      }
    } catch (error) {}
  };
  const initAnswers = async () => {
    try {
      const date = new Date();
      console.log(date.setDate(date.getDate() - 7), date);
      const res = await answerService.getAllAnswers({
        end_of_date: date,
        start_of_date: JSON.parse(
          JSON.stringify(new Date(date.getTime() - 7 * 60 * 60 * 24 * 1000))
        ),
      });
      if (Array.isArray(res)) {
        setLast7DaysAnswers(res);
      }
    } catch (error) {}
  };
  return (
    <div className="home horizontal-center">
      <AnswersChart />
      <AnswersWidget />
      <SurveysWidget />
    </div>
  );
};

export default Home;
