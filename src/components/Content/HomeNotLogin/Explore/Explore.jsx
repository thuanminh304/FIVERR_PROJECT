import React from "react";
import "./explore.scss";
export default function Explore() {
  return (
    <section className="explore">
      <div className="explore__content">
        <h2>Explore the marketplace</h2>
        <div className="explore__grid">
          <div className="explore__row  ">
            <div className="explore__item">
              <a href="#">
                <img src="images/graphics-design.d32a2f8.svg" alt />
                <div className="border-explore" />
                <p>Graphics &amp; Design</p>
              </a>
            </div>
            <div className="explore__item">
              <a href="#">
                <img src="images/online-marketing.74e221b.svg" alt />
                <div className="border-explore" />
                <p>Digital Marketing</p>
              </a>
            </div>
            <div className="explore__item">
              <a href="#">
                <img src="images/writing-translation.32ebe2e.svg" alt />
                <div className="border-explore" />
                <p>Writing &amp; Translation</p>
              </a>
            </div>
            <div className="explore__item">
              <a href="#">
                <img src="images/video-animation.f0d9d71.svg" alt />
                <div className="border-explore" />
                <p>Video &amp; Animation</p>
              </a>
            </div>
            <div className="explore__item">
              <a href="#">
                <img src="images/music-audio.320af20.svg" alt />
                <div className="border-explore" />
                <p>Music &amp; Audio</p>
              </a>
            </div>
            <div className="explore__item">
              <a href="#">
                <img src="images/programming.9362366.svg" alt />
                <div className="border-explore" />
                <p>Programming &amp; Tech</p>
              </a>
            </div>
            <div className="explore__item">
              <a href="#">
                <img src="images/business.bbdf319.svg" alt />
                <div className="border-explore" />
                <p>Business</p>
              </a>
            </div>
            <div className="explore__item">
              <a href="#">
                <img src="images/lifestyle.745b575.svg" alt />
                <div className="border-explore" />
                <p>Lifestyle</p>
              </a>
            </div>
            <div className="explore__item">
              <a href="#">
                <img src="images/data.718910f.svg" alt />
                <div className="border-explore" />
                <p>Data</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
