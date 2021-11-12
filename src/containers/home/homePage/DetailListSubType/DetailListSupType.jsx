import { actGetSubJob } from "Modules/JobManagement/actions";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Breadcrumb, Avatar, Switch } from "antd";
import { actGetDetailSubTypeJob } from "containers/home/homePage/profileUser/createNewJobByUser/StepsCreateNewGig/modules/action";
import { UserOutlined } from "@ant-design/icons";
import "./detailListSubType.scss";
import { Link } from "react-router-dom";
export default function DetailListSupType() {
  const dispatch = useDispatch();
  const params = useParams();
  let { jobList } = useSelector((state) => state.JobManagementReducer);
  const { detailSubTypeJob } = useSelector((state) => state.profileUserReducer);
  const [switchValue, setSwitchValue] = useState(false);
  const [switchName, setSwitchName] = useState("");

  useEffect(() => {
    dispatch(actGetDetailSubTypeJob(params?.idSubTypeJob));
  }, [params?.idSubTypeJob]);
  useEffect(() => {
    dispatch(actGetSubJob(params?.idSubTypeJob));
  }, [params?.idSubTypeJob]);
  const handleChangeSwitch = (name) => {
    return (value) => {
      setSwitchValue(value);
      setSwitchName(name);
    };
  };
  const proSer = jobList?.filter((job) => job.proServices === true);
  const localSel = jobList?.filter((job) => job.localSellers === true);
  const onlSel = jobList?.filter((job) => job.onlineSellers === true);
  //
  const proLocal = jobList?.filter(
    (job) => job.proServices === true && job.localSellers === true
  );
  const proOnl = jobList?.filter(
    (job) => job.proServices === true && job.onlineSellers === true
  );
  const localOnl = jobList?.filter(
    (job) => job.onlineSellers === true && job.localSellers === true
  );

  if (switchName === "proServices" && switchValue) {
    jobList = proSer;
  } else if (switchName === "localSellers" && switchValue) {
    jobList = localSel;
  } else if (switchName === "onlineSellers" && switchValue) {
    jobList = onlSel;
  } else if (!switchName === "onlineSellers" && switchValue) {
    jobList = proLocal;
  }
  console.log(jobList);
  return (
    <div className="detail-list-subtype">
      <div className="info-type-subtype">
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="/">
            <strong>FIVERR</strong>
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`/categories/${params?.nameTypeJob}`}>
            {params?.nameTypeJob}
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {detailSubTypeJob?.name.toUpperCase()}{" "}
          </Breadcrumb.Item>
        </Breadcrumb>
        <h4>{detailSubTypeJob?.name}</h4>
        <p>
          Stand out from the crowd with a logo that fits your brand personality.
        </p>
      </div>
      <div className="render-list-subtype">
        <div className="result-sort">
          <p>{jobList?.length} services available</p>
          <div className="search-by-switch">
            <p>Sort by:</p>

            <div>
              <label htmlFor="proServices">Pro Services</label>
              <Switch
                name="proServices"
                onChange={handleChangeSwitch("proServices")}
              />
            </div>
            <div>
              <label htmlFor="localSellers">Local Sellers</label>
              <Switch
                name="localSellers"
                onChange={handleChangeSwitch("localSellers")}
              />
            </div>

            <div>
              <label htmlFor="onlineSellers">Online Sellers</label>
              <Switch
                name="onlineSellers"
                onChange={handleChangeSwitch("onlineSellers")}
              />
            </div>
          </div>
        </div>
        <div className="main-content row">
          {jobList?.map((job, idx) => {
            return (
              <div className="col-3">
                <div className="card job-item">
                  <Link to={`/${params?.nameTypeJob}/${job._id}`}>
                    <img className="card-img-top" src={job.image} alt="" />
                  </Link>

                  <div className="card-body">
                    <div className="card-avatar">
                      <Avatar size="medium" icon={<UserOutlined />} />
                      <span className="ml-2">
                        uplancemedia
                        <p>Level 1 Seller</p>
                      </span>
                    </div>
                    <Link to={`/${params?.nameTypeJob}/${job._id}`}>
                      <p className="card-text text-active">{job.name}</p>
                    </Link>
                    <p className="card-text text-star">
                      <>
                        <i className="fa fa-star"></i>
                        {job.rating} <span>(183)</span>
                      </>
                    </p>
                  </div>
                  <div className="card-footer">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                    <p className="card-text">
                      STARTING AT <span>US${job.price}</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
