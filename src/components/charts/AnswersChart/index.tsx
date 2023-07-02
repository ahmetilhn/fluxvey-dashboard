import ReactApexChart from "react-apexcharts";
import "./index.scss";
import BaseWidget from "../../BaseWidget";
import { getDayByDate, last7Days } from "../../../utils/date.utils";
import { PropsWithChildren, useEffect, useState } from "react";
import IAnswer from "../../../types/IAnswer";
import NotResult from "../../shared/NotResult";
type Props = {
  data: Array<IAnswer>;
};
export const AnswersChart: React.FC<PropsWithChildren<Props>> = ({ data }) => {
  const [chartData, setChartData] = useState<Array<number>>([]);
  const [isChartReady, setChartReady] = useState<boolean>(false);
  useEffect(() => {
    initChart();
    return () => {
      setChartData([]);
    };
  }, [data]);
  const options = {
    theme: {
      palette: "palette1", // upto palette10
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: last7Days(),
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  const initChart = () => {
    last7Days().forEach((day) => {
      let averageOfDay = 0;
      data.forEach((answer) => {
        const createdDay = getDayByDate(new Date(answer.createdAt));
        if (day === createdDay) {
          averageOfDay = Number(((averageOfDay + answer.rate) / 2).toFixed(1));
        }
      });
      setChartData((val) => [...val, averageOfDay]);
      if (!!data.length) {
        setChartReady(true);
      }
    });
  };
  return (
    <>
      {isChartReady === true ? (
        <ReactApexChart
          options={options}
          series={[
            {
              name: "Average",
              data: chartData,
            },
          ]}
          type="bar"
          width={"100%"}
          height={"100%"}
        />
      ) : (
        <NotResult msg="Not enough data" />
      )}
    </>
  );
};

export default AnswersChart;
