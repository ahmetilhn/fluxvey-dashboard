import { PropsWithChildren } from "react";
import { useSurveyStore } from "../../store";
import ISurvey from "../../types/ISurvey";
import SurveyCard from "../SurveyCard";
import NotResult from "../shared/NotResult";
import "./index.scss";
type Props = {
  isScrollingX?: boolean;
  isScrollingY?: boolean;
};
const SurveyList: React.FC<PropsWithChildren<Props>> = ({
  isScrollingX = false,
  isScrollingY = false,
}) => {
  const { surveys } = useSurveyStore((store) => store);
  return (
    <div
      className={`survey-list horizontal-center ${
        (isScrollingX && "survey-list--scroll-x") ||
        (isScrollingY && "survey-list--scroll-y")
      }`}
    >
      {surveys.map((item: ISurvey) => (
        <SurveyCard key={item._id} {...item} />
      ))}
      {!surveys.length && <NotResult msg="Surveys not found" />}
    </div>
  );
};

export default SurveyList;
