import React from "react";
import loader from 'assets/images/Loading/loading.gif';
import "./loader.scss"
export default function Loader() {
  return (
    <div className="container-loader">
      
      <div
        className="loadding-container"
        style={{ backgroundImage: `url(${loader})` }}
      ></div>
    </div>
  );
}
