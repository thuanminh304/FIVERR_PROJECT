import React, { useState, useEffect } from "react";
import { actGetSubJob } from "Modules/JobManagement/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Breadcrumb, Avatar, Switch } from "antd";
import { actGetDetailSubTypeJob } from "containers/home/homePage/profileUser/createNewJobByUser/StepsCreateNewGig/modules/action";
import { UserOutlined } from "@ant-design/icons";
import "./detailListSubType.scss";
import { Link } from "react-router-dom";
import {
  dataSwitch,
  filterSwitch,
} from "containers/shared/FilterJobBySwitch/filterJobBySwitch";

export default function DetailListSupType() {
  const dispatch = useDispatch();
  const params = useParams();
  let { jobList } = useSelector((state) => state.JobManagementReducer);
  const { detailSubTypeJob } = useSelector((state) => state.profileUserReducer);
  const [switchPro, setSwitchPro] = useState({
    value: false,
    name: "",
  });
  const [switchLocal, setSwitchLocal] = useState({
    value: false,
    name: "",
  });
  const [switchOnl, setSwitchOnl] = useState({
    value: false,
    name: "",
  });

  useEffect(() => {
    dispatch(actGetDetailSubTypeJob(params?.idSubTypeJob));
  }, [params?.idSubTypeJob]);
  useEffect(() => {
    dispatch(actGetSubJob(params?.idSubTypeJob));
  }, [params?.idSubTypeJob]);
  const handleChangeSwitch = (name, setSwitch) => {
    return (value) => {
      setSwitch({
        value: value,
        name: name,
      });
    };
  };
  const proSer = dataSwitch.proSer(jobList);
  const localSel = dataSwitch.localSel(jobList);
  const onlSel = dataSwitch.onlSel(jobList);
  const proLocal = dataSwitch.proLocal(jobList);
  const proOnl = dataSwitch.proOnl(jobList);
  const localOnl = dataSwitch.localOnl(jobList);
  const all = dataSwitch.all(jobList);

  const dataList = filterSwitch(
    switchOnl,
    switchPro,
    switchLocal,
    jobList,
    all,
    proOnl,
    localOnl,
    proLocal,
    proSer,
    localSel,
    onlSel
  );
  jobList = dataList;
  return (
    <div className="detail-list-subtype">
      <div className="info-type-subtype">
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="/">
            <strong>FIVERR</strong>
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`/categories/${params?.nameTypeJob}`}>
            <strong>{params?.nameTypeJob.toUpperCase()}</strong>
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
                onChange={handleChangeSwitch("proServices", setSwitchPro)}
              />
            </div>
            <div>
              <label htmlFor="localSellers">Local Sellers</label>
              <Switch
                name="localSellers"
                onChange={handleChangeSwitch("localSellers", setSwitchLocal)}
              />
            </div>

            <div>
              <label htmlFor="onlineSellers">Online Sellers</label>
              <Switch
                name="onlineSellers"
                onChange={handleChangeSwitch("onlineSellers", setSwitchOnl)}
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
