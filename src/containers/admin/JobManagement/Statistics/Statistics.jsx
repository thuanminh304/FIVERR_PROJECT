import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import ReactECharts from "echarts-for-react";
import "./Statistics.scss";
import {actGetMainJobList} from 'Modules/JobManagement/actions';
import Mainjoblist from "./MainJobList/MainJobList";
import Listsubjob from './ListSubJob/ListSubJob';
const Statistics = () => {
  const [currentMainJobType, setCurrentMainJobType] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetMainJobList());
  },[]);
  const setCurrentMainJobTypeID = (id) => {
    setCurrentMainJobType(id);
  }
  const dataComponent = [
    "Graphic & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Data",
    "Business",
    "Lifestyle",
  ];
  const dataValue = [1, 10, 0, 0, 0, 0, 0, 0, 0];
  const dataPieChart = [
    {
      value: 50,
      name: "Graphic & Design",
    },
    {
      value: 25,
      name: "Digital Marketing",
    },
    {
      value: 30,
      name: "Writing & Translation",
    },
    {
      value: 43,
      name: "Video & Animation",
    },
    {
      value: 56,
      name: "Music & Audio",
    },
    {
      value: 120,
      name: "Programming & Tech",
    },
    {
      value: 90,
      name: "Data",
    },
    {
      value: 20,
      name: "Business",
    },
    {
      value: 10,
      name: "Lifestyle",
    },
  ];
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
    //   height: "100%",
      width: "70%",
    },
    xAxis: {
      type: "category",
      data: dataComponent,
      axisLabel: {
        interval: 0,
        rotate: 45,
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Job's Quality",
        type: "bar",
        barWidth: "80%",
        data: dataValue,
      },
    ],
    animation: true,
  };
  const optionPieChart = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {d}%",
    },
    grid: {
      left: "center",
      top: "50%",
      bottom: "3%",
      containLabel: true,
      width: "70%",
    },
    legend: {
      top: "center",
      left: "right",
      textAlign: "center",
      orient: "vertical",
    },
    series: [
      {
        name: "Percent of Total Quality",
        type: "pie",
        radius: ["10%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: "14",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: dataPieChart,
      },
    ],
  };
  return (
    <div className="statistic-content">
      <div className="statistic__chart row">
        <div className="chart__jobQuality col-12 col-lg-6">
          <div className="statistic-item">
            <ReactECharts option={optionsBarChart} />
          </div>
        </div>
        <div className="chart__jobQuality col-12 col-lg-6">
          <div className="statistic-item">
            <ReactECharts option={optionPieChart} />
          </div>
        </div>
      </div>
      <div className="jobManage-content">
          <h4>Job Types</h4>
          <Mainjoblist setCurrentMainJobTypeID={setCurrentMainJobTypeID}/>
          <Listsubjob jobId = {currentMainJobType}/>
      </div>
    </div>
  );
};

export default Statistics;
