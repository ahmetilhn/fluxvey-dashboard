import BaseWidget from "../../components/BaseWidget";
import SurveyList from "../../components/SurveyList";
import "./index.scss";
const Surveys: React.FC = () => {
  return (
    <div className="home horizontal-center">
      <BaseWidget title="Surveys" width="100%" height="100%">
        <SurveyList />
      </BaseWidget>
    </div>
  );
};

export default Surveys;
