import { useNavigate } from "react-router-dom";
import BaseWidget from "../../../components/BaseWidget";
import SurveyEditor from "../../../components/SurveyEditor";
import surveyService from "../../../services/modules/survey.service";
import "./index.scss";
const NewSurvey = () => {
  const navigate = useNavigate();
  const createNewSurvey = async (payload: {}) => {
    try {
      const res = await surveyService.createSurvey({
        ...payload,
        author_id: 111,
      });
      if (res) {
        navigate("/surveys");
      }
    } catch (error) {}
  };
  return (
    <BaseWidget title="New Survey" width="100%" height="100%">
      <SurveyEditor handleSubmit={createNewSurvey} />
    </BaseWidget>
  );
};

export default NewSurvey;
