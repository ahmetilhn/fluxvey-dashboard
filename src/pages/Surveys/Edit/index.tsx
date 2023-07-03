import { useNavigate, useParams } from "react-router-dom";
import BaseWidget from "../../../components/BaseWidget";
import SurveyEditor from "../../../components/SurveyEditor";
import "./index.scss";
import useSurvey from "../../../hooks/useSurvey";
import { useEffect } from "react";
const EditSurvey = () => {
  const { updateSurvey, getSurveyDetail, detail } = useSurvey();
  const navigate = useNavigate();
  const params = useParams();
  const handleSubmit = async (payload: {}) => {
    const newSurvey = await updateSurvey({ ...payload, _id: detail?._id });
    if (newSurvey) {
      navigate("/surveys");
    }
  };
  useEffect(() => {
    getSurveyDetail(params.surveyId as string);
  }, []);
  return (
    <BaseWidget title="Edit Survey" width="100%" height="100%">
      <SurveyEditor
        isEditMod={true}
        survey={detail}
        handleSubmit={handleSubmit}
      />
    </BaseWidget>
  );
};

export default EditSurvey;
