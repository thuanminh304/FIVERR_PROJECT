import React from "react";
import Slider from "react-slick";
import "./project.scss";
export default function Projects() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <section className="fiverrProject py-5 my-5">
      <div className="fiverrProject__content ">
        <h2>Get inspired with projects made by our freelancers</h2>
        <Slider {...settings}>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img className="img-fluid" src="./images/eveeelin.jpeg" alt />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user11.png" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Logo Design</b>
                </a>
                <br />
                <a href="#" id="username">
                  by eveeelin
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="./images/bruno_malagrino.jfif"
                  alt
                />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user8.jfif" className="img-fluid" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Logo Design</b>
                </a>
                <br />
                <a href="#" id="username">
                  by bruno_malagrino
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img className="img-fluid" src="./images/spickex.jpeg" alt />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user10.jpg" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Portraits &amp; Caricatures</b>
                </a>
                <br />
                <a href="#" id="username">
                  by spickex
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img className="img-fluid" src="./images/skydesigner.png" alt />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user3.png" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Web &amp; Mobile Design</b>
                </a>
                <br />
                <a href="#" id="username">
                  by skydesigner
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="./images/christophbrandl.jfif"
                  alt
                />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user5.png" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Illustration</b>
                </a>
                <br />
                <a href="#" id="username">
                  by christophbrandl
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="./images/lamonastudio-img.jfif"
                  alt
                />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user4.png" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Animated GIFs</b>
                </a>
                <br />
                <a href="#" id="username">
                  by lamonastudio
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="./images/annapietrangeli.jpeg"
                  alt
                />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user2.jpg" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Book Design</b>
                </a>
                <br />
                <a href="#" id="username">
                  by annapietrangeli
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="./images/mijalzagier.jfif"
                  alt
                />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user7.jpg" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Packaging Design</b>
                </a>
                <br />
                <a href="#" id="username">
                  by mijalzagier
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="./images/passionshake.jpeg"
                  alt
                />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user6.jpg" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Product Photography</b>
                </a>
                <br />
                <a href="#" id="username">
                  by passionshake
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="./images/fernandobengua.jfif"
                  alt
                />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user9.jfif" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Social Media Design</b>
                </a>
                <br />
                <a href="#" id="username">
                  by fernandobengua
                </a>
              </div>
            </div>
          </div>
          <div className="fiverrProject__item">
            <div className="fiverrProject__img">
              <a href="#">
                <img className="img-fluid" src="./images/noneyn.jfif" alt />
              </a>
            </div>
            <div className="fiverrProject__bot">
              <div className="fiverrProject__user">
                <a href="#">
                  <img src="./images/user1.jpg" alt />
                </a>
              </div>
              <div className="fiverrProject__name">
                <a href="#">
                  <b>Flyer Design</b>
                </a>
                <br />
                <a href="#" id="username">
                  by noneyn
                </a>
              </div>
            </div>
          </div>
        </Slider>
        <a href="#" className="see-more-link">
          See More Project &gt;{" "}
        </a>
      </div>
    </section>
  );
}
