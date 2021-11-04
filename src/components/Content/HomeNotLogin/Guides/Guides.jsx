import React from "react";
import "./guides.scss";
export default function Guides() {
  return (
    <section className="fiverrGuides py-5">
      <div className="fiverrGuides__content ">
        <h2 className="mb-4">Fiverr guides</h2>
        <div className="fiverrGuides__box">
          <div className="fiverrGuides__item">
            <div className="fiverrGuides__img">
              <img src="./images/guide-start-online-business-552-x2.png" alt="" />
            </div>
            <div className="fiverrGuides__text">
              <h6>Start an online business and work from home</h6>
              <p>A complete guide to starting a small business online</p>
            </div>
          </div>
          <div className="fiverrGuides__item">
            <div className="fiverrGuides__img">
              <img src="./images/guide-digital-marketing-552-x2.png" alt="" />
            </div>
            <div className="fiverrGuides__text">
              <h6>Digital marketing made easy</h6>
              <p>A practical guide to understand what is digital marketing</p>
            </div>
          </div>
          <div className="fiverrGuides__item">
            <div className="fiverrGuides__img">
              <img src="./images/guide-create-a-logo-552-x2.png" alt="" />
            </div>
            <div className="fiverrGuides__text">
              <h6>Create a logo for your business</h6>
              <p>A step-by-step guide to create a memorable business logo</p>
            </div>
          </div>
        </div>
        <a className="see-more-link" href="# ">
          See More Guides &gt;{" "}
        </a>
      </div>
    </section>
  );
}
