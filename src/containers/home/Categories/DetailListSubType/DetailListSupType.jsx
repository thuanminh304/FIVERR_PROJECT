import { actGetSubJob } from "Modules/JobManagement/actions";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import configName from "setting/configNameTypeJob";

export default function DetailListSupType() {
  const dispatch = useDispatch();
  const params = useParams();
  // const {jobList}=useSelector(state=>state.JobManagementReducer)
  // useEffect(() => {
  //     dispatch(actGetSubJob(params?.idSubTypeJob))
  // }, [params?.idSubTypeJob])
  let name = configName(params?.nameTypeJob)
  
  console.log(name);
  console.log(params.idSubTypeJob);
  return <div>DetailListSupType</div>;
}
