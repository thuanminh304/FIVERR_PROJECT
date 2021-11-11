import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__header">
          <h4 className="categories__title">Graphics Design</h4>
        </div>
        <div className="categories__content row">
          <div className="content__sideLeft col-3">
            <ul className="sideLeft__list">
              <li className="sideLeft__listItem sideLeft__listTitle">
                Graphics Design
              </li>
              <li className="sideLeft__listItem">
                <Link to="...">Logo Design</Link>
              </li>
            </ul>
          </div>
          <div className="content__sideRight col-9 row">
            <div className="sideRight__contentItem col-4">
              <Link to="...." className="">
                <span>
                  <img src="../images/defaultTypeJob/defaultTypeJob.jpg" onError={(e) => (e.target.onerror = null, e.target.src = '../images/defaultTypeJob/defaultTypeJob.jpg')} alt="" />
                </span>
                <p className="title">Logo Design</p>
              </Link>
            </div>
            <div className="sideRight__contentItem col-4">
              <Link to="...." className="">
                <span>
                  <img src="../images/album_cover.jpg" alt="" />
                </span>
                <p className="title">Logo Design</p>
              </Link>
            </div>
            <div className="sideRight__contentItem col-4">
              <Link to="...." className="">
                <span>
                  <img src="../images/album_cover.jpg" alt="" />
                </span>
                <p className="title">Logo Design</p>
              </Link>
            </div>
            <div className="sideRight__contentItem col-4">
              <Link to="...." className="">
                <span>
                  <img src="../images/album_cover.jpg" alt="" />
                </span>
                <p className="title">Logo Design</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
