import { BrowserChrome } from "react-bootstrap-icons";
import "./index.scss";
import IAnswer from "../../types/IAnswer";
import NotResult from "../shared/NotResult";
import useAnswer from "../../hooks/useAnswer";
import { useAnswerStore } from "../../store";
export const AnswerList = () => {
  const { lastAnswers } = useAnswerStore((store) => store);
  return (
    <div className="answer-list vertical-center">
      {lastAnswers.slice(0, 20).map((item: IAnswer, index) => (
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
      {!lastAnswers.length && <NotResult msg="Not enough answers" />}
    </div>
  );
};

export default AnswerList;
