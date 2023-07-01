import BaseWidget from "../../../components/BaseWidget";
import SurveyEditor from "../../../components/SurveyEditor";
import "./index.scss";
const NewSurvey = () => {
  const createNewSurvey = (payload: {}) => {
    console.log(payload);
  };
  return (
    <BaseWidget title="New Survey" width="100%" height="100%">
      <SurveyEditor handleSubmit={createNewSurvey} />
    </BaseWidget>
  );
};

export default NewSurvey;
