import React from "react";
import { Spin } from "antd";
import "./loader.scss"
export default function Loader() {
  return (
    <div className="container-loader">
      <Spin className="spin-loader" />
      <Spin className="spin-loader" />
      <Spin className="spin-loader" />

    </div>
  );
}
