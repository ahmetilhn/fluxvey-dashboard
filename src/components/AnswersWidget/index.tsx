import AnswerList from "../AnswerList";
import BaseWidget from "../BaseWidget";
import "./index.scss";
const AnswersWidget = () => {
  return (
    <BaseWidget title="Last Answers">
      <AnswerList/>
    </BaseWidget>
  );
};

export default AnswersWidget;
