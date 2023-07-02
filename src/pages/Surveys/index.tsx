import { PlusCircle } from "react-bootstrap-icons";
import BaseWidget from "../../components/BaseWidget";
import SurveyList from "../../components/SurveyList";
import FloatingButton from "../../components/shared/FloatingButton";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useSurvey from "../../hooks/useSurvey";
const Surveys: React.FC = () => {
  const { initSurveyState } = useSurvey();
  const navigate = useNavigate();
  useEffect(() => {
    initSurveyState();
  }, []);
  const handleClick = () => {
    navigate("/surveys/new");
  };
  return (
    <div className="home horizontal-center">
      <BaseWidget title="Surveys" width="100%" height="100%">
        <SurveyList isScrollingY={true} />
        <FloatingButton onClick={handleClick}>
          <PlusCircle />
        </FloatingButton>
      </BaseWidget>
    </div>
  );
};

export default Surveys;
