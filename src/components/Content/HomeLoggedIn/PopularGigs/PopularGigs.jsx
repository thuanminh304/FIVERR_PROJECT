import React from "react";
import "./popularGigs.scss";
import Slider from "react-slick";
import { useEffect } from "react";
import { useState } from "react";
import jobApi from "apis/jobApi";
import { Link } from "react-router-dom";
export default function GigsInWordPress() {
  const [listLogo, setListLogo] = useState([]);
  useEffect(async () => {
    try {
      const res = await jobApi.getSubJobList("61951593aef344001cec451e");
      setListLogo(res.data);
    } catch (err) {
      console.log(err?.response);
    }
  }, []);
  const settings = {
    infinite: false,
    dots: false,
    slidesToScroll: 5,
    slidesToShow: 5,
    autoplay: false,
  };
  let listJobNotBookedYet = listLogo?.filter(
    (job) => job.usersBooking === undefined
  );
  return (
    <div className="popular-gigs">
      <h3>
        Most popular Gigs in <span>Logo Design</span>{" "}
      </h3>
      <Slider className="popular-gigs-slider" {...settings}>
        {listJobNotBookedYet?.map((job, idx) => {
          return (
            <div key={job._id} className="card gigs-item">
              <Link to={`/graphics-design/detail/${job._id}`}>
                <img className="card-img-top" src={job.image} alt="" />
              </Link>

              <div className="card-body">
                <p className="card-text text-active">
                  <Link to={`/graphics-design/detail/${job._id}`}>
                    {job.name.length < 20
                      ? job.name
                      : `${job.name.substr(0, 20)}...`}
                  </Link>
                </p>
                <p className="card-text">
                  <i className="fa fa-star"></i>
                  {job.rating} <span>(237)</span>
                </p>
              </div>
              <div className="card-footer">
                <span className="icon-footer">
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
      </Slider>
    </div>
  );
}
