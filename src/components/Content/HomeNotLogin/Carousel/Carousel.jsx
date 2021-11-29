import React from "react";
import "./carousel.scss";
import Slider from "react-slick";
import { useHistory } from "react-router";
import { Input } from "antd";
import messageConfig from "components/Message/message";

export default function Carousel() {
  const { Search } = Input;
  const history = useHistory();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    fade: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          infinite: false,
        },
      },
    ],
  };

  const onSearch = (value) => {
    if (value !== "") {
      setTimeout(() => {
        messageConfig.success();

        history.push(`/search/gigs/${value}`);
      }, 0);
    }
  };
  return (
    <div className="carousel">
        <div className="carousel-text">
          <p>
            Find the perfect <i> freelance </i>services for your business
          </p>
          <Search
            className="search-input-antd-carousel"
            placeholder="Try 'building mobile app'"
            onSearch={onSearch}
            enterButton="Search"
          />
        </div>
      <Slider {...settings}>
        <div className="carousel-hero1">
          <p className="carousel-name-hero">
            Andrea, <strong>Fashion Designer </strong>
          </p>
        </div>
        <div className="carousel-hero2">
          <p className="carousel-name-hero">
            Moon, <strong>Marketing Expert </strong>
          </p>
        </div>
        <div className="carousel-hero3">
          <p className="carousel-name-hero">
            Ritika, <strong>Showmaker and Designer </strong>
          </p>
        </div>
        <div className="carousel-hero4">
          <p className="carousel-name-hero">
            Zach, <strong>Bar Owner </strong>
          </p>
        </div>
        <div className="carousel-hero5">
          <p className="carousel-name-hero">
            Gabrielle, <strong>Video Editor </strong>
          </p>
        </div>
      </Slider>

      <div className="carousel-trusted">
        <span className="trusted-text">Trusted by:</span>
        <ul>
          <li>
            <img src="images/shared-img/facebook.543cf10.png" alt="" />
          </li>
          <li>
            <img src="images/shared-img/google.517da09.png" alt="" />
          </li>
          <li>
            <img src="images/shared-img/netflix.e3ad953.png" alt="" />
          </li>
          <li>
            <img src="images/shared-img/pandg.8b7310b.png" alt="" />
          </li>
          <li className="paypal">
            <img src="images/shared-img/paypal.ec56157.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
