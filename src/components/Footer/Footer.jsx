import React, { useState } from "react";
import "./footer.scss";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import configName from "setting/configNameTypeJob";
import { Menu } from "antd";
const Footer = () => {
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { SubMenu } = Menu;

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
    <footer className=" border-top">
      <div className="footer__container ">
        <div className="footer__content row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-5">
          <div className="footer__box col ">
            <h6>Categories</h6>
            <div className="footer__item">
              <ul>
                {mainJob?.map((maintype) => {
                  let name = configName(maintype.name);
                  return (
                    <Link key={maintype._id} to={`/categories/${name}`}>
                      <li>{maintype.name}</li>
                    </Link>
                  );
                })}
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
        <div className="footer-responsive">
          <Menu className="menu-visible" mode="inline">
            <SubMenu key="sub1" title="Categories">
              {mainJob?.map((maintype, idx) => {
                const name = configName(maintype.name);
                return (
                  <Menu.Item key={maintype._id}>
                    <Link to={`/categories/${name}`}>{maintype.name}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
            <SubMenu title="About" key="sub2">
              <Menu.Item key="1">Careers</Menu.Item>
              <Menu.Item key="2">Press & News</Menu.Item>

              <Menu.Item key="3">Partnerships</Menu.Item>

              <Menu.Item key="4">Privacy Policy</Menu.Item>

              <Menu.Item key="5">Terms of Service</Menu.Item>

              <Menu.Item key="6">Intellectual Property Claims</Menu.Item>

              <Menu.Item key="7">Investor Relations</Menu.Item>
            </SubMenu>
            <SubMenu title="Support" key="sub3">
              <Menu.Item key="8">Help & Support</Menu.Item>
              <Menu.Item key="9">Trust & Safety</Menu.Item>

              <Menu.Item key="10">Selling on Fiverr</Menu.Item>

              <Menu.Item key="11">Buying on Fiverr</Menu.Item>
            </SubMenu>
            <SubMenu title="Community" key="sub4">
              <Menu.Item key="12">Events</Menu.Item>
              <Menu.Item key="13">Blog</Menu.Item>

              <Menu.Item key="14">Forum</Menu.Item>

              <Menu.Item key="15">Podcast</Menu.Item>
            </SubMenu>
            <SubMenu title="More From Fiverr" key="sub5">
              <Menu.Item key="16">Fiverr Business</Menu.Item>
              <Menu.Item key="17">Fiverr Pro</Menu.Item>

              <Menu.Item key="18">Fiverr Studio</Menu.Item>

              <Menu.Item key="19">Fiverr Guides</Menu.Item>
            </SubMenu>
          </Menu>
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
