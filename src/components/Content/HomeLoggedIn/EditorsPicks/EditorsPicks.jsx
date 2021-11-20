import React, { useEffect, useState } from "react";
import { actGetAllJobsByUser } from "containers/home/homePage/profileUser/createNewJobByUser/StepsCreateNewGig/modules/action";
import { useDispatch, useSelector } from "react-redux";
import "./editorsPicks.scss";
import configName from "setting/configNameTypeJob";
import { Link } from "react-router-dom";
import { renderPagination } from "components/render/render";
export default function EditorsPicks(props) {
  const { listAllJobsByUser } = useSelector(
    (state) => state.profileUserReducer
  );
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 12,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetAllJobsByUser());
  }, [pagination.page]);
  let listJobNotBookedYet = listAllJobsByUser?.filter(
    (job) => job.usersBooking === undefined
  );
  const totalPage = Math.ceil(listJobNotBookedYet?.length / pagination.limit);
  let listFilter = [];
  listFilter = listJobNotBookedYet?.slice(
    pagination.page * pagination.limit,
    pagination.page * pagination.limit + 12
  );

  return (
    <div className="editors-picks">
      <h3>Editors' picks</h3>
      <div className="editors-row">
        {listFilter?.map((job, idx) => {
          let name = configName(job?.type.name);
          return (
            <div key={job._id} className="card  editor-item">
              <Link to={`/${name}/detail/${job._id}`}>
                <img className="card-img-top" src={job.image} alt="" />
              </Link>
              <div className="card-body">
                <p className="card-text text-active">
                  <Link to={`/${name}/detail/${job._id}`}>
                    {job.name.length < 28
                      ? job.name
                      : `${job.name.substr(0, 28)}...`}
                  </Link>
                </p>
                <p className="card-text">
                  <i className="fa fa-star"></i>
                  {job.rating} <span>(237)</span>
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
      {renderPagination(setPagination, pagination, totalPage)}
    </div>
  );
}
