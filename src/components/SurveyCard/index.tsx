import { PropsWithChildren } from "react";
import "./index.scss";
import ISurvey from "../../types/ISurvey";
import {
  BarChartFill,
  EyeFill,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import RateChart from "../charts/RateChart";
type Props = ISurvey;
const SurveyCard: React.FC<PropsWithChildren<Props>> = ({
  name,
  active,
  _id,
}) => {
  return (
    <article className="survey-card vertical-center">
      <header className="survey-card__header horizontal-center">
        <span>{name}</span>
        <div>
          <EyeFill style={{ marginRight: "8px" }} />
          <ThreeDotsVertical />
        </div>
      </header>
      <main className="survey-card__content vertical-center">
        <RateChart surveyId={_id} />
      </main>
      <footer className="survey-card__footer horizontal-center">
        <span className="answers horizontal-center">
          <BarChartFill /> Answers
        </span>
        <span
          className={
            active ? "status status--active" : "status status--disabled"
          }
        >
          {active ? "Active" : "Disabled"}
        </span>
      </footer>
    </article>
  );
};

export default SurveyCard;
