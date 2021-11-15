import jobApi from "apis/jobApi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./verifiedPro.scss";
export default function VerifiedPro() {
  const [listSocial, setListSocial] = useState([]);
  useEffect(async () => {
    try {
      const res = await jobApi.getSubJobList("618cc7a895d99f001c0c07eb");
      setListSocial(res.data);
    } catch (err) {
      console.log(err?.response);
    }
  }, []);
  return (
    <div className="verified-pro">
      <div className="verified-pro-text">
        <h3 className="title">
          {" "}
          Verified Pro services in <span>Social Media Marketing</span>{" "}
        </h3>
        <div className="text">
          <p>Hand-vetted talent for all your professional needs.</p>{" "}
          <span>
            <Link to="/categories/digital-marketing/618cc7a895d99f001c0c07eb">
              See All {">"}
            </Link>
          </span>
        </div>
      </div>
      <div className="verified-pro-list">
        {listSocial?.slice(0, 5).map((job, idx) => {
          return (
            <div key={job._id} className="card list-pro-item">
              <Link to={`/digital-marketing/detail/${job._id}`}>
                <img className="card-img-top" src={job.image} alt="" />
              </Link>
              <div className="card-body">
                <div className="card-avatar">
                  <span>
                    <img src={job.image} alt="" />
                    uplancemedia
                  </span>
                </div>
                <p className="card-text text-active">
                  <Link to={`/digital-marketing/detail/${job._id}`}>
                    {job.name.length < 20
                      ? job.name
                      : `${job.name.substr(0, 20)}...`}
                  </Link>
                </p>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
