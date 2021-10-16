import { useHistory, Redirect, useLocation, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Login.scss";
import FormLayout from "layouts/FormLayout";
import { useDispatch } from "react-redux";
import { Form } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { actLoginUser } from "../module/actions";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const signInForm = [
    {
      name: "email",
      placeHolderText: "Email",
      type: "text",
    },
    {
      name: "password",
      placeHolderText: "Password",
      type: "password",
    },
  ];
  const JoinForm = [
    {
      name: "first_name",
      placeHolderText: "First Name",
      type: "text",
    },
    {
      name: "last_name",
      placeHolderText: "Last Name",
      type: "text",
    },
    {
      name: "email",
      placeHolderText: "Email",
      type: "text",
    },
    {
      name: "password",
      placeHolderText: "Password",
      type: "password",
    },
    {
      name: "re-password",
      placeHolderText: "Re-Password",
      type: "password",
    },
    {
      name: "phone",
      placeHolderText: "Phone Number",
      type: "text",
    },
    {
      name: "birthday",
      placeHolderText: "BirthDay",
      type: "text",
    },
    {
      name: "gender",
      placeHolderText: "Gender",
      type: "text",
    },
    {
      name: "certification",
      placeHolderText: "Certification",
      type: "text",
    },
    {
      name: "skill",
      placeHolderText: "Skill",
      type: "text",
    },
  ];
  const [formStructure, setFormStructure] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname;
    if (pathName === "/login") {
      setFormStructure(signInForm);
    } else if (pathName === "/join") {
      setFormStructure(JoinForm);
    }
  }, []);
  const renderForm = (Layout, formInfo) => {
    return formInfo.map((input, idx) => {
      return <Layout key={idx} formData={input} />;
    });
  };
  const onFinish = (values) => {
    dispatch(actLoginUser(values, history));
  };
  if (!formStructure) return "";
  return (
    <div id="signInt">
      <div className="signIn__content">
        <div className="sign-in__form">
          <section className="form__header">
            <h4>Sign In to Fiverr</h4>
          </section>
          <Form onFinish={onFinish} scrollToFirstError>
            {renderForm(FormLayout, formStructure)}
            <button className="form__submit-button" type="primary">
              <p>Continue</p>
            </button>
          </Form>
          <div className="remember-checkBox">
            <div className="checkBoxForm">
              <CheckOutlined />
            </div>
            <span className="rememberNote">Remember Me</span>
          </div>
        </div>
        <div className="formIndentify-Account">
          <span>Already a member?</span>
          <Link to="/join">
            <span className="indentify-btn">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
