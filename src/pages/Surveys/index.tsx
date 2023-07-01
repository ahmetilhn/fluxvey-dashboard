import { PlusCircle } from "react-bootstrap-icons";
import BaseWidget from "../../components/BaseWidget";
import SurveyList from "../../components/SurveyList";
import FloatingButton from "../../components/shared/FloatingButton";
import "./index.scss";
const Surveys: React.FC = () => {
  return (
    <div className="home horizontal-center">
      <BaseWidget title="Surveys" width="100%" height="100%">
        <SurveyList />
        <FloatingButton>
          <PlusCircle />
        </FloatingButton>
      </BaseWidget>
    </div>
  );
};

export default Surveys;
