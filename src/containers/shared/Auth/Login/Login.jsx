import { useHistory, Redirect, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.scss";
import FormLayout from "layouts/FormLayout";
import moment from "moment";
import Popup from "../Popup/Popup";
import { Form } from "antd";
import {
  CheckOutlined,
  LoadingOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import {
  actChangeRememberUserLoginStatus,
  actLoginUser,
  actRegister,
} from "../module/actions";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const signInForm = [
    {
      name: "email",
      placeHolderText: "Email",
      type: "text",
      isLogin: true,
    },
    {
      name: "password",
      placeHolderText: "Password",
      type: "password",
      isLogin: true,
    },
  ];
  const JoinForm = [
    {
      name: "first_name",
      placeHolderText: "First Name",
      type: "text",
      isLogin: false,
    },
    {
      name: "last_name",
      placeHolderText: "Last Name",
      type: "text",
      isLogin: false,
    },
    {
      name: "email",
      placeHolderText: "Email",
      type: "text",
      isLogin: false,
    },
    {
      name: "password",
      placeHolderText: "Password",
      type: "password",
      isLogin: false,
    },
    {
      name: "re-password",
      placeHolderText: "Re-Password",
      type: "password",
      isLogin: false,
    },
    {
      name: "phone",
      placeHolderText: "Phone Number",
      type: "text",
      isLogin: false,
    },
    {
      name: "birthday",
      placeHolderText: "BirthDay",
      type: "text",
      isLogin: false,
    },
    {
      name: "gender",
      placeHolderText: "Gender",
      type: "text",
      isLogin: false,
    },
    {
      name: "certification",
      placeHolderText: "Certification (Ex: DIB, PYNOW, ...)",
      type: "text",
      isLogin: false,
    },
    {
      name: "skill",
      placeHolderText: "Skill (Ex: PHP, Java, Javascript, Web design, ...)",
      type: "text",
      isLogin: false,
    },
  ];  
  const [formStructure, setFormStructure] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [isShowPopup, setShowPopup] = useState(false);
  const [isShowPopupContent, setPopupContent] = useState(false);
  const location = useLocation();
  const { loading, note, currentUser, isRegisterSuccess, isError, isRemem } =
    useSelector((state) => state.AuthReducer);
  const formRef = React.createRef();
  const certification = [];
  const skill = [];
  useEffect(() => {
    const pathName = location.pathname;
    if (!!currentUser?._id) {
      history.push("/");
    }
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
    if (!!isLogin) {
      dispatch(actLoginUser(values));
    } else {
      const data = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone: "",
        skill: [],
        certification: [],
        birthday: "",
        gender: true,
      };
      for (let key in data) {
        if (key === "skill") {
          data[key] = skill;
          continue;
        }
        if (key === "certification") {
          data[key] = certification;
          continue;
        }
        if (key === "birthday") {
          data[key] = moment(values[key]).format("YYYY-MM-DD");
          continue;
        }
        if (key === "gender") {
          if (values == "male") {
            data[key] = true;
          } else {
            data[key] = false;
          }
          continue;
        }
        data[key] = values[key];
      }
      let setErrorForm = false;
      if(skill.length === 0) {
        setErrorForm = true;
        checkError('skill');
      }
      else{
        setErrorForm = false;
      }
      if(!setErrorForm){
        dispatch(actRegister(data));
      }
    }
  };
  const checkError = (key) => {
    const skillField = document.querySelector('.ant-form-item:nth-of-type(11)');
    const skillFieldControl = skillField.querySelector('.ant-form-item-control');
    const skillFieldChild = skillField.querySelector('.ant-form-item-control-input');
    const noteIcon = document.createElement('span');
    noteIcon.classList.add('ant-form-item-children-icon');
    const error = '<span role="img" aria-label="close-circle" class="anticon anticon-close-circle"><svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" /></svg></span>';
    noteIcon.innerHTML = error;
    const errorNote = '<div class="ant-form-item-explain ant-form-item-explain-error"><div role="alert">Please input your skill!</div></div>';
    const noteMessage = document.createElement('span');
    noteMessage.innerHTML = errorNote;
    if(key === "skill"){
      if(skill.length === 0){
        if(!skillField.classList.contains('ant-form-item-has-error')){
          skillField.classList.remove('ant-form-item-has-success');
          skillField.classList.add('ant-form-item-has-feedback');
          skillField.classList.add('ant-form-item-has-error');
          if(skillFieldChild.children.length < 2){
            skillFieldChild.appendChild(noteIcon);
          }    
          if(skillFieldControl.children.length <2){
            skillFieldControl.appendChild(noteMessage);
          }
        }
      }
      else{
        skillField.classList.remove('ant-form-item-has-feedback');
        skillField.classList.remove('ant-form-item-has-error');
        if(skillFieldChild.children.length > 1){
          skillFieldChild.removeChild(skillFieldChild.lastChild);
        }
        if(skillFieldControl.children.length > 1){
          skillFieldControl.removeChild(skillFieldControl.lastChild);
        }
        
      }
    }
  }
  const changeForm = () => {
    if (!isRegisterSuccess) {
      formRef.current.resetFields();
    }
    if (!!isLogin) {
      setFormStructure(JoinForm);
      setIsLogin(false);
    } else {
      setFormStructure(signInForm);
      setIsLogin(true);
    }
  };
  const onFielsChange = (fielsChange) => {
    const field = fielsChange[0].name;
    if (field == "certification") {
      const value = fielsChange[0].value;
      const findIndex = value.search(",");
      if (findIndex !== -1) {
        certification.push(value.replace(",", ""));
        let result = renderItem(certification);
        document.querySelector(".certificationResult").innerHTML = result
          .toString()
          .replaceAll(",", "");
        formRef.current.setFieldsValue({ certification: "" });
      }
    }
    if (field == "skill") {
      const value = fielsChange[0].value;
      const findIndex = value.search(",");
      if (findIndex !== -1) {
        skill.push(value.replace(",", ""));
        let result = renderItem(skill);
        checkError('skill');
        document.querySelector(".skillResult").innerHTML = result
          .toString()
          .replaceAll(",", "");
        formRef.current.setFieldsValue({ skill: "" });
      }
    }
  };
  const resultConfig = (value, init = 0) => {
    return `<span data-init=${init} class="${
      "field" + randomClass()
    }">${value}<i class="fa fa-times"></i></span>`;
  };
  const renderItem = (lists) => {
    const result = lists.map((item, idx) => {
      return resultConfig(item, idx);
    });
    return result;
  };
  const handleFocusOut = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    if(value !== ''){
      if(name === 'certification'){
        certification.push(value);
        let result = renderItem(certification);
          document.querySelector(".certificationResult").innerHTML = result
            .toString()
            .replaceAll(",", "");
          formRef.current.setFieldsValue({ certification: "" });
      }
      if(name === 'skill'){
        skill.push(value);
        let result = renderItem(skill);
          document.querySelector(".skillResult").innerHTML = result
            .toString()
            .replaceAll(",", "");
          formRef.current.setFieldsValue({ skill: "" });
          checkError('skill');
      }
    }
  }
  const randomClass = () => {
    const number = Math.floor(Math.random() * 3) + 1;
    return number;
  };
  const onValuesChange = (changedValues) => {};
  const changeRememberUserLogin = (e) => {
    const checkBlock = e.target.closest(".checkBoxForm");
    const rememberText = e.target.closest(".rememberNote");
    if (!!checkBlock || !!rememberText) {
      dispatch(actChangeRememberUserLoginStatus());
    }
  };
  const handleClickTab = (event) => {
    const certificationField = event.target.closest(
      ".certificationResult span"
    );
    const skillField = event.target.closest(".skillResult span");
    if (!!certificationField) {
      const init = certificationField.dataset.init;
      certification.splice(init, 1);
      let result = renderItem(certification);
      document.querySelector(".certificationResult").innerHTML = result
        .toString()
        .replaceAll(",", "");
    }
    if (!!skillField) {
      const init = skillField.dataset.init;
      skill.splice(init, 1);
      let result = renderItem(skill);
      document.querySelector(".skillResult").innerHTML = result
        .toString()
        .replaceAll(",", "");
    }
  };
  useEffect(() => {
    if (note !== "") {
      setShowPopup(true);
      setTimeout(() => {
        setPopupContent(true);
      }, 20);
      showPopup();
    }
  }, [note]);
  const showPopup = () => {
    setTimeout(() => {
      setPopupContent(false);
    }, 1500);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
    if (!isError) {
      if (!!isLogin) {
        setTimeout(() => {
          history.push("/");
        }, 2000);
        return;
      } else {
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    }
  };
  return (
    <div id="signInt">
      <div className="signIn__content">
        <div className="sign-in__form">
          <section className="form__header">
            <h4>{isLogin ? "Sign In to Fiverr" : "Join Fiverr"}</h4>
          </section>
          <Form
            onFinish={onFinish}
            scrollToFirstError
            ref={formRef}
            onFieldsChange={onFielsChange}
            onValuesChange={onValuesChange}
            onClick={handleClickTab}
            onBlur = {handleFocusOut}
          >
            {renderForm(FormLayout, formStructure)}
            <button className="form__submit-button" type="primary">
              <p>{loading ? <LoadingOutlined /> : "Continue"}</p>
            </button>
          </Form>
          {!isLogin ? (
            ""
          ) : (
            <div
              className="remember-checkBox"
              onClick={changeRememberUserLogin}
            >
              <div className={"checkBoxForm " + (isRemem ? "" : "noShow")}>
                <CheckOutlined />
              </div>
              <span className="rememberNote">Remember Me</span>
            </div>
          )}
        </div>
        {isRegisterSuccess ? (
          ""
        ) : (
          <div className="formIndentify-Account">
            <span>{!isLogin ? "Already a member?" : "Not a member yet?"}</span>
            <span className="indentify-btn" onClick={changeForm}>
              {!isLogin ? "Sign In" : "Join now"}
            </span>
          </div>
        )}
      </div>
      {isShowPopup ? (
        <Popup note={note} isShowPopupContent={isShowPopupContent} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
