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
import useSurvey from "../../hooks/useSurvey";
import { useNavigate } from "react-router-dom";
type Props = ISurvey;
const SurveyCard: React.FC<PropsWithChildren<Props>> = ({
  name,
  active,
  _id,
}) => {
  const { updateSurvey, deleteSurvey } = useSurvey();
  const navigate = useNavigate();
  const [isSettingMenuVisible, setSettingMenuVisible] = useState(false);
  const settingOptions = [
    {
      label: "Edit",
      action: () => navigate(`/surveys/edit/${_id}`),
    },
    {
      label: "Delete",
      action: () => deleteSurvey(_id),
      color: "#ed5959",
    },
    {
      label: active ? "Disabled" : "Active",
      action: async () => {
        await updateSurvey({ _id, active: !active });
        setSettingMenuVisible(false);
      },
      color: active ? "#ed5959" : "#53cf84",
    },
  ];
  return (
    <article className="survey-card vertical-center global-shadow">
      <header className="survey-card__header horizontal-center">
        <span>{name}</span>
        <div className="actions horizontal-center">
          <EyeFill
            onClick={() => navigate(`/surveys/${_id}`)}
            style={{ marginRight: "8px" }}
          />
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
