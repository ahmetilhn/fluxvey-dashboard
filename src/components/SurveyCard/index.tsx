import { PropsWithChildren, useState } from "react";
import "./index.scss";
import ISurvey from "../../types/ISurvey";
import {
  BarChartFill,
  EyeFill,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import RateChart from "../charts/RateChart";
import Popover from "../shared/Popover";
type Props = ISurvey;
const SurveyCard: React.FC<PropsWithChildren<Props>> = ({
  name,
  active,
  _id,
}) => {
  const [isSettingMenuVisible, setSettingMenuVisible] = useState(false);
  const settingOptions = [
    {
      label: "Edit",
      action: () => {
        console.log("aslkdajs");
      },
    },
    {
      label: "Delete",
      action: () => {
        console.log("aslkdajs");
      },
    },
    {
      label: active ? "Disabled" : "Active",
      action: () => {
        console.log("aslkdajs");
      },
    },
  ];
  return (
    <article className="survey-card vertical-center">
      <header className="survey-card__header horizontal-center">
        <span>{name}</span>
        <div className="actions horizontal-center">
          <EyeFill style={{ marginRight: "8px" }} />
          <div className="setting vertical-center">
            <ThreeDotsVertical
              onClick={() => {
                setSettingMenuVisible(!isSettingMenuVisible);
              }}
            />
            {isSettingMenuVisible && <Popover options={settingOptions} />}
          </div>
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
