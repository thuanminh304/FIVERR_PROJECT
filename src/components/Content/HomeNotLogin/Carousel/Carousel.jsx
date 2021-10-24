import React from "react";
import "./carousel.scss";
import Slider from "react-slick";

export default function Carousel() {
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
  return (
    <div className="carousel">
      <div className="carousel-text">
        <p>
          Find the perfect <i> freelance </i>services for your business
        </p>
        <div className="carousel-input-search">
          <i class="fa fa-search"></i>
          <input placeholder='Try "building mobile app"' />
          <button>Search</button>
        </div>
        <div className="carousel-popular">
          <span>Popular : </span>
          <ul>
            <li>
              {" "}
              <a>Website Design</a>
            </li>
            <li>
              {" "}
              <a>WordPress</a>
            </li>
            <li>
              {" "}
              <a>Logo Design</a>
            </li>
            <li>
              {" "}
              <a>Dropshipping</a>
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

      <div class="carousel-trusted">
        <span class="trusted-text">Trusted by:</span>
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
