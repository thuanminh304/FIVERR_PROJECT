import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { actGetDetailJobCreatedByUser } from "../createNewJobByUser/StepsCreateNewGig/modules/action";
import "./detailJob.scss";
import { FieldTimeOutlined } from "@ant-design/icons";
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
  console.log(over, seller);

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
          <div className="col-4 ">
            <div className="main-content-right sticky-top">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Basic
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Standard
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Premium
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="tab-pane-content">
                    <div>
                      <p>
                        {" "}
                        <FieldTimeOutlined />3 Days Delivery
                      </p>
                      <ul>
                        <li>
                          <i class="fa fa-check"></i>Commercial Use
                        </li>
                        <li>
                          <i class="fa fa-check"></i>Source File
                        </li>
                        <li>
                          <i class="fa fa-check"></i>High Resolution
                        </li>
                      </ul>
                    </div>
                    <p>US${detailJobCreatedByUser?.price}</p>
                  </div>
                  <button>Continue (US${detailJobCreatedByUser?.price})</button>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="tab-pane-content">
                    <div>
                      <p>
                        {" "}
                        <FieldTimeOutlined />3 Days Delivery
                      </p>
                      <ul>
                        <li>
                          <i class="fa fa-check"></i>Commercial Use
                        </li>
                        <li>
                          <i class="fa fa-check"></i>Source File
                        </li>
                        <li>
                          <i class="fa fa-check"></i>High Resolution
                        </li>
                      </ul>
                    </div>
                    <p>US${detailJobCreatedByUser?.price + 15}</p>
                  </div>
                  <button>
                    Continue (US${detailJobCreatedByUser?.price + 15})
                  </button>
                </div>
                <div
                  class="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="tab-pane-content">
                    <div>
                      <p>
                        {" "}
                        <FieldTimeOutlined />3 Days Delivery
                      </p>
                      <ul>
                        <li>
                          <i class="fa fa-check"></i>Commercial Use
                        </li>
                        <li>
                          <i class="fa fa-check"></i>Source File
                        </li>
                        <li>
                          <i class="fa fa-check"></i>High Resolution
                        </li>
                      </ul>
                    </div>
                    <p>US${detailJobCreatedByUser?.price + 30}</p>
                  </div>
                  <button>
                    Continue (US${detailJobCreatedByUser?.price + 30})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
