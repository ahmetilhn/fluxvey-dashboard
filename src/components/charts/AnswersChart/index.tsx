import ReactApexChart from "react-apexcharts";
import "./index.scss";
import BaseWidget from "../../BaseWidget";
import { last7Days } from "../../../utils/date.utils";
export const AnswersChart = () => {
  const series = [
    {
      name: "Average",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 2.4],
    },
  ];
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
        return val + "%";
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
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val: number) {
          return val + "%";
        },
      },
    },
    // title: {
    //   text: "Monthly Inflation in Argentina, 2002",
    //   floating: true,
    //   offsetY: 330,
    //   style: {
    //     color: "#444",
    //   },
    // },
  };
  return (
    <BaseWidget title="Answer Graph">
      <ReactApexChart options={options} series={series} type="bar" />
    </BaseWidget>
  );
};

export default AnswersChart;
