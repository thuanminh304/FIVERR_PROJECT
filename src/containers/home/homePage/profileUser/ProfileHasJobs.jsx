import React from "react";
import { Link } from "react-router-dom";

export default function ProfileHasJobs(props) {
  const listJobsCreatedByUser = props.listJobsCreatedByUser;
  return (
    <div className="profile-right-content-jobs">
      <div className="active-bars">
        <span>ACTIVE GIGS</span>
      </div>
      <div className="row jobs-content">
        {listJobsCreatedByUser.map((job, idx) => {
          return (
            <div key={job._id} className="col-4">
              <div className="card">
                <img className="card-img-top" src={job.image} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{job.name}</h4>
                  <p className="card-text">
                    STARTING AT $<span>{job.price}</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-4">
          <div className="card create-new-gig">
            <Link to="/by-user/create-new-job">
              <span>+</span>
              <p>Create a New Gig</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
