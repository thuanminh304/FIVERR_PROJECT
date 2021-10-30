import React from 'react'
import "./carouselMiddle.scss"
import Slider from "react-slick"

export default function CarouselMiddle() {
    const settings={
        slideToShow:1,
        slideToScroll:1,
        infinite:true,
        autoplay:true,
        dots:true,
        pauseOnHover: false,
arrows:false,
speed:500,
autoplaySpeed:5000
    }
    return (
            <Slider className="carousel-middle" {...settings}>
<div className="img-item">
              <span>Convert web visitors into customers <p>Unlock the secrets of conversion rate optimization with this course</p>  </span>
            <img
              src="images/imagesHomeLoggedIn/Conversion Rate Optimization.jpg"
              alt=""
            />
          </div>
          <div className="img-item">
          <span>Build a strong online presence<p>Boost your business with this course on personal branding techniques.</p>  </span>
            <img
              src="/images/imagesHomeLoggedIn/Personal Branding.jpg"
              alt=""
            />
          </div>
          <div className="img-item">
          <span>Facebook ads, Know it all.<p>Scale your business with best practices covered in this course</p>  </span>
            <img
              src="/images/imagesHomeLoggedIn/Facebook Ads.jpg"
              alt=""
            />
          </div>
          <div className="img-item">
          <span>Master social media platforms <p>Learn how to monetize your online presence with this course.</p>  </span>
            <img
              src="/images/imagesHomeLoggedIn/Social Media.jpg"
              alt=""
            />
          </div>

            </Slider>
    )
}
