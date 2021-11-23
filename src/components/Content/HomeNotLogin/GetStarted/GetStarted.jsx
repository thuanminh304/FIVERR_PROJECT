import React from "react";
import { Link } from "react-router-dom";
import "./getStarted.scss";
export default function GetStarted() {
  return (
    <section id="seller" className="fiverrJoin py-5">
      <div className="fiverrJoin__content">
        <div className="fiverrJoin__text">
          <h2>
            <span>
              Find the
              <i> talent </i>
              needed to get your business <i>growing</i>.
            </span>
          </h2>
          <button className="fiverrJoin__btn  ">
            <Link to="/login" style={{ color: "white" }}>
              Get started
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
