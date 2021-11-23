import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "./carouselLoggedIn.scss";
import { Link } from "react-router-dom";
export default function CarouselLoggedIn() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    dots: true,
  };
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const nameCarousel = [...currentUser.email.split("")];
  nameCarousel.splice(-10);
  let name = "";
  return (
    <div className="carousel-start row">
      <div className="carousel-start-text col-3">
        <p>
          <strong> Hi {name.concat(...nameCarousel)},</strong>
        </p>
        <p>Get offers from sellers for your project</p>
        <button><Link to={`/user/${currentUser.email}`}>Go to Profile</Link></button>
      </div>
      <Slider className="carousel-start-img col-9" {...settings}>
        <div className="img-item">
          <span>
            Start your dropshipping business
            <p>Create, launch & grow your dropshipping business today.</p>
          </span>
          <img
            style={{ objectFit: "cover" }}
            src="images/imagesHomeLoggedIn/carousel4.jpg"
            alt=""
          />
        </div>
        <div className="img-item">
          <span>
            Your first project awaits
            <p>Get started with these recommended sellers.</p>{" "}
          </span>
          <img
            style={{ objectFit: "cover" }}
            src="/images/imagesHomeLoggedIn/carousel2.jpg"
            alt=""
          />
        </div>
        <div className="img-item">
          <span>
            Holiday success starts here
            <p>Head to our Holiday Hub for a head start this season.</p>{" "}
          </span>
          <img
            style={{ objectFit: "cover" }}
            src="/images/imagesHomeLoggedIn/carousel3.jpg"
            alt=""
          />
        </div>
        <div className="img-item">
          <span>
            Landing pages that convert
            <p>Learn the principles for designing great landing pages.</p>{" "}
          </span>
          <img
            style={{ objectFit: "cover" }}
            src="/images/imagesHomeLoggedIn/carousel5.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
