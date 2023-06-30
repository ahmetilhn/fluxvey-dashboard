import AnswersWidget from "../../components/AnswersWidget";
import AnswersChart from "../../components/charts/AnswersCharts";
import "./index.scss";
const Home: React.FC = () => {
  return (
    <div className="home horizontal-center">
      <AnswersChart />
      <AnswersWidget />
    </div>
  );
};

export default Home;
