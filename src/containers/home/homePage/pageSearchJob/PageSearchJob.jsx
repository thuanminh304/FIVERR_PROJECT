import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "./pageSearchJob.scss";
import { actGetListJobsByName } from "containers/home/homePage/profileUser/createNewJobByUser/StepsCreateNewGig/modules/action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Switch, Avatar } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import configName from "setting/configNameTypeJob";
import { useState } from "react";
import {
  dataSwitch,
  filterSwitch,
} from "containers/shared/FilterJobBySwitch/filterJobBySwitch";

export default function PageSearchJob() {
  const params = useParams();
  const dispatch = useDispatch();
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
  let { listJobsByName } = useSelector((state) => state.profileUserReducer);
  useEffect(() => {
    dispatch(actGetListJobsByName(params?.name));
  }, [params?.name]);
  const handleChangeSwitch = (name, setSwitch) => {
    return (value) => {
      setSwitch({
        value: value,
        name: name,
      });
    };
  };

  const proSer = dataSwitch.proSer(listJobsByName);
  const localSel = dataSwitch.localSel(listJobsByName);
  const onlSel = dataSwitch.onlSel(listJobsByName);
  const proLocal = dataSwitch.proLocal(listJobsByName);
  const proOnl = dataSwitch.proOnl(listJobsByName);
  const localOnl = dataSwitch.localOnl(listJobsByName);
  const all = dataSwitch.all(listJobsByName);

  const dataList = filterSwitch(
    switchOnl,
    switchPro,
    switchLocal,
    listJobsByName,
    all,
    proOnl,
    localOnl,
    proLocal,
    proSer,
    localSel,
    onlSel
  );
  listJobsByName = dataList;
  return (
    <div className="page-search-job">
      <h3>Search for "{params?.name}"</h3>
      <div className="render-list-jobs">
        <div className="result-sort">
          <p>{listJobsByName?.length} services available</p>
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
          {listJobsByName?.map((job, idx) => {
            let name = configName(job.type.name);
            return (
              <div className="col-3">
                <div className="card job-item">
                  <Link to={`/${name}/${job._id}`}>
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
                    <Link to={`/${name}/${job._id}`}>
                      <p className="card-text text-active">
                        {job.name.length < 35
                          ? job.name
                          : `${job.name.substr(0, 35)}...`}
                      </p>
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
