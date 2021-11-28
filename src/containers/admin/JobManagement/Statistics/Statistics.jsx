import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import ReactECharts from "echarts-for-react";
import "./Statistics.scss";
import {actGetAllJob, actGetMainJobList} from 'Modules/JobManagement/actions';
import Mainjoblayout from "./MainJobLayout";
import BoxLayout from "layouts/BoxLayout";
const Statistics = () => {
  const dispatch = useDispatch();
  const [data,setData] = useState([]);
  const [reRender, setRerender] = useState({
    legend:{
    top: "center",
    right: "0",
    textAlign: "center",
    orient: 'vertical',
    itemGap: 10,
    itemWidth: 20,
  },
  center: ["30%", "50%"],
});
  const { dataSatictis } = useSelector((state) => state.JobManagementReducer);
  useEffect(() => {
    dispatch(actGetMainJobList());
    dispatch(actGetAllJob());
    const pipeChartBox = document.querySelector('.percentJobQty');
    const resizeElement = new ResizeObserver(()=>changeSizeElement(pipeChartBox));
    resizeElement.observe(pipeChartBox);
    return () => resizeElement.disconnect();
  },[]);
  useEffect(() =>{
    const dataChart = dataSatictis.map(job=>{
      return {
        name: job.type,
        value: job.jobQty
      };
    });
    setData(dataChart);
  },[dataSatictis]);
  const optionsBarChart = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      right: "center",
      top: "10%",
      bottom: "5%",
      containLabel: true,
      width: "90%",
    },
    xAxis: {
      type: "category",
      data: data.map(job=>{
        return job.name;
      }),
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
        barWidth: "70%",
        data: data.map(job=>{
          return job.value;
        }),
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
      right: "20%",
      top: "50%",
      bottom: "3%",
      containLabel: true,
      width: "100%",
    },
    legend: reRender.legend,
    series: [
      {
        name: "Percent of Total Quality",
        type: "pie",
        radius: ["20%", "70%"],
        center: reRender.center,
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
        data: data,
      },
    ],
  };
  const changeSizeElement = (pipeChartBox) => {
    if(pipeChartBox.offsetWidth<=490){
      setRerender({
        legend:{
        bottom: "0",
        left: "0",
        width: "100%",
        itemGap: 5,
        itemWidth: 15,
        textAlign: "center",
        orient: 'horizontal',
      },
      center: ["50%", "40%"],
    });
    }
    else if(pipeChartBox.offsetWidth>650){
      setRerender({
        legend:{
        top: "center",
        right: "10%",
        textAlign: "center",
        orient: 'vertical',
        itemGap: 10,
        itemWidth: 20,
      },
      center: ["40%", "50%"],
    });
    }
    else{
      setRerender({
        legend:{
        top: "center",
        right: "0",
        textAlign: "center",
        orient: 'vertical',
        itemGap: 10,
        itemWidth: 20,
      },
      center: ["30%", "50%"],
    });
    }
  }
  return (
    <div className="statistic-content">
      <div className="statistic__chart row">
        <div className="chart__jobQuality col-12 col-md-6">
          <div className="statistic-item">
            <ReactECharts option={optionsBarChart} />
          </div>
        </div>
        <div className="chart__jobQuality percentJobQty col-12 col-md-6">
          <div className="statistic-item">
            <ReactECharts option={optionPieChart} />
          </div>
        </div>
      </div>
          <BoxLayout component={Mainjoblayout} title = 'Job Types'/>
    </div>
  );
};

export default Statistics;
