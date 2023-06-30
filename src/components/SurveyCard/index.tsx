import { PropsWithChildren } from "react";
import "./index.scss";
import ISurvey from "../../types/ISurvey";
import { BarChartFill, ThreeDotsVertical } from "react-bootstrap-icons";
type Props = ISurvey;
const SurveyCard: React.FC<PropsWithChildren<Props>> = ({
  title,
  name,
  view_counts,
  active,
  comment,
  response_counts,
}) => {
  return (
    <article className="survey-card vertical-center">
      <header className="survey-card__header horizontal-center">
        <span>{name}</span>
        <ThreeDotsVertical />
      </header>
      <main className="vertical-center"></main>
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
