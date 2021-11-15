import React from "react";
import "./business.scss";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Business() {
  return (
    <section id="business" className="solution">
      <div className="solution__content">
        <div className="solution__left">
          <img src="images/fiverbusiness.png" alt="" />
          <h2>
            A business solution designed for <i>teams</i>
          </h2>
          <p>
            Ucpgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <ul>
            <li>
              <CheckCircleOutlined className="btn-checkcircle" />{" "}
              <span>
                Connect to freelancers with proven business experience
              </span>
            </li>
            <li>
              <CheckCircleOutlined className="btn-checkcircle" />{" "}
              <span>
                Get matched with the perfect talent by a customer success
                manager
              </span>
            </li>
            <li>
              <CheckCircleOutlined className="btn-checkcircle" />{" "}
              <span>
                Manage teamwork and boost productivity with one powerful
                workspace
              </span>
            </li>
          </ul>
          <button>
            <Link style={{ color: "white" }} to="/categories/business">
              Explore Fiverr Business
            </Link>
          </button>
        </div>
        <div className="solution__right ">
          <img
            className="img-fuild"
            src="images/business-desktop-870-x1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
