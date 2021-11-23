import React from "react";
import defaultJobRender from "assets/images/defaultTypeJob/defaultJobRender.jpg";
import configNameTypeJob from "setting/configNameTypeJob";
import { Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
import "./renderJob.scss";
const Jobrender = (props) => {
  const { job } = props;
  return (
    <div key={job._id} className="jobRender col-6 col-md-4 col-xl-3">
      <div className="card jobRender-item">
        <Link to={`${configNameTypeJob(job.type.name)}/detail/${job._id}`}>
          <img
            className="card-img-top"
            src={job.image ? job.image : defaultJobRender}
            alt=""
          />
        </Link>
        <div className="card-body jobRender-content">
          <Link to={`${configNameTypeJob(job.type.name)}/detail/${job._id}`}>
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
};

export default Jobrender;
