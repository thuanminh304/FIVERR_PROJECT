import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import JobSatictis from "./TopJob/JobSatictis";
import BoxLayout from "layouts/BoxLayout";
import Topuser from "./TopUser/TopUser";
import { actGetAllJob } from "Modules/JobManagement/actions";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actGetAllJob());
  },[])
  return (
    <div className="adminDashBoard">
      <div className="adminDashBoard__content">
        <div className="adminDashBoard__satistic">
          <div className="adminDashBoard__chart">

          </div>
          <div className="adminDashBoard__satisticContent">

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
