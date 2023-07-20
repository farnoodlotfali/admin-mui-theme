import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const useUpdateChart = (id, time = 100) => {
  const { showDrawer } = useContext(AppContext);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      const chartInstance = ApexCharts.getChartByID(id);
      if (chartInstance) chartInstance.windowResizeHandler();
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [showDrawer]);
};

export default useUpdateChart;
