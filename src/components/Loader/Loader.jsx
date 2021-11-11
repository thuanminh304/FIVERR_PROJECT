import React from "react";
import { Spin } from "antd";
import loader from 'assets/images/Loading/loading.gif';
import "./loader.scss"
export default function Loader() {
  return (
    <div className="container-loader">
      {/* <Spin key="11" className="spin-loader" />
      <Spin key="12" className="spin-loader" />
      <Spin key="13" className="spin-loader" /> */}
      <div
        className="loadding-container"
        style={{ backgroundImage: `url(${loader})` }}
      ></div>
    </div>
  );
}
