import { useEffect } from "react";
import AnswersWidget from "../../components/AnswersWidget";
import SurveysWidget from "../../components/SurveysWidget";
import AnswersChart from "../../components/charts/AnswersChart";
import "./index.scss";
import useSurvey from "../../hooks/useSurvey";
import useAnswer from "../../hooks/useAnswer";
const Home: React.FC = () => {
  const { initSurveyState } = useSurvey();
  const { initLastAnswersState } = useAnswer();
  useEffect(() => {
    initLastAnswersState();
    initSurveyState();
  }, []);
  return (
    <div className="home horizontal-center">
      <AnswersChart />
      <AnswersWidget />
      <SurveysWidget />
    </div>
  );
};

export default Home;
