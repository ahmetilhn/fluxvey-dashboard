import { useEffect } from "react";
import AnswersChart from "../../components/charts/AnswersChart";
import "./index.scss";
import useSurvey from "../../hooks/useSurvey";
import useAnswer from "../../hooks/useAnswer";
import { useAnswerStore } from "../../store";
import BaseWidget from "../../components/BaseWidget";
import AnswerList from "../../components/AnswerList";
import SurveyList from "../../components/SurveyList";
const Home: React.FC = () => {
  const { initSurveyState } = useSurvey();
  const { initLastAnswersState } = useAnswer();
  const { lastAnswers } = useAnswerStore((store) => store);
  useEffect(() => {
    initLastAnswersState();
    initSurveyState();
  }, []);
  return (
    <div className="home horizontal-center">
      <BaseWidget title="Answer Graph" width="50%" height="440px">
        <AnswersChart data={lastAnswers} />
      </BaseWidget>
      <BaseWidget title="Last Answers">
        <AnswerList />
      </BaseWidget>
      <BaseWidget width="100%" height="310px">
        <SurveyList isScrollingX={true} />
      </BaseWidget>
    </div>
  );
};

export default Home;
