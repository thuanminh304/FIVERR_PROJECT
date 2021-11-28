import React, { useState, useEffect } from "react";
import { actGetSubJob } from "Modules/JobManagement/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Breadcrumb, Switch } from "antd";
import { actGetDetailSubTypeJob } from "containers/home/homePage/profileUser/createNewJobByUser/StepsCreateNewGig/modules/action";
import "./detailListSubType.scss";
import { Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
import defaultJobRender from "assets/images/defaultTypeJob/defaultJobRender.jpg";
import {
  dataSwitch,
  filterSwitch,
} from "containers/shared/FilterJobBySwitch/filterJobBySwitch";
import { renderPagination } from "components/render/render";
export default function DetailListSupType() {
  const dispatch = useDispatch();
  const params = useParams();
  const { nameTypeJob } = params;
  const [isSortShow, setSortShow] = useState(false);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 12,
  });
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
  }, [params?.idSubTypeJob, pagination.page]);
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
  let listJobNotBookedYet = jobList?.filter(
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
    <div className="detail-list-subtype" onClick={showSortList}>
      <div className="info-type-subtype">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">
              <strong>FIVERR</strong>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/categories/${params?.nameTypeJob}`}>
              <strong>{params?.nameTypeJob.toUpperCase()}</strong>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {detailSubTypeJob?.name.toUpperCase()}{" "}
          </Breadcrumb.Item>
        </Breadcrumb>
        <h4>{detailSubTypeJob?.name}</h4>
      </div>
      <div className="render-list-subtype">
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
            return (
              <div key={job._id} className="jobR col-6 col-md-4 col-xl-3">
                <div className="card jobRender-item">
                  <Link to={`/${nameTypeJob}/detail/${job._id}`}>
                    <img
                      className="card-img-top"
                      src={job.image ? job.image : defaultJobRender}
                      alt=""
                    />
                  </Link>
                  <div className="card-body jobRender-content">
                    <Link to={`/${nameTypeJob}/detail/${job._id}`}>
                      {job.name}
                    </Link>
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
        {renderPagination(setPagination, pagination, totalPage, listFilter)}
      </div>
    </div>
  );
}
