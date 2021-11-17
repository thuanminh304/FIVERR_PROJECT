import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { actGetDetailJobCreatedByUser } from "../createNewJobByUser/StepsCreateNewGig/modules/action";
import "./detailJob.scss";
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
  const [over, setOver] = useState(false);
  const [seller, setSeller] = useState(false);
  const clickOver = () => {
    setOver(() => {
      return true;
    });
    setSeller(() => {
      return false;
    });
  };
  if (over) {
    document.querySelector(".over").style.borderBottom = "4px solid #1dbf73";
    document.querySelector(".seller").style.borderBottom = "none";
  }
  const clickSeller = () => {
    setOver(() => {
      return false;
    });
    setSeller(() => {
      return true;
    });
  };
  if (seller) {
    document.querySelector(".seller").style.borderBottom = "4px solid #1dbf73";
    document.querySelector(".over").style.borderBottom = "none";
  }
  const configName = (name) => {
    if (name?.search("&") !== -1) {
      return name.replace(" & ", "-").toLowerCase();
    } else {
      return name.replace(" ", "-").toLowerCase();
    }
  };
  return (
    <div className="detail-job">
      <div className="detail-job-content">
        <div className="bar-fixed navbar sticky-top">
          <ul>
            <li>
              <a
                className="over"
                onClick={() => {
                  clickOver();
                }}
                href="#overview"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                className="seller"
                onClick={() => {
                  clickSeller();
                }}
                href="#abouttheseller"
              >
                About The Seller
              </a>
            </li>
          </ul>

          <button>
            {" "}
            <Link to={`/by-user/update-job/${detailJobCreatedByUser?._id}`}>
              <i class="fa fa-edit"></i> Edit Gig
            </Link>
            <span></span>
          </button>
        </div>

        <div className="main-content row">
          <div className="col-12 col-md-10 col-xl-10">
            <div className="overview" id="overview">
              <div className="info-type-subtype pt-2">
                <span>
                  <Link to={`/categories/${configName("graphics & design")}`}>
                    {detailJobCreatedByUser?.type.name}
                  </Link>
                </span>
                {">"}
                <span>
                  <Link
                    to={`/categories/${configName("graphics & design")}/${
                      detailJobCreatedByUser?.subType._id
                    }`}
                  >
                    {detailJobCreatedByUser?.subType.name}
                  </Link>
                </span>
              </div>
              <div className="info-name">
                <p>{detailJobCreatedByUser?.name}</p>
              </div>
              <div className="info-avatar">
                <span>
                  Price:{" "}
                  <span style={{ fontSize: 18, color: "#1dbf73" }}>
                    {" "}
                    ${detailJobCreatedByUser?.price}
                  </span>{" "}
                </span>
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
        </div>
      </div>
    </div>
  );
}
