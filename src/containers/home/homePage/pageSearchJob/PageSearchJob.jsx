import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { actGetListJobsByName } from "containers/home/homePage/profileUser/createNewJobByUser/StepsCreateNewGig/modules/action";
import { useDispatch } from "react-redux";
import { Switch } from "antd";
import { Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
import configName from "setting/configNameTypeJob";
import defaultJobRender from "assets/images/defaultTypeJob/defaultJobRender.jpg";
import { useState } from "react";
import {
  dataSwitch,
  filterSwitch,
} from "containers/shared/FilterJobBySwitch/filterJobBySwitch";
import { renderPagination } from "components/render/render";
import "../DetailListSubType/detailListSubType.scss";

export default function PageSearchJob() {
  const params = useParams();
  const dispatch = useDispatch();
  const [isSortShow, setSortShow] = useState(false);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 12,
  });
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
    const pagination = document.querySelector(".pagination-app");
    pagination.addEventListener("click", handlePagination);
  }, []);
  const handlePagination = (e) => {
    const firstBtn = e.target.closest(".firstPage");
    const prevPage = e.target.closest(".prevPage");
    const nextPage = e.target.closest(".nextPage");
    if (!!firstBtn || !!prevPage || !!nextPage) {
      window.scrollTo(0, 0);
    }
  };
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
  let listJobNotBookedYet = listJobsByName?.filter(
    (job) => job.usersBooking === undefined
  );
  const proSer = dataSwitch.proSer(listJobNotBookedYet);
  const localSel = dataSwitch.localSel(listJobNotBookedYet);
  const onlSel = dataSwitch.onlSel(listJobNotBookedYet);
  const proLocal = dataSwitch.proLocal(listJobNotBookedYet);
  const proOnl = dataSwitch.proOnl(listJobNotBookedYet);
  const localOnl = dataSwitch.localOnl(listJobNotBookedYet);
  const all = dataSwitch.all(listJobNotBookedYet);

  const dataList = filterSwitch(
    switchOnl,
    switchPro,
    switchLocal,
    listJobNotBookedYet,
    all,
    proOnl,
    localOnl,
    proLocal,
    proSer,
    localSel,
    onlSel
  );
  listJobNotBookedYet = dataList;
  const totalPage = Math.ceil(listJobNotBookedYet?.length / pagination.limit);
  const listFilter = listJobNotBookedYet?.slice(
    pagination.page * pagination.limit,
    pagination.page * pagination.limit + 12
  );
  const showSortList = (e) => {
    const sortBtn = e.target.closest("#sortBtn");
    const switchList = e.target.closest(".switch-sortBtn");
    if (!!sortBtn) {
      setSortShow(!isSortShow);
    } else if (!!switchList) {
      e.preventDefault();
    } else {
      setSortShow(false);
    }
  };
  return (
    <div className="page-search-job" onClick={showSortList}>
      <h3>Search for "{params?.name}"</h3>
      <div className="render-list-jobs">
        <div className="result-sort">
          <p>{listJobNotBookedYet?.length} services available</p>
          <div className="search-by-switch">
            <p id="sortBtn">Sort by</p>
            <div className={"switch-sortBtn " + (!!isSortShow ? "show" : "")}>
              <div className="switch-icon">
                <label htmlFor="proServices">Pro Services</label>
                <Switch
                  size="small"
                  name="proServices"
                  onChange={handleChangeSwitch("proServices", setSwitchPro)}
                />
              </div>
              <div className="switch-icon">
                <label htmlFor="localSellers">Local Sellers</label>
                <Switch
                  size="small"
                  name="localSellers"
                  onChange={handleChangeSwitch("localSellers", setSwitchLocal)}
                />
              </div>
              <div className="switch-icon">
                <label htmlFor="onlineSellers">Online Sellers</label>
                <Switch
                  size="small"
                  name="onlineSellers"
                  onChange={handleChangeSwitch("onlineSellers", setSwitchOnl)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          {listFilter?.map((job, idx) => {
            const name = configName(job.type.name);
            return (
              <div key={job._id} className="jobR col-6 col-md-4 col-xl-3">
                <div className="card jobRender-item">
                  <Link to={`/${name}/detail/${job._id}`}>
                    <img
                      className="card-img-top"
                      src={job.image ? job.image : defaultJobRender}
                      alt=""
                    />
                  </Link>
                  <div className="card-body jobRender-content">
                    <Link to={`/${name}/detail/${job._id}`}>{job.name}</Link>
                    <div className="jobRender-detail">
                      <h4 className="detail-item detail-rating">
                        {job.rating}
                        <StarFilled />
                      </h4>
                      <h4 className="detail-item detail-price">
                        <span>US${job.price}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {renderPagination(setPagination, pagination, totalPage)}
      </div>
    </div>
  );
}
