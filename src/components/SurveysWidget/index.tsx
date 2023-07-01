import { useSurveyStore } from "../../store";
import ISurvey from "../../types/ISurvey";
import BaseWidget from "../BaseWidget";
import SurveyCard from "../SurveyCard";
import NotResult from "../shared/NotResult";
import "./index.scss";
const SurveysWidget = () => {
  const { surveys } = useSurveyStore((store) => store);

  return (
    <BaseWidget width="100%" height="310px">
      <div className="survey-list horizontal-center">
        {surveys.map((item: ISurvey) => (
          <SurveyCard key={item._id} {...item} />
        ))}
        {!surveys.length && <NotResult msg="Surveys not found" />}
      </div>
    </BaseWidget>
  );
};

export default SurveysWidget;
