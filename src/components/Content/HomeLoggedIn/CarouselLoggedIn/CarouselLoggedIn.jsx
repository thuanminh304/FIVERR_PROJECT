import React from "react";
import Slider from "react-slick";
import {useSelector} from 'react-redux'
import "./carouselLoggedIn.scss";
export default function CarouselLoggedIn() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false,
    pauseOnHover: false,
    dots: true,
  };
  const {currentUser}=useSelector(state=>state.AuthReducer)
  const nameCarousel=[...currentUser.email.split('')]
  nameCarousel.splice(-10)
  let name=''
  return (
    <div className="carousel-start row">
      <div className="carousel-start-text col-3">
        <p>
          {" "}
          <strong> Hi {name.concat(...nameCarousel)},</strong>
        </p>
        <p>Get offers from sellers for your project</p>
        <button>Post a Request</button>
      </div>
        <Slider className="carousel-start-img col-9" {...settings}>
          <div className="img-item">
              <span>Learn how to lunch a postcard <p>Now's time to lunch your postcard, we got the knowhow.</p>  </span>
            <img
              src="images/imagesHomeLoggedIn/Find_The_Right_Freelancer_Desktop.jpg"
              alt=""
            />
          </div>
          <div className="img-item">
          <span>Learn how to lunch a postcard <p>Now's time to lunch your postcard, we got the knowhow.</p>  </span>
            <img
              src="/images/imagesHomeLoggedIn/In_Session_Recommendations_desktop.jpg"
              alt=""
            />
          </div>
          <div className="img-item">
          <span>Learn how to lunch a postcard <p>Now's time to lunch your postcard, we got the knowhow.</p>  </span>
            <img
              src="/images/imagesHomeLoggedIn/Dropshipping_LIHP_Banner-desktop-988x233.jpg"
              alt=""
            />
          </div>
          <div className="img-item">
          <span>Learn how to lunch a postcard <p>Now's time to lunch your postcard, we got the knowhow.</p>  </span>
            <img
              src="/images/imagesHomeLoggedIn/Export Desktop V4 (1).jpg"
              alt=""
            />
          </div>
        </Slider>
    </div>
  );
}
