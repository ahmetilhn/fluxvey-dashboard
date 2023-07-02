import { useNavigate } from "react-router-dom";
import BaseWidget from "../../../components/BaseWidget";
import SurveyEditor from "../../../components/SurveyEditor";
import surveyService from "../../../services/modules/survey.service";
import "./index.scss";
import { useCommonStore } from "../../../store";
import { toast } from "react-hot-toast";
const NewSurvey = () => {
  const { updateLoading } = useCommonStore((store) => store);
  const navigate = useNavigate();
  const createNewSurvey = async (payload: {}) => {
    try {
      updateLoading(true);
      const res = await surveyService.createSurvey({
        ...payload,
        author_id: 111,
      });
      if (res) {
        toast.success("New survey created 🎉");
        navigate("/surveys");
      }
    } catch (error) {
    } finally {
      updateLoading(false);
    }
  };
  return (
    <BaseWidget title="New Survey" width="100%" height="100%">
      <SurveyEditor handleSubmit={createNewSurvey} />
    </BaseWidget>
  );
};

export default NewSurvey;
