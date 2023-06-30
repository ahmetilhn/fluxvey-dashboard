import { BrowserChrome } from "react-bootstrap-icons";
import "./index.scss";
import answerService from "../../services/modules/answer.service";
import { useEffect, useState } from "react";
import IAnswer from "../../types/IAnswer";
export const AnswerList = () => {
  const [answers, setAnswers] = useState<Array<IAnswer>>([]);
  useEffect(() => {
    init();
  }, []);
  const init = async (): Promise<void> => {
    const res = await answerService.getAllAnswers({
      limit: 10,
    });
    if (!!Array.isArray(res)) {
      setAnswers(res);
    }
  };
  return (
    <div className="answer-list vertical-center">
      {answers.map((item: IAnswer, index) => (
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
