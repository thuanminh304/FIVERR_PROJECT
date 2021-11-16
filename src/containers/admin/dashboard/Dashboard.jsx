import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import JobSatictis from "./TopJob/JobSatictis";
import BoxLayout from "layouts/BoxLayout";
import Topuser from "./TopUser/TopUser";
import { actGetAllJob } from "Modules/JobManagement/actions";
import Dashboardchart from "./DashboardChart/DashboardChart";
import SatictisNumber from './SatisticNumber/SatictisNumber';

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actGetAllJob());
  },[])
  return (
    <div className="adminDashBoard">
      <div className="adminDashBoard__content">
        <div className="adminDashBoard__satistic row">
          <div className="adminDashBoard__chart col-12 col-md-5">
            <Dashboardchart/>
          </div>
          <div className="adminDashBoard__satisticContent col-12 col-md-7">
            <SatictisNumber/>
          </div>
        </div>
        <div className="adminDashBoard__jobTop">
          <BoxLayout component={JobSatictis} title = 'Job Satictis'/>
        </div>
        <div className="adminDashBoard__clientTop">
          <BoxLayout component={Topuser} title = 'Top User'/>
        </div>
      </div>
    </div>
  )
}
