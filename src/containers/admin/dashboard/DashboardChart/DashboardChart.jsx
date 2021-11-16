import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactECharts from "echarts-for-react";
import './DashboardChart.scss';
const Dashboardchart = () => {
  const [dataChart, setDataChart] = useState([]);
  const { userSatictis } = useSelector((state) => state.managementUserReducer);
  const { dataSatictis } = useSelector((state) => state.JobManagementReducer);
  useEffect(() => {
    const data = [];
    const jobQty = dataSatictis.reduce((qty, job) => {
      return qty + job.jobQty;
    }, 0);
    const clientQty = userSatictis.length;
    data.push(jobQty, clientQty);
    setDataChart(data);
  }, [userSatictis,dataSatictis]);
  const optionsBarChart = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "center",
      top: "15%",
      bottom: "6%",
      containLabel: true,
      width: "70%",
    },
    xAxis: {
      type: "category",
      data: ["Job", "User"],
    },
    yAxis: {
      type: "value",
    },
    series: [
        {
          name: "Quality",
          type: "bar",
          barWidth: "50%",
          data: dataChart,
          itemStyle: {
            color: "#73BFDD"
          }
        },
      ],
    animation: true,
  };
  return (
    <div className="dashboardChart">
      <div className="dashboardChart__content">
        <ReactECharts
          option={{
            ...optionsBarChart,
          }}
        />
      </div>
    </div>
  );
};

export default Dashboardchart;
