import React from 'react'
import './carousel.scss'
import Slider from "react-slick";

export default function Carousel() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2500,
        fade:true,

      };
      return (
        <div className="carousel">
        <div className="carousel-content">
        <div class="carousel__text">
          <p>Find the perfect <i>freelance</i> <br> services for your business</p>
          <div class="input__carousel">
            <input class="form__carousel" type="text" placeholder="Try 'building mobile app'" />
            <i class="icon__search fa fa-search"></i>
            <button>Search</button>
          </div>
          <div class="popular">
            <span>Popular:</span>
            <ul>
              <li><a href="#">Website Design</a></li>
              <li><a href="#">WordPress</a></li>
              <li><a href="#">Logo Design</a></li>
              <li><a href="#">Dropshipping</a></li>
            </ul>
          </div>
        </div>
    </div>

          <Slider {...settings}>
            <div className="carousel-hero1">
            </div>
             <div className="carousel-hero2">
            </div>
             <div className="carousel-hero3">
            </div>
             <div className="carousel-hero4">
            </div>
             <div className="carousel-hero5">
            </div>
            
            
            
          </Slider>
        </div>
      );
}
