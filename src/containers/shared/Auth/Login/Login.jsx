import { useHistory, Redirect, useLocation } from "react-router-dom";
import React, { useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import "./Login.scss";
import FormLayout from "layouts/FormLayout";
import { Form } from "antd";
import {CheckOutlined, LoadingOutlined} from '@ant-design/icons';
import { actChangeRememberUserLoginStatus, actLoginUser } from "../module/actions";
const Login = () => {
  const history = useHistory();
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
  const  [isLogin, setIsLogin] = useState(true);
  const location = useLocation();

  const dispatch = useDispatch();
  
  const {loading, note, currentUser, isRemem} = useSelector(state => state.AuthReducer);
  
  useEffect(() => {
    const pathName = location.pathname;
    if (pathName === "/login") {
      setFormStructure(signInForm);
      setIsLogin(true);
    } else if (pathName === "/join") {
      setFormStructure(JoinForm);
      setIsLogin(false);
    }
  }, [location.pathname]);
  
  const renderForm = (Layout, formInfo) => {
    return formInfo.map((input, idx) => {
      return <Layout key={idx} formData={input} />;
    });
  };
  const onFinish = (values) => {
    if(!!isLogin){
      dispatch(actLoginUser(values));
    }
    // console.log("Received values of form: ", values);
  };
  const onValuesChange = (value,allValues) => {
    console.log();
  };
  const onFieldChange = (changeField) => {
    // console.log(changeField[0].name[0]);
  };
  const changeForm = () => {
    if(!!isLogin){
      setFormStructure(JoinForm);
      setIsLogin(false);
    }
    else{
      setFormStructure(signInForm);
      setIsLogin(true);
    };
  };
  const changeRememberUserLogin = (e) => {
    const checkBlock = e.target.closest('.checkBoxForm');
    const rememberText = e.target.closest('.rememberNote');
    if(!!checkBlock || !!rememberText) {
      dispatch(actChangeRememberUserLoginStatus());
    }
  }
  // if (!formStructure) return "";
  if(!!currentUser?._id) return (<Redirect to="/"/>);
  return (
    <div id="signInt">
      <div className="signIn__content">
        <div className="sign-in__form">
          <section className="form__header">
            <h4>{isLogin?"Sign In to Fiverr": "Join Fiverr"}</h4>
          </section>
          <Form onFinish={onFinish} scrollToFirstError onValuesChange={onValuesChange} onFieldsChange={onFieldChange}>
            {renderForm(FormLayout, formStructure)}
            <button className="form__submit-button" type="primary">
              <p>{loading?<LoadingOutlined/>:"Continue"}</p>
            </button>
          </Form>
            {!isLogin?"":
            <div className="remember-checkBox" onClick={changeRememberUserLogin}>
              <div className={"checkBoxForm " + (isRemem?"":"noShow")}>
                <CheckOutlined />
              </div>
              <span className="rememberNote">Remember Me</span>
            </div>
            }
        </div>
        <div className="formIndentify-Account">
        <span>{!isLogin?"Already a member?":"Not a member yet?"}</span>
        <span className="indentify-btn" onClick = {changeForm}>{!isLogin?"Sign In":"Join now"}</span>
      </div>
      </div>
    </div>
  );
};

export default Login;
