import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jobApi from "apis/jobApi";
import { useDispatch } from "react-redux";
import { actGetAllJobsByUser } from "./createNewJobByUser/StepsCreateNewGig/modules/action";
export default function ProfileHasJobs(props) {
  const listJobsCreatedByUser = props.listJobsCreatedByUser;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.AuthReducer);
  return (
    <div className="profile-right-content-jobs">
      <div className="row jobs-content">
        {listJobsCreatedByUser.map((job, idx) => {
          return (
            <div key={job._id} className="col-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={
                    job.image
                      ? job.image
                      : "https://th.bing.com/th/id/OIP.q4OBZWwNg4UKkKl9PG_ouwHaEK?w=256&h=180&c=7&r=0&o=5&pid=1.7"
                  }
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">{job.name}</h4>
                  <div className="hover-overlay">
                   <strong>...</strong>
                    <div className="overlay">
                      <div>
                        <Link to={`/by-user/update-job/${job._id}`}>
                          <i class="fa fa-edit"></i>
                          Update
                        </Link>
                      </div>
                      <div>
                        <Link to={`/by-user/${currentUser?.name}/${job._id}`}>
                          <i class="fa fa-eye"></i>
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
                          <i class="fa fa-trash"></i>
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
