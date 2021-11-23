import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./headerNotLoginFixed.scss";
import { useDispatch, useSelector } from "react-redux";
import { actGetMainJobList } from "Modules/JobManagement/actions";
import { renderCategoriesHeader } from "components/render/render";
import { useHistory } from "react-router";
import { Button, Drawer, Input, Menu, Space } from "antd";
import { useState } from "react";
import configName from "setting/configNameTypeJob";
import { DribbbleOutlined, DollarOutlined } from "@ant-design/icons";
export default function HeaderNotLogin() {
  const { Search } = Input;
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetMainJobList());
  }, []);
  const onSearch = (value) => {
    setTimeout(() => {
      history.push(`/search/gigs/${value}`);
    }, 0);
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const { SubMenu } = Menu;

  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <header
      style={{
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <div id="header-fixed">
        <div id="header__content-fixed">
          <div className="header__icon-fixed">
            <Link to="/">
              <img src="/images/Fiverr_Logo_09.2020-fixed.svg" alt="Fiverr" />
            </Link>
          </div>
          <Search
            className="search-input-antd"
            placeholder="Find Services"
            onSearch={onSearch}
            enterButton="Search"
          />
          <nav className="header__nav">
            <a className="btn-dis" href="#business">
              Fiverr Business
            </a>
            <a className="btn-dis" href="#explore">
              Explore
            </a>

            <a className="btn-dis" href="#seller ">
              Become a Seller
            </a>
            <Link to="/login">Sign In</Link>
            <Link to="/join" className="btn-navbar-join">
              {" "}
              <button>Join</button>{" "}
            </Link>
          </nav>
        </div>
        <div className="header-fixed-reponsive">
          <div className="menu-hidden-left">
            <span onClick={showDrawer}>
              <i className="fa fa-bars"></i>
            </span>
            <Drawer
              closable={false}
              title={
                <Space>
                  <Link to="/join">Join Fiverr</Link>
                </Space>
              }
              placement="left"
              onClose={onClose}
              visible={visible}
            >
              <Menu
                className="menu-visible"
                onClick={handleClick}
                style={{ width: 256 }}
                mode="inline"
              >
                <Menu.Item key="1">
                  <Link to="/login">Sign In</Link>
                </Menu.Item>

                <SubMenu key="sub2" title="Browser Categories">
                  {mainJob?.map((maintype, idx) => {
                    const name = configName(maintype.name);
                    return (
                      <SubMenu title={maintype.name} key={maintype._id}>
                        {maintype.subTypeJobs.map((job, idx) => {
                          return (
                            <Menu.Item key={job._id}>
                              <Link to={`/categories/${name}/${job._id}`}>
                                {job.name}
                              </Link>
                            </Menu.Item>
                          );
                        })}
                      </SubMenu>
                    );
                  })}
                </SubMenu>
                <SubMenu key="sub3" title="Explore">
                  <Menu.Item key="2">Discover</Menu.Item>
                  <Menu.Item key="3">Guides</Menu.Item>
                  <Menu.Item key="4">Learn</Menu.Item>
                  <Menu.Item key="5">Logo Maker</Menu.Item>
                  <Menu.Item key="6">Community</Menu.Item>
                  <Menu.Item key="7">Podcost</Menu.Item>
                  <Menu.Item key="8">Blog</Menu.Item>
                </SubMenu>

                <Menu.Item key="11">
                  <Space direction="vertical"> </Space>
                </Menu.Item>
                <Menu.Item className="general" key="12">
                  General
                </Menu.Item>
                <SubMenu key="sub4" title="English" icon={<DribbbleOutlined />}>
                  <Menu.Item key="13">English</Menu.Item>
                  <Menu.Item key="14">Deutsch</Menu.Item>
                  <Menu.Item key="15">Espanol</Menu.Item>
                  <Menu.Item key="16">Francais</Menu.Item>
                  <Menu.Item key="17">Portugues</Menu.Item>
                  <Menu.Item key="18">Italiano</Menu.Item>
                  <Menu.Item key="19">Nederlands</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title="US$ USD" icon={<DollarOutlined />}>
                  <Menu.Item key="20">USD - US$</Menu.Item>
                  <Menu.Item key="21">EUR</Menu.Item>
                  <Menu.Item key="22">GBP</Menu.Item>
                  <Menu.Item key="23">AUD - A$</Menu.Item>
                  <Menu.Item key="24">CAD - CA$</Menu.Item>
                  <Menu.Item key="25">HKD - HK$</Menu.Item>
                  <Menu.Item key="26">SEK - SEK</Menu.Item>
                </SubMenu>
                <Menu.Item key="27">Open in App</Menu.Item>
              </Menu>
            </Drawer>
          </div>
          <div className="header-fixed-logo">
            <Link to="/">
              <img src="/images/Fiverr_Logo_09.2020-fixed.svg" alt="Fiverr" />
            </Link>
          </div>{" "}
          <Search
            className="search-input-antd"
            placeholder="Find Services"
            onSearch={onSearch}
            enterButton="Search"
          />
          <ul>
            <li className="li-signin">
              <Link to="/login" className="btn-navbar-join">
                Sign In
              </Link>
            </li>
            <li className="li-join">
              <Link to="/join" className="btn-navbar-join">
                Join
              </Link>
            </li>
          </ul>{" "}
        </div>
      </div>
      {/* render categories */}
      {renderCategoriesHeader(mainJob)}
    </header>
  );
}
