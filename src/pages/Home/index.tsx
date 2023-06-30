import { useEffect } from "react";
import AnswersWidget from "../../components/AnswersWidget";
import SurveysWidget from "../../components/SurveysWidget";
import AnswersChart from "../../components/charts/AnswersChart";
import surveyService from "../../services/modules/survey.service";
import "./index.scss";
import { useSurveyStore } from "../../store";
const Home: React.FC = () => {
  useEffect(() => {
    initSurveys();
  }, []);
  const { setSurveys } = useSurveyStore((store) => store);
  const initSurveys = async (): Promise<any> => {
    try {
      const res = await surveyService.getAllSurveys();
      if (Array.isArray(res)) {
        setSurveys(res);
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
