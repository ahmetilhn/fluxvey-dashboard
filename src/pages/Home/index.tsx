import AnswersWidget from "../../components/AnswersWidget";
import SurveysWidget from "../../components/SurveysWidget";
import AnswersChart from "../../components/charts/AnswersChart";
import "./index.scss";
const Home: React.FC = () => {
  return (
    <div className="home horizontal-center">
      <AnswersChart />
      <AnswersWidget />
      <SurveysWidget />
    </div>
  );
};

export default Home;
