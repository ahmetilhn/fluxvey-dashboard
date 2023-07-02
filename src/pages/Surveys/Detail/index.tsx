import { useEffect, useState } from "react";
import AnswersChart from "../../../components/charts/AnswersChart";
import answerService from "../../../services/modules/answer.service";
import "./index.scss";
import IAnswer from "../../../types/IAnswer";
import { useParams } from "react-router-dom";
import BaseWidget from "../../../components/BaseWidget";
import AnswerList from "../../../components/AnswerList";
import { getIntegrationCode } from "../../../utils/integration-code.util";
import ReactLogo from "../../../assets/svg/react.svg";
import AngularLogo from "../../../assets/svg/angular.svg";
import VueLogo from "../../../assets/svg/vue.svg";
import HtmlLogo from "../../../assets/svg/html.svg";
import JavascriptLogo from "../../../assets/svg/javascript.svg";
import RateChart from "../../../components/charts/RateChart";
const SurveyDetail = () => {
  const [answers, setAnswers] = useState<Array<IAnswer>>([]);
  const params = useParams();
  const initAnswers = async () => {
    try {
      const res = await answerService.getAnswersBySurveyID(
        params.surveyId || ""
      );
      if (Array.isArray(res)) {
        setAnswers(res);
      }
    } catch (error) {}
  };

  useEffect(() => {
    initAnswers();
  }, []);

  return (
    <div className="survey-detail horizontal-center">
      <BaseWidget title="Answer Graph" width="65%" height="400px">
        <AnswersChart data={answers} />
      </BaseWidget>
      <BaseWidget
        styles={{ marginLeft: "10px" }}
        title="Rate"
        width="34%"
        height="400px"
      >
        <div className="rate-chart vertical-center">
          <RateChart surveyId={params.surveyId as string} />
        </div>
      </BaseWidget>
      <BaseWidget title="Answers" width="100%" height="600px">
        <AnswerList isDetailed={true} data={answers} />
      </BaseWidget>
      <BaseWidget title="Integration" width="100%" height="420px">
        <div className="integration horizontal-center">
          <div className="integration__info vertical-center">
            <h3>Install Fluxvey on your own</h3>
            <p>
              Add the Fluxvey snippet using one of the methods below so you can
              start collecting website and in-product surveys feedback.
            </p>
            <div className="technologies horizontal-center">
              <img src={HtmlLogo} alt="Html" />
              <img src={JavascriptLogo} alt="Javascript" />
              <img src={ReactLogo} alt="React" />
              <img src={VueLogo} alt="Vue" />
              <img src={AngularLogo} alt="React" />
            </div>
            <p>
              You can use <i>fluxvey</i> all the above software technologies.
              You can get detailed information in the{" "}
              <a href="">
                <strong>integration </strong>
              </a>
              document.
            </p>
          </div>
          <div className="integration__code vertical-center">
            <textarea
              className="code-input"
              disabled
              value={getIntegrationCode(params.surveyId as string)}
            ></textarea>
          </div>
        </div>
      </BaseWidget>
    </div>
  );
};

export default SurveyDetail;
