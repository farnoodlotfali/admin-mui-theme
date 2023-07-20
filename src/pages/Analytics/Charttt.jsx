import ReactApexChart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";
import { memo, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import useUpdateChart from "../../hook/useUpdateChart";
const chartColors = [
  "secondary",
  "primary",
  "orange",
  "success",
  "error",
  "warning",
  "grey",
];

const Charttt = ({ lines = 3, height = 200 }) => {
  const theme = useTheme();
  const { themeColors, showDrawer } = useContext(AppContext);
  const ref = useRef();
  useUpdateChart("visits-chart");

  const renderColors = useMemo(() => {
    let colors = [];
    chartColors.forEach((c) => {
      colors.push(theme.palette?.[c].main);
    });

    return colors;
  }, [themeColors]);

  return (
    <>
      <ReactApexChart
        key={1}
        ref={ref}
        options={{
          chart: {
            type: "area",
            sparkline: {
              enabled: true,
            },
            width: "100%",
            background: "inherit",
            redrawOnWindowResize: true,
            redrawOnParentResize: true,
            id: "visits-chart",
          },

          colors: renderColors,
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          fill: {
            gradient: {
              enabled: true,
              opacityFrom: 0.55,
              opacityTo: 0,
            },
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
            labels: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          legend: {
            show: false,
          },
          theme: {
            mode: theme.palette.mode,
          },
        }}
        series={stateTest.series.slice(0, lines)}
        type="area"
        height={height}
        width={"100%"}
      />
    </>
  );
};

export default Charttt;

const stateTest = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series3",
      data: [43, 40, 65, 92, 92, 101, 60],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
};
