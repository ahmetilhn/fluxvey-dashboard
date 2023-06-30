import { useEffect } from "react";
import AnswersWidget from "../../components/AnswersWidget";
import SurveysWidget from "../../components/SurveysWidget";
import AnswersChart from "../../components/charts/AnswersChart";
import surveyService from "../../services/modules/survey.service";
import "./index.scss";
const Home: React.FC = () => {
  useEffect(() => {
    initSurveys();
  }, []);

  const initSurveys = async (): Promise<any> => {
    const res = await surveyService.getAllSurveys();
    console.log(res);
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
