import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./headerNotLoginFixed.scss";
import "./headerNotLogin.scss";
import { useDispatch, useSelector } from "react-redux";
import { actGetMainJobList } from "Modules/JobManagement/actions";
import { renderCategoriesHeader } from "components/render/render";
import { useHistory } from "react-router";
import { Input } from "antd";

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
  return (
    <header>
      <div className="header__content">
        <div className="header__icon navbar navbar-expand-md navbar-dark">
          <Link className="navbar-brand" to="/">
            <img
              src="https://qumracapital.com/wp-content/uploads/2017/12/fiverr-logo.png"
              alt="Fiverr"
            />
          </Link>
          <span>.</span>
        </div>
        <nav className="header__nav">
          <a className="btn-dis" href="# ">
            Fiverr Business
          </a>
          <a className="btn-dis" href="# ">
            Explore
          </a>
          <div className="dropdown">
            <a
              href="# "
              className="button-fixed"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-globe"></i>
              <span>English</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a href="# ">English</a>
              <a href="# ">Deutsch</a>
              <a href="# ">Espanol</a>
              <a href="# ">Francais</a>
              <a href="# ">Portugues</a>
              <a href="# ">Italiano</a>
              <a href="# ">Nederlands</a>
            </div>
          </div>
          <div className="dropdown">
            <a
              href="# "
              className="button-fixed"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span>$ USD</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-lastchild"
              aria-labelledby="dropdownMenuButton"
            >
              <ul>
                <li>
                  <a href="# ">United States Dollar(USD) - $</a>
                </li>
                <li>
                  <a href="# ">Euro(EUR) - €</a>
                </li>
                <li>
                  <a href="# ">British Pound (GBP) - £</a>
                </li>
                <li>
                  <a href="# ">Australian Dollar (AUD) - A$</a>
                </li>
                <li>
                  <a href="# ">Canadian Dollar (CAD) - C$</a>
                </li>
                <li>
                  <a href="# ">Israeli Shekel (ILS) - ₪</a>
                </li>
                <li>
                  <a href="# ">Brazilian Real (BRL) - R$</a>
                </li>
                <li>
                  <a href="# ">Hong Kong Dollar (HKD) - HK$</a>
                </li>
                <li>
                  <a href="# ">Swedish Krona (SEK) - kr</a>
                </li>
                <li>
                  <a href="# ">New Zealand Dollar (NZD) - NZ$</a>
                </li>
              </ul>
            </div>
          </div>
          <a className="btn-dis" href="# ">
            Become a Seller
          </a>
          <Link to="/login">Sign In</Link>
          <Link to="/join" className="btn-navbar-join">
            {" "}
            <button>Join</button>{" "}
          </Link>
        </nav>
      </div>
      {/*  */}
      <div>
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
              <a className="btn-dis" href="# ">
                Fiverr Business
              </a>
              <a className="btn-dis" href="# ">
                Explore
              </a>
              <div className="dropdown">
                <a
                  href="# "
                  className="button-fixed"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-globe"></i>
                  <span>English</span>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a href="# ">English</a>
                  <a href="# ">Deutsch</a>
                  <a href="# ">Espanol</a>
                  <a href="# ">Francais</a>
                  <a href="# ">Portugues</a>
                  <a href="# ">Italiano</a>
                  <a href="# ">Nederlands</a>
                </div>
              </div>
              <div className="dropdown">
                <a
                  href="# "
                  className="button-fixed"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>$ USD</span>
                </a>
                <div
                  style={{ transform: "translate3d(0px, 25px, 0px)" }}
                  className="dropdown-menu dropdown-menu-lastchild"
                  aria-labelledby="dropdownMenuButton"
                >
                  <ul>
                    <li>
                      <a href="# ">United States Dollar(USD) - $</a>
                    </li>
                    <li>
                      <a href="# ">Euro(EUR) - €</a>
                    </li>
                    <li>
                      <a href="# ">British Pound (GBP) - £</a>
                    </li>
                    <li>
                      <a href="# ">Australian Dollar (AUD) - A$</a>
                    </li>
                    <li>
                      <a href="# ">Canadian Dollar (CAD) - C$</a>
                    </li>
                    <li>
                      <a href="# ">Israeli Shekel (ILS) - ₪</a>
                    </li>
                    <li>
                      <a href="# ">Brazilian Real (BRL) - R$</a>
                    </li>
                    <li>
                      <a href="# ">Hong Kong Dollar (HKD) - HK$</a>
                    </li>
                    <li>
                      <a href="# ">Swedish Krona (SEK) - kr</a>
                    </li>
                    <li>
                      <a href="# ">New Zealand Dollar (NZD) - NZ$</a>
                    </li>
                  </ul>
                </div>
              </div>
              <a className="btn-dis" href="# ">
                Become a Seller
              </a>
              <Link to="/login">Sign In</Link>
              <Link to="/join" className="btn-navbar-join">
                {" "}
                <button>Join</button>{" "}
              </Link>
            </nav>
          </div>
        </div>
        {/* render categories */}
        {renderCategoriesHeader(mainJob)}
      </div>
    </header>
  );
}
