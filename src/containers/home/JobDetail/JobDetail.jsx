import React, { useState, useEffect } from "react";
import { RightOutlined, StarFilled, MessageOutlined } from "@ant-design/icons";
import "./JobDetail.scss";
import Comment from "./Comment/Comment";
import { Link } from "react-router-dom";
const Jobdetail = () => {
  const [statusPos, setStatusPos] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const content = document.querySelector(".jobdetail");
    const footer = document.querySelector("footer");
    const bookingBox = document.querySelector(".jobDetail__jobPrice");
    const windowY = window.scrollY;
    if (windowY >= content.offsetTop + 65 && windowY < footer.offsetTop - 590) {
      setStatusPos("fix");
      bookingBox.style.transform = `translate3d(-50%, -200px, 0)`;
    } else if (windowY >= footer.offsetTop - 590) {
      setStatusPos("notFix");
      bookingBox.style.transform = `translate3d(0, ${
        footer.offsetTop - 793
      }px, 0)`;
    } else {
      setStatusPos("");
      bookingBox.style.transform = "";
    }
  };
  return (
    <div className="jobdetail">
      <div className="jobdetail__content row">
        <div className="jobDetail__item jobDetail__info col-6">
          <div className="categories-link">
            <span>
              <Link to="...">Graphics Design</Link>
            </span>
            <RightOutlined />
            <span>
              <Link to="...">Logo Design</Link>
            </span>
          </div>
          <div className="jobDetail__infoMain">
            <div className="info__title">
              <h1>I will design 3 flat minimalist logo design</h1>
            </div>
            <div className="info__container">
              <div className="info__userCreate">
                <div className="userCreate__avatar">
                  <h4>N</h4>
                </div>
                <div className="userCreate__name">
                  <h4>Vo Nhat Nam</h4>
                </div>
              </div>
              <div className="info__review">
                <div className="info__rating">
                  <span>5</span>
                  <StarFilled />
                </div>
                <div className="info__reviewQty">
                  <a href="#review">
                    <span>150</span>
                    <MessageOutlined />
                  </a>
                </div>
              </div>
            </div>

            <div className="jobDetail__infoImage">
              <img
                src="https://fiverr.cybersoft.edu.vn/public/images/job/1636693565476_OIP.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="jobDetail__item jobDetail__book col-6">
          <div className={"jobDetail__jobPrice " + statusPos}>
            <div className="jobPrice__title">Service Package</div>
            <div className="jobPrice__listService jobPrice__item">
              <span>Pro Service</span>
              <span>Local Seller</span>
              <span>Online Seller</span>
            </div>
            <div className="jobPrice__price jobPrice__item">
              <span>Full Package Price:</span>
              <span>US$150</span>
            </div>
            <p className="jobPrice__slogan jobPrice__item">
              {`You will get a professional custom ${"graphic design"} suitable for your project`}
            </p>
            <div className="jobPrice__booking jobPrice__item">
              <button className="bookingBtn">Confirm & Pay</button>
            </div>
            <div className="jobPrice__contact jobPrice__item">
              <button className="bookingBtn">
                <a href="mailto:someone@yoursite.com?subject=Offer: I will ....%20News&body=Dear Sir/Madam,%0D%0AYour project are interesting. I want to discuss with you about ....">
                  Contact Seller via Email
                </a>
              </button>
            </div>
          </div>
        </div>
        <div id="review" className="jobDetail__item jobDetail__comment col-6">
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Jobdetail;
