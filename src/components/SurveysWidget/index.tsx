import BaseWidget from "../BaseWidget";
import SurveyList from "../SurveyList";
import "./index.scss";
const SurveysWidget = () => {
  return (
    <BaseWidget width="100%" height="310px">
      <SurveyList isScrollingX={true} />
    </BaseWidget>
  );
};

export default SurveysWidget;
