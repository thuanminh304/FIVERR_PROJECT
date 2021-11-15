import React, { useEffect } from "react";
import { actLogout } from "containers/shared/Auth/module/actions";
import { Menu, Dropdown, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./headerLoggedIn.scss";
import { renderAvatar, renderCategoriesHeader } from "components/render/render";
import { actGetMainJobList } from "Modules/JobManagement/actions";
import { useHistory } from "react-router";

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
    setTimeout(() => {
      history.push(`/search/gigs/${value}`);
    }, 0);
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to={`/user/${currentUser?.email}`}>Profile</Link>
      </Menu.Item>
      {currentUser?.role === "ADMIN" ? (
        <Menu.Item key="2">
          <Link to="/admin">Trang Admin</Link>
        </Menu.Item>
      ) : null}

      <Menu.Item key="3">
        <p style={{ color: "green" }} onClick={logOut}>
          Logout
        </p>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div id="header-fixed-loggedin">
        <div id="header__content-loggedin">
          <div className="header__icon-fixed">
            <Link to="/">
              <img src="/images/Fiverr_Logo_09.2020-fixed.svg" alt="Fiverr" />
            </Link>
          </div>
          <Search
            className="search-input-antd-loggedin"
            placeholder="Find Services"
            onSearch={onSearch}
            enterButton="Search"
          />
          <div className="header__nav-fixed">
            <a className="btn-dis-fixed btn-dis-fixed-pro" href="# ">
              Fiverr Pro
            </a>
            <a className="btn-dis-fixed" href="# ">
              Explore
            </a>

            <a className="btn-dis-fixed" href="# ">
              Message
            </a>
            <a href="# ">Lists</a>
            <a href="# ">Orders</a>

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
      </div>
      {renderCategoriesHeader(mainJob, currentUser)}
    </div>
  );
}
