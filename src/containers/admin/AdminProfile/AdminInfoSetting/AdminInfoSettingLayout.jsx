import React, { useEffect } from "react";
import { Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
import FormLayout from "layouts/FormLayout";
import {CloseCircleOutlined} from '@ant-design/icons';
import "./Admininfosetting.scss";
import moment from "moment";
import { actUpdateProfile } from "containers/shared/Auth/module/actions";
const Admininfosetting = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const initialValue = {
    name: currentUser.name,
    email: currentUser.email,
    phone: currentUser.phone,
    birthday: moment(currentUser.birthday),
    gender: currentUser.gender,
  };
  const certification = [...currentUser.certification];
  const skill = [...currentUser.skill];
  const formRef = React.createRef();
  const userUpdateForm = [
    {
      name: "name",
      placeHolderText: "Name",
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
      name: "phone",
      placeHolderText: "Phone Number",
      type: "text",
      isLogin: false,
    },
    {
      name: "birthday",
      placeHolderText: "Birthday",
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
      placeHolderText: "Certification",
      type: "text",
      isLogin: false,
    },
    {
      name: "skill",
      placeHolderText: "Skill",
      type: "text",
      isLogin: false,
    },
  ];
  const onFinish = (values) => {
    const birthday = moment(values.birthday).format('YYYY-MM-DD');
    const data = {...values, certification: certification, skill: skill, birthday:birthday};
    dispatch(actUpdateProfile(currentUser._id,data));
  }
  const renderForm = (Layout, formInfo) => {
    return formInfo.map((input, idx) => {
      if (input.name === "name") {
        return (
          <div key={idx} className="formSetting-item col-12">
            <div className="itemInput nameField">
              <div className="item-label">{input.placeHolderText}</div>
              <Layout key={idx} formData={input} />
            </div>
          </div>
        );
      }
      return (
        <div key={idx} className="formSetting-item col-12 col-lg-6">
          <div className="itemInput">
            <div className="item-label">{input.placeHolderText}</div>
            <Layout key={idx} formData={input} />
          </div>
        </div>
      );
    });
  };
  const onFielsChange = (fielsChange) => {
    const field = fielsChange[0].name[0];
    if (field === "certification") {
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
    if (field === "skill") {
      const value = fielsChange[0].value;
      const findIndex = value.search(",");
      if (findIndex !== -1) {
        skill.push(value.replace(",", ""));
        let result = renderItem(skill);
        document.querySelector(".skillResult").innerHTML = result
          .toString()
          .replaceAll(",", "");
        formRef.current.setFieldsValue({ skill: "" });
      }
    }
  };
  const resultConfig = (value, init = 0) => {
    return `<span data-init=${init} class="field">${value}<i class="fa fa-times"></i></span>`;
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
    if (value !== "") {
      if (name === "certification") {
        certification.push(value);
        let result = renderItem(certification);
        document.querySelector(".certificationResult").innerHTML = result
          .toString()
          .replaceAll(",", "");
        formRef.current.setFieldsValue({ certification: "" });
      }
      if (name === "skill") {
        skill.push(value);
        let result = renderItem(skill);
        document.querySelector(".skillResult").innerHTML = result
          .toString()
          .replaceAll(",", "");
        formRef.current.setFieldsValue({ skill: "" });
      }
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
    formRef.current.setFieldsValue(initialValue);
    let result = renderItem(certification);
    document.querySelector(".certificationResult").innerHTML = result
      .toString()
      .replaceAll(",", "");
    result = renderItem(skill);
    document.querySelector(".skillResult").innerHTML = result
      .toString()
      .replaceAll(",", "");
  }, []);
  return (
    <div className="adminInfo-setting">
      <div className="adminInfo-settingContent">
        <div className="adminInfo-settingTitle">Setting <CloseCircleOutlined /></div>
        <div className="adminInfo-settingMain">
          <Form
            onFinish={onFinish}
            ref={formRef}
            onFieldsChange={onFielsChange}
            // onValuesChange={onValuesChange}
            initialValues={initialValue}
            onClick={handleClickTab}
            onBlur={handleFocusOut}
          >
            <div className="formSetting row">
              {renderForm(FormLayout, userUpdateForm)}
            </div>
            <div className="formSetting__button">
              <button id="infoSettingUpdate">Update</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Admininfosetting;
