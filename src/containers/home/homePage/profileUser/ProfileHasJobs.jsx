import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jobApi from "apis/jobApi";
import { useDispatch } from "react-redux";
import { actGetAllJobsByUser } from "./createNewJobByUser/StepsCreateNewGig/modules/action";
import configName from "setting/configNameTypeJob";
import { renderPagination } from "components/render/render";
import { useState } from "react";
export default function ProfileHasJobs(props) {
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 12,
  });
  const listJobsCreatedByUser = props.listJobsCreatedByUser;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const listJobNotBookedYet = listJobsCreatedByUser?.filter(
    (job) => job.usersBooking === undefined
  );
  const totalPage = Math.ceil(listJobNotBookedYet?.length / pagination.limit);
  const listFilter = listJobNotBookedYet?.slice(
    pagination.page * pagination.limit,
    pagination.page * pagination.limit + 12
  );
  return (
    <div className="profile-right-content-jobs">
      <div className="row jobs-content">
        {listFilter?.map((job, idx) => {
          return (
            <div
              key={job._id}
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src={
                    job.image
                      ? job.image
                      : "https://th.bing.com/th/id/OIP.q4OBZWwNg4UKkKl9PG_ouwHaEK?w=256&h=180&c=7&r=0&o=5&pid=1.7"
                  }
                  alt=""
                  style={{
                    height: 140,
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {job.name.length < 30
                      ? job.name
                      : `${job.name.substr(0, 30)}...`}
                  </h4>
                  <div className="hover-overlay">
                    <strong>...</strong>
                    <div className="overlay">
                      <div>
                        <Link to={`/by-user/update-job/${job._id}`}>
                          <i className="fa fa-edit"></i>
                          Update
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={`/by-user/${configName(currentUser?.name)}/${
                            job._id
                          }`}
                        >
                          <i className="fa fa-eye"></i>
                          Preview
                        </Link>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            jobApi
                              .deleteJob(job._id)
                              .then((res) => {
                                console.log(res.data);
                                dispatch(actGetAllJobsByUser());
                              })
                              .catch((err) => {
                                console.log(err?.response);
                              });
                          }}
                        >
                          <i className="fa fa-trash"></i>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="card-text">
                    STARTING AT $<span>{job.price}</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-12 col-md-6 col-lg-4  col-xl-4">
          <div className="card create-new-gig">
            <Link to="/by-user/create-new-job">
              <span>+</span>
              <p>Create a New Gig</p>
            </Link>
          </div>
        </div>
      
      </div>
      <div >
        {renderPagination(setPagination, pagination, totalPage, listFilter)}
        </div>
    </div>
  );
}
