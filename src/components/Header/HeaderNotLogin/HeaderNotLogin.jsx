import React from "react";
import { Link } from "react-router-dom";
import "./headerNotLogin.scss";

export default function HeaderNotLogin() {
  return (
    <header className="container" >
      <div className="header__content">
      <div className="header__icon navbar navbar-expand-md navbar-dark">
        <a className="navbar-brand" href="/">
          <img
            src="https://qumracapital.com/wp-content/uploads/2017/12/fiverr-logo.png"
            alt="Fiverr"
          />
        </a>
        <span>.</span>
      </div>
      <nav className="header__nav">
        <a className="btn-dis" href="/">
          Fiverr Business
        </a>
        <a className="btn-dis" href="/">
          Explore
        </a>
        <div className="dropdown">
          <a
            className="button-fixed"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <a href="/">
              <i className="fa fa-globe"></i>
              <span>English</span>
            </a>{" "}
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a href="/">English</a>
            <a href="/">Deutsch</a>
            <a href="/">Espanol</a>
            <a href="/">Francais</a>
            <a href="/">Portugues</a>
            <a href="/">Italiano</a>
            <a href="/">Nederlands</a>
          </div>
        </div>
        <div className="dropdown">
          <a href=""
            className="button-fixed"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <a href="#">
              <span>$ USD</span>
            </a>
          </a>
          <div
            className="dropdown-menu dropdown-menu-lastchild"
            aria-labelledby="dropdownMenuButton"
          >
            <a href="/">United States Dollar(USD) - $</a>
            <a href="/">Euro(EUR) - €</a>
            <a href="/">British Pound (GBP) - £</a>
            <a href="/">Australian Dollar (AUD) - A$</a>
            <a href="/">Canadian Dollar (CAD) - C$</a>
            <a href="/">Israeli Shekel (ILS) - ₪</a>
            <a href="/">Brazilian Real (BRL) - R$</a>
            <a href="/">Hong Kong Dollar (HKD) - HK$</a>
            <a href="/">Swedish Krona (SEK) - kr</a>
            <a href="/">New Zealand Dollar (NZD) - NZ$</a>
          </div>
        </div>
        <a className="btn-dis" href="#">
          Become a Seller
        </a>
        <Link to="/login">Sign In</Link>
        <Link to="/join" className="btn-navbar-join">
          {" "}
          <button>Join</button>{" "}
        </Link>
      </nav>
      </div>
    </header>
  );
}
