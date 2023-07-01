import BaseWidget from "../../../components/BaseWidget";
import SurveyEditor from "../../../components/SurveyEditor";
import "./index.scss";
const NewSurvey = () => {
  return (
    <BaseWidget title="New Survey" width="100%" height="100%">
      <SurveyEditor />
    </BaseWidget>
  );
};

export default NewSurvey;
