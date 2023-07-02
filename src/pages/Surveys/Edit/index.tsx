import { useNavigate, useParams } from "react-router-dom";
import BaseWidget from "../../../components/BaseWidget";
import SurveyEditor from "../../../components/SurveyEditor";
import "./index.scss";
import useSurvey from "../../../hooks/useSurvey";
import { useEffect, useState } from "react";
import ISurvey from "../../../types/ISurvey";
import { useCommonStore } from "../../../store";
const EditSurvey = () => {
  const { updateSurvey, getSurveyDetail } = useSurvey();
  const [detail, setDetail] = useState<ISurvey>();
  const { updateLoading } = useCommonStore((store) => store);
  const navigate = useNavigate();
  const params = useParams();
  const handleSubmit = async (payload: {}) => {
    const newSurvey = await updateSurvey({ ...payload, _id: detail?._id });
    if (newSurvey) {
      navigate("/surveys");
    }
  };
  const init = async () => {
    updateLoading(true);
    const res = await getSurveyDetail(params.surveyId as string);
    if (res) {
      setDetail(res);
    }
    updateLoading(false);
  };
  useEffect(() => {
    init();
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
