import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { actGetDetailJobCreatedByUser } from "../createNewJobByUser/StepsCreateNewGig/modules/action";
import "./detailJob.scss";
import { Anchor } from "antd";

export default function DetailJob() {
  const params = useParams();
  const dispatch = useDispatch();
  const { detailJobCreatedByUser } = useSelector(
    (state) => state.profileUserReducer
  );
  const { currentUser } = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    dispatch(actGetDetailJobCreatedByUser(params?.idJobCreateByUser));
  }, []);
  var barFixed = document.getElementById("bar-fixed");
//   var fixed = barFixed.offsetTop;
//   window.addEventListener("scroll", function () {
//     if (window.pageYOffset >= fixed) {
//       fixed.classList.add("fixed");
//     } else {
//       fixed.classList.remove("fixed");
//     }
//   });
  return (
    <div className="detail-job">
      <div className="detail-job-content">
        <div id="bar-fixed">
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#abouttheseller">About The Seller</a>
            </li>
          </ul>
        </div>
        <div className="share-gig">
          <div className="content">
            <span>
              <i class="fa fa-share-alt"></i>
            </span>
            <div>
              <h4>Reach More Customers</h4>
              <p>
                You got the talent, now go viral. Share your Gig on Social Media
                to connect with new customers and get more orders
              </p>
            </div>
          </div>
          <button>Share Your Gig</button>
        </div>
        <div className="main-content row">
          <div className="col-7">
            <div className="overview" id="overview">
              <div className="info-type-subtype">
                <span>{detailJobCreatedByUser?.type.name}</span>
                {">"}
                <span>{detailJobCreatedByUser?.subType.name}</span>
              </div>
              <div className="info-name">
                <p>{detailJobCreatedByUser?.name}</p>
              </div>
              <div className="info-avatar">
                <img src={currentUser.avatar} alt="" />
                <span>{currentUser.name}</span>
              </div>
              <div>
                <img src={detailJobCreatedByUser?.image} alt="" />
              </div>
            </div>
            <div className="about-the-seller" id="abouttheseller">
              <h4>About The Seller</h4>

              <div className="info-top">
                <img src={currentUser.avatar} alt="" />
                <div>
                  <p>{currentUser.name}</p>
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="info-bottom">
                <div className="from">
                  <span>
                    <i className="fa fa-map-marker"></i> From
                  </span>
                  <p>Vietnam</p>
                </div>
                <div className="member-since">
                  <span>
                    <i className="fa fa-user"></i>
                    Member since
                  </span>
                  <p>Oct 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
}
