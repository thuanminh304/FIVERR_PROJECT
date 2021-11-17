import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./project.scss";
import { actGetAllJobsByUser } from "containers/home/homePage/profileUser/createNewJobByUser/StepsCreateNewGig/modules/action";
import { useEffect } from "react";
export default function Projects() {
  const { listAllJobsByUser } = useSelector(
    (state) => state.profileUserReducer
  );
  const numberRandomMax = Math.floor(Math.random() * 12) + 8;
  const numberRandomMin = Math.floor(Math.random() * 4);
  let listJobNotBookedYet = listAllJobsByUser?.filter(
    (job) => job.usersBooking === undefined
  );
  const listRandom = listJobNotBookedYet?.slice(
    numberRandomMin,
    numberRandomMax
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetAllJobsByUser());
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="fiverrProject py-5 ">
      <div className="fiverrProject__content ">
        <h2>Get inspired with projects made by our freelancers</h2>
        <Slider {...settings}>
          {listRandom?.map((job, idx) => {
            return (
              <div key={job._id} className="fiverrProject__item">
                <div className="fiverrProject__img">
                  <Link to={`/graphics-design/detail/${job._id}`}>
                    <img className="img-fluid" src={job.image} alt="" />
                  </Link>
                </div>
                <div className="fiverrProject__bot">
                  <div className="fiverrProject__user">
                    <a href="# ">
                      <img src={job.image} alt="" />
                    </a>
                  </div>
                  <div className="fiverrProject__name">
                    <a href="# ">
                      <b>
                        <Link to={`/graphics-design/detail/${job._id}`}>
                          {job.name.length < 25
                            ? job.name
                            : `${job.name.substr(0, 25)}...`}
                        </Link>
                      </b>
                    </a>
                    <br />
                    <a href="# " id="username">
                      by eveeelin
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <Link to="categories/graphics-design" className="see-more-link">
          See More Project &gt;{" "}
        </Link>
      </div>
    </section>
  );
}
