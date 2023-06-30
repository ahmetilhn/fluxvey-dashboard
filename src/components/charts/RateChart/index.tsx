import ReactApexChart from "react-apexcharts";
const RateChart = () => {
  const options = {
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
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
  };
  const series = [44, 55, 41, 17, 15];
  return <ReactApexChart options={options} series={series} type="donut" />;
};

export default RateChart;
