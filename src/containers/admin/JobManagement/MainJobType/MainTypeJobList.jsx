import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Filter from "./Filter/Filter";
import Tablelist from "./TableList/TableList";
import { actGetMainJob, actGetSubJob } from "Modules/JobManagement/actions";
import {
  actSetMainType,
  actLocalSeller,
  actOnlineSellers,
  actProService,
  actSelectSubType,
  actCurrentPage,
} from "./Modules/action";
const Mainjoblist = (props) => {
  const isParrams = useParams()?.mainJobId;
  const dispatch = useDispatch();
  const { jobList, mainJob } = useSelector(
    (state) => state.JobManagementReducer
  );
  const { mainId, subJob, proService, localSeller, onlineSeller } = useSelector(
    (state) => state.FilterJobListReducer
  );
  const [data, setData] = useState([]);
  const selectList = mainJob?.find((job) => {
    return job._id === isParrams;
  })?.subTypeJobs;
  useEffect(() => {
    if (isParrams !== mainId) {
      dispatch(actGetMainJob(isParrams));
      dispatch(actSetMainType(isParrams));
      dispatch(actSelectSubType("All"));
      dispatch(actOnlineSellers(false));
      dispatch(actLocalSeller(false));
      dispatch(actProService(false));
      dispatch(actCurrentPage(1));
    }
  }, [isParrams]);
  useEffect(() => {
    if (subJob === "All") {
      dispatch(actGetMainJob(isParrams));
    } else {
      dispatch(actGetSubJob(subJob));
    }
  }, [subJob]);
  useEffect(() => {
    setData(jobList);
  }, [jobList]);
  useEffect(() => {
    let jobLists = [...jobList];
    if (proService) {
      const jobs = jobLists?.filter((job) => {
        return job.proServices === true;
      });
      jobLists = jobs;
    }
    if (localSeller) {
      const jobs = jobLists?.filter((job) => {
        return job.localSellers === true;
      });
      jobLists = jobs;
    }
    if (onlineSeller) {
      const jobs = jobLists?.filter((job) => {
        return job.onlineSellers === true;
      });
      jobLists = jobs;
    }

    if (!proService && !localSeller && !onlineSeller) {
      jobLists = [...jobList];
    }
    setData(jobLists);
  }, [proService, localSeller, onlineSeller]);
  return (
    <div className="mainJob-JobList">
      <div className="mainJob-JobList__content">
        <Filter subType={selectList} />
        <div className="mainJob-JobList__tableList">
          <Tablelist data={data} />
        </div>
      </div>
    </div>
  );
};

export default Mainjoblist;
