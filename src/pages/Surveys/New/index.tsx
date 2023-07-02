import { useNavigate } from "react-router-dom";
import BaseWidget from "../../../components/BaseWidget";
import SurveyEditor from "../../../components/SurveyEditor";
import "./index.scss";
import useSurvey from "../../../hooks/useSurvey";
const NewSurvey = () => {
  const { createSurvey } = useSurvey();
  const navigate = useNavigate();
  const handleSubmit = async (payload: {}) => {
    const newSurvey = await createSurvey({ ...payload, author_id: 222 });
    if (newSurvey) {
      navigate("/surveys");
    }
  };
  return (
    <BaseWidget title="New Survey" width="100%" height="100%">
      <SurveyEditor handleSubmit={handleSubmit} />
    </BaseWidget>
  );
};

export default NewSurvey;
