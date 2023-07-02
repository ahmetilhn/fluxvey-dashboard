import { PlusCircle } from "react-bootstrap-icons";
import BaseWidget from "../../components/BaseWidget";
import SurveyList from "../../components/SurveyList";
import FloatingButton from "../../components/shared/FloatingButton";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import surveyService from "../../services/modules/survey.service";
import { useCommonStore, useSurveyStore } from "../../store";
const Surveys: React.FC = () => {
  const { setSurveys } = useSurveyStore((store) => store);
  const { updateLoading } = useCommonStore((store) => store);
  const navigate = useNavigate();
  useEffect(() => {
    initSurveys();
  }, []);
  const initSurveys = useCallback(async (): Promise<any> => {
    try {
      updateLoading(true);
      const res = await surveyService.getAllSurveys();
      if (Array.isArray(res)) {
        setSurveys(res);
      }
    } catch (error) {
    } finally {
      updateLoading(false);
    }
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
