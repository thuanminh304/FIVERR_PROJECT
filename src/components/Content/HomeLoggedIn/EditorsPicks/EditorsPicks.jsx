import { actGetAllJobsByUser } from "containers/home/homePage/profileUser/createNewJobByUser/StepsCreateNewGig/modules/action";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./editorsPicks.scss";
import { useState } from "react";

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

  const totalPage = Math.ceil(listAllJobsByUser?.length / pagination.limit);
  const listFilter = listAllJobsByUser?.slice(
    pagination.page * pagination.limit,
    pagination.page * pagination.limit + 12
  );

  return (
    <div className="editors-picks">
      <h3>Editors' picks</h3>
      <div className="editors-row">
        {listFilter?.map((job, idx) => {
          return (
            <div key={job._id} className="card  editor-item">
              <img className="card-img-top" src={job.image} alt="" />
              <div className="card-body">
                <div className="card-avatar">
                  <span>
                    <img src={job.image} alt="" />
                    explalno
                  </span>
                </div>
                <p className="card-text text-active">
                  {job.name.length < 28
                    ? job.name
                    : `${job.name.substr(0, 28)}...`}
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
      <div className="pagination">
        <button
          disabled={pagination.page === 0}
          onClick={() => {
            setPagination({
              ...pagination,
              page: pagination.page - 1,
            });
          }}
        >
          Pre
        </button>
        
        <button
          disabled={pagination.page === totalPage - 1}
          onClick={() => {
            setPagination({
              ...pagination,
              page: pagination.page + 1,
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
