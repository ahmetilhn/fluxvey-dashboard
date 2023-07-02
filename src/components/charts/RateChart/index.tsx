import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import ReactApexChart from "react-apexcharts";
import answerService from "../../../services/modules/answer.service";
import NotResult from "../../shared/NotResult";
type Props = {
  surveyId: string;
};
const RateChart: React.FC<PropsWithChildren<Props>> = ({ surveyId }) => {
  const [isChartReady, setChartReady] = useState(false);
  const [series, setSeries] = useState<Array<number>>([]);
  useEffect(() => {
    initChart();
  }, []);

  const initChart = useCallback(async () => {
    const res = await answerService.getAnswersBySurveyID(surveyId);
    if (Array.isArray(res)) {
      const scores = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
      res.forEach((item) => {
        switch (item.rate) {
          case 1:
            scores["1"] = scores["1"] + 1;
            break;
          case 2:
            scores["2"] = scores["2"] + 1;
            break;
          case 3:
            scores["3"] = scores["3"] + 1;
            break;
          case 4:
            scores["4"] = scores["4"] + 1;
            break;
          case 5:
            scores["5"] = scores["5"] + 1;
            break;
          default:
            break;
        }
      });
      setSeries(Object.values(scores));
      if (!!res.length) {
        setChartReady(true);
      }
    }
  }, []);
  const options = {
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          labels: {
            show: true,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: ["Star 1", "Star 2", "Star 3", "Star 4", "Star 5"],
  };
  return (
    <>
      {isChartReady === true ? (
        <ReactApexChart options={options} series={series} type="donut" />
      ) : (
        <NotResult msg="Not enough graph data" />
      )}
    </>
  );
};

export default RateChart;
