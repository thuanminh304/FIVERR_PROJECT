import React, { useEffect } from "react";
import { actLogout } from "containers/shared/Auth/module/actions";
import { Menu, Dropdown, Input, Drawer, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./headerLoggedIn.scss";
import { renderAvatar, renderCategoriesHeader } from "components/render/render";
import { actGetMainJobList } from "Modules/JobManagement/actions";
import { useHistory } from "react-router";
import configName from "setting/configNameTypeJob";
import { useState } from "react";
import messageConfig from "components/Message/message";

export default function HeaderLoggedIn() {
  const history = useHistory();
  const { Search } = Input;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const logOut = () => {
    dispatch(actLogout());
    window.location.replace("/");
  };
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
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
  const { SubMenu } = Menu;

  const menu = (
    <Menu>
      {currentUser?.role === "CLIENT" ? (
        <Menu.Item key="1">
          <Link to={`/user/${currentUser?.email}`}>Profile</Link>
        </Menu.Item>
      ) : null}
      {currentUser?.role === "ADMIN" ? (
        <Menu.Item key="2">
          <Link to="/admin">Admin</Link>
        </Menu.Item>
      ) : null}

      <Menu.Item key="3">
        <p style={{ color: "green" }} onClick={logOut}>
          Logout
        </p>
      </Menu.Item>
    </Menu>
  );
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div
      id="header-loggedin"
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div id="header-fixed-loggedin">
        <div id="header__content-loggedin">
          <div className="header__icon-fixed">
            <Link to="/">
              <img
                src="/images/shared-img/Fiverr_Logo_09.2020-fixed.svg"
                alt="Fiverr"
              />
            </Link>
          </div>
          <Search
            className="search-input-antd-loggedin"
            placeholder="Find Services"
            onSearch={onSearch}
            enterButton="Search"
          />
          <div className="header__nav-fixed">
            <div className="relativeDot">
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomRight"
                arrow
              >
                {renderAvatar(null, currentUser)}
              </Dropdown>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="header-fixed-reponsive">
          <div className="menu-hidden-left">
            <span onClick={showDrawer}>
              <i className="fa fa-bars"></i>
            </span>
            <Drawer
              className="drawer-loggedin"
              closable={false}
              title={
                <Space>
                  <div className="relativeDot">
                    {renderAvatar(null, currentUser)}
                    <div className="dot"></div>
                  </div>
                  <span>{currentUser?.name}</span>
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
                <Menu.Item key="100">
                  <Link to="/">Home</Link>
                </Menu.Item>
                {currentUser?.role === "CLIENT" ? (
                  <Menu.Item key="1">
                    <Link to={`/user/${currentUser?.email}`}>Profile</Link>
                  </Menu.Item>
                ) : (
                  <Menu.Item key="28">
                    <Link to="/admin">Admin</Link>
                  </Menu.Item>
                )}

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

                <Menu.Item key="300">
                  <span style={{ color: "green" }} onClick={logOut}>
                    Logout
                  </span>
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
          <div className="header-fixed-logo">
            <Link to="/">
              <img
                src="/images/shared-img/Fiverr_Logo_09.2020-fixed.svg"
                alt="Fiverr"
              />
            </Link>
          </div>{" "}
          <Search
            className="search-input-antd"
            placeholder="Find Services"
            onSearch={onSearch}
            enterButton="Search"
          />
          <div className="relativeDot hidden-responsive">
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
              arrow
            >
              {renderAvatar(null, currentUser)}
            </Dropdown>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      {renderCategoriesHeader(mainJob, currentUser)}
    </div>
  );
}
