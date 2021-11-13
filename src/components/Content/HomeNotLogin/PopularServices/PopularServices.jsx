import React from "react";
import "./popularServices.scss";
import Slider from "react-slick";

export default function PopularServices() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="services">
      <h2>Popular professional services</h2>
      <Slider {...settings}>
        <div className="services__item ">
          <div className="services__text">
            <p>Build your brand</p>
            <h2>Logo Design</h2>
          </div>
          <div className="services__image">
            <img src="images/logo-design-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Customize your site</p>
            <h2>WordPress</h2>
          </div>
          <div className="services__image">
            <img src="images/wordpress-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Share your message</p>
            <h2>Voice Over</h2>
          </div>
          <div className="services__image">
            <img src="images/voiceover-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Engage your audience</p>
            <h2>Video Explainer</h2>
          </div>
          <div className="services__image">
            <img src="images/animated-explainer-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Reach more customers</p>
            <h2>Social Media</h2>
          </div>
          <div className="services__image">
            <img src="images/social-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Unlock growth online</p>
            <h2>SEO</h2>
          </div>
          <div className="services__image">
            <img src="images/seo-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Color your dreams</p>
            <h2>Illustration</h2>
          </div>
          <div className="services__image">
            <img src="images/illustration-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Go global</p>
            <h2>Translation</h2>
          </div>
          <div className="services__image">
            <img src="images/translation-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Learn your business</p>
            <h2>Data Entry</h2>
          </div>
          <div className="services__image">
            <img src="images/data-entry-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Showcase your story</p>
            <h2>Book Covers</h2>
          </div>
          <div className="services__image">
            <img src="images/book-covers-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
      </Slider>
    </div>
  );
}
