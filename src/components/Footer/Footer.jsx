import React, { useState } from "react";
import "./footer.scss";
import { Modal } from "antd";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <footer className=" m-t-10 border-top">
      <div className="footer__container ">
        <div className="footer__content row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-5">
          <div className="footer__box col ">
            <h6>Categories</h6>
            <div className="footer__item">
              <ul>
                <a href="# ">
                  <li>Graphics & Design</li>
                </a>
                <a href="# ">
                  <li>Digital Marketing</li>
                </a>
                <a href="# ">
                  <li>Writing & Translation</li>
                </a>
                <a href="# ">
                  <li>Video & Animation</li>
                </a>
                <a href="# ">
                  <li>Music & Audio</li>
                </a>
                <a href="# ">
                  <li>Programming & Tech</li>
                </a>
                <a href="# ">
                  <li>Data</li>
                </a>
                <a href="# ">
                  <li>Business</li>
                </a>
                <a href="# ">
                  <li>Lifestyle</li>
                </a>
                <a href="# ">
                  <li>Sitemap</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="footer__box col ">
            <h6>About</h6>
            <div className="footer__item">
              <ul>
                <a href="# ">
                  <li>Careers</li>
                </a>
                <a href="# ">
                  <li>Press & News</li>
                </a>
                <a href="# ">
                  <li>Partnerships</li>
                </a>
                <a href="# ">
                  <li>Privacy Policy</li>
                </a>
                <a href="# ">
                  <li>Terms of Service</li>
                </a>
                <a href="# ">
                  <li>Intellectual Property Claims</li>
                </a>
                <a href="# ">
                  <li>Investor Relations</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="footer__box col ">
            <h6>Support</h6>
            <div className="footer__item">
              <ul>
                <a href="# ">
                  <li>Help & Support</li>
                </a>
                <a href="# ">
                  <li>Trust & Safety</li>
                </a>
                <a href="# ">
                  <li>Selling on Fiverr</li>
                </a>
                <a href="# ">
                  <li>Buying on Fiverr</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="footer__box col ">
            <h6>Community</h6>
            <div className="footer__item">
              <ul>
                <a href="# ">
                  <li>Events</li>
                </a>
                <a href="# ">
                  <li>Blog</li>
                </a>
                <a href="# ">
                  <li>Forum</li>
                </a>
                <a href="# ">
                  <li>Community Standards</li>
                </a>
                <a href="# ">
                  <li>Podcast</li>
                </a>
                <a href="# ">
                  <li>Affiliates</li>
                </a>
                <a href="# ">
                  <li>Invite a Friend</li>
                </a>
                <a href="# ">
                  <li>Become a Selller</li>
                </a>
                <a href="# ">
                  <li>Fiverr Elevate</li>
                  <p>Exclusive Benefits</p>
                </a>
              </ul>
            </div>
          </div>
          <div className="footer__box col ">
            <h6>More From Fiverr</h6>
            <div className="footer__item">
              <ul>
                <a href="# ">
                  <li>Fiverr Business</li>
                </a>
                <a href="# ">
                  <li>Fiverr Pro</li>
                </a>
                <a href="# ">
                  <li>Fiverr Studios</li>
                </a>
                <a href="# ">
                  <li>Fiverr Logo Maker</li>
                </a>
                <a href="# ">
                  <li>Fiverr Guides</li>
                </a>
                <a href="# ">
                  <li>Get Inspired</li>
                </a>
                <a href="# ">
                  <li>ClearVoice</li>
                  <p>Content Marketing</p>
                </a>
                <a href="# ">
                  <li>AND CO</li>
                  <p>Invoice Software</p>
                </a>
                <a href="# ">
                  <li>Learn</li>
                  <p>Online Courses</p>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-mini-bottom">
          <div className="mini-left">
            <img
              src=" images/imagesHomeLoggedIn/1280px-Fiverr_logosvg.png"
              alt=""
            />
            <span> © Fiverr International Ltd. 2021</span>
          </div>
          <div className="mini-right">
            <ul className="mini-logo">
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-linkedin"></i>
              </li>
              <li>
                <i className="fa fa-pinterest"></i>
              </li>
              <li>
                <i className="fa fa-instagram"></i>
              </li>
            </ul>
            <ul className="mini-button">
              <li onClick={showModal}>
                <i className="fa fa-globe"></i>English
              </li>
              <Modal
                onOk={handleOk}
                onCancel={handleCancel}
                className="mini-modal"
                title="Choose a language"
                visible={isModalVisible}
                style={{ top: 20, maxWidth: 600, width: 400 }}
                footer={null}
              >
                <p>English</p>
                <p>Deutsch</p>
                <p>Espanol</p>
                <p>Francais</p>
                <p>Portugues</p>
                <p>Italiano</p>
                <p>Nederlands</p>
              </Modal>
              <li>$ USD</li>
              <li className="circle-human">
                <i className="fa fa-male"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
