import { actGetSubJob } from "Modules/JobManagement/actions";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Breadcrumb } from "antd";
import { actGetDetailSubTypeJob } from "containers/home/homePage/profileUser/createNewJobByUser/StepsCreateNewGig/modules/action";

import "./detailListSubType.scss";
import { Link } from "react-router-dom";
export default function DetailListSupType() {
  const dispatch = useDispatch();
  const params = useParams();
  const { jobList } = useSelector((state) => state.JobManagementReducer);
  const { detailSubTypeJob } = useSelector((state) => state.profileUserReducer);

  useEffect(() => {
    dispatch(actGetDetailSubTypeJob(params?.idSubTypeJob));
  }, [params?.idSubTypeJob]);
  useEffect(() => {
    dispatch(actGetSubJob(params?.idSubTypeJob));
  }, [params?.idSubTypeJob]);
  return (
    <div className="detail-list-subtype">
      <div className="info-type-subtype">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>{params?.nameTypeJob}</Breadcrumb.Item>
          <Breadcrumb.Item href="# ">{detailSubTypeJob?.name} </Breadcrumb.Item>
        </Breadcrumb>
        <h4>{detailSubTypeJob?.name}</h4>
      </div>
      <div className="render-list-subtype">
        <div className="result-sort">
          <p>{jobList?.length} services available</p>
          <p>Sort by</p>
        </div>
        <div className="main-content row">
          {jobList?.map((job, idx) => {
            return (
              <div className="col-3">
                <div class="card">
                  <img class="card-img-top" src={job.image} alt="" />
                  <div className="card-body">
                    <div className="card-avatar">
                      <span>
                        <img
                          src="images/imagesHomeLoggedIn/19702044_10154640988610978_3380990544263366619_n.jpg"
                          alt=""
                        />
                        uplancemedia
                      </span>
                    </div>
                    <p className="card-text text-active">{job.name}</p>
                    <p className="card-text">
                      <>
                        <i className="fa fa-star"></i>
                        {job.rating} <span>(183)</span>
                      </>
                      <img
                        src="images/imagesHomeLoggedIn/pro-badge-outline-2.0.f84c499 (1).svg"
                        alt=""
                      />
                    </p>
                  </div>
                  <div className="card-footer">
                    <span>
                      <i className="fa fa-bars"></i>
                      <i className="fa fa-heart"></i>
                    </span>
                    <p className="card-text">
                      STARTING AT <span>${job.price}</span>{" "}
                    </p>
                    <button>
                      <Link to="/">View detail</Link>
                    </button>
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
