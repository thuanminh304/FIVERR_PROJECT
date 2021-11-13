import React from "react";
import "./carousel.scss";
import Slider from "react-slick";
import { useHistory } from "react-router";
import { Input } from "antd";
import { Link } from "react-router-dom";

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
  };

  const onSearch = (value) => {
    setTimeout(() => {
      history.push(`/search/gigs/${value}`);
    }, 0);
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

        <div className="carousel-popular">
          <span>Popular : </span>
          <ul>
            <li>
              {" "}
              <Link to="/categories/graphics-design/618d245d95d99f001c0c0ace ">
                Illustration
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/categories/graphics-design/618d243b95d99f001c0c0ac2 ">
                Game Art
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/categories/graphics-design/618c910f95d99f001c0c047c ">
                Logo Design
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/categories/graphics-design/618d252295d99f001c0c0b0e">
                UX Design
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Slider {...settings}>
        <div className="carousel-hero1">
          <p className="carousel-name-hero">
            {" "}
            Andrea, <strong>Fashion Designer </strong>{" "}
          </p>
        </div>
        <div className="carousel-hero2">
          <p className="carousel-name-hero">
            {" "}
            Moon, <strong>Marketing Expert </strong>{" "}
          </p>
        </div>
        <div className="carousel-hero3">
          <p className="carousel-name-hero">
            {" "}
            Ritika, <strong>Showmaker and Designer </strong>{" "}
          </p>
        </div>
        <div className="carousel-hero4">
          <p className="carousel-name-hero">
            {" "}
            Zach, <strong>Bar Owner </strong>{" "}
          </p>
        </div>
        <div className="carousel-hero5">
          <p className="carousel-name-hero">
            {" "}
            Gabrielle, <strong>Video Editor </strong>{" "}
          </p>
        </div>
      </Slider>

      <div className="carousel-trusted">
        <span className="trusted-text">Trusted by:</span>
        <ul>
          <li>
            <img src="images/facebook.543cf10.png" alt="" />
          </li>
          <li>
            <img src="images/google.517da09.png" alt="" />
          </li>
          <li>
            <img src="images/netflix.e3ad953.png" alt="" />
          </li>
          <li>
            <img src="images/pandg.8b7310b.png" alt="" />
          </li>
          <li>
            <img src="images/paypal.ec56157.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
