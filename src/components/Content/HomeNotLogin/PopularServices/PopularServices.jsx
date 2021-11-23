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
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 376,
        settings: {
          initialSlide: 1,
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
            <img src="images/imagesHomeNoLogin/popularService/logo-design-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Customize your site</p>
            <h2>WordPress</h2>
          </div>
          <div className="services__image">
            <img src="images/imagesHomeNoLogin/popularService/wordpress-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Share your message</p>
            <h2>Voice Over</h2>
          </div>
          <div className="services__image">
            <img src="images/imagesHomeNoLogin/popularService/voiceover-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Engage your audience</p>
            <h2>Video Explainer</h2>
          </div>
          <div className="services__image">
            <img src="images/imagesHomeNoLogin/popularService/animated-explainer-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Reach more customers</p>
            <h2>Social Media</h2>
          </div>
          <div className="services__image">
            <img src="images/imagesHomeNoLogin/popularService/social-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Unlock growth online</p>
            <h2>SEO</h2>
          </div>
          <div className="services__image">
            <img src="images/imagesHomeNoLogin/popularService/seo-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Color your dreams</p>
            <h2>Illustration</h2>
          </div>
          <div className="services__image">
            <img src="images/imagesHomeNoLogin/popularService/illustration-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Go global</p>
            <h2>Translation</h2>
          </div>
          <div className="services__image">
            <img src="images/imagesHomeNoLogin/popularService/translation-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Learn your business</p>
            <h2>Data Entry</h2>
          </div>
          <div className="services__image">
            <img src="images/imagesHomeNoLogin/popularService/data-entry-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
        <div className="services__item">
          <div className="services__text">
            <p>Showcase your story</p>
            <h2>Book Covers</h2>
          </div>
          <div className="services__image">
            <img src="images/imagesHomeNoLogin/popularService/book-covers-2x.jpg" alt="" />
          </div>
          <div className="services-overlay"></div>
        </div>
      </Slider>
    </div>
  );
}
