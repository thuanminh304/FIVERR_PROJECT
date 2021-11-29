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
import messageConfig from "components/Message/message";
export default function HeaderNotLogin() {
  const { Search } = Input;
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetMainJobList());
  }, []);
  const onSearch = (value) => {
    if (value !== "") {
      setTimeout(() => {
        messageConfig.success();

        history.push(`/search/gigs/${value}`);
      }, 0);
    }
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const { SubMenu } = Menu;

  
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
              <img
                src="/images/shared-img/Fiverr_Logo_09.2020-fixed.svg"
                alt="Fiverr"
              />
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
              </Menu>
            </Drawer>
          </div>
          <div className="header-fixed-logo">
            <Link to="/">
              <img src="/images/shared-img/Fiverr_Logo_09.2020-fixed.svg" alt="Fiverr" />
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
