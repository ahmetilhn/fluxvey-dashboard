import { BrowserChrome } from "react-bootstrap-icons";
import "./index.scss";
import IAnswer from "../../types/IAnswer";
import { useSurveyStore } from "../../store";
export const AnswerList = () => {
  const { last7DaysAnswers } = useSurveyStore((store) => store);
  return (
    <div className="answer-list vertical-center">
      {last7DaysAnswers.slice(0, 7).map((item: IAnswer, index) => (
        <div key={index} className="answer-list__item horizontal-center">
          <span className="device-type horizontal-center">
            <BrowserChrome />
            {item.session.device_type}
          </span>
          <span className={`rate rate--${item.rate}`}>{item.rate}</span>
          <span className="msg">{item.message}</span>
          <span>{item.session.platform}</span>
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
