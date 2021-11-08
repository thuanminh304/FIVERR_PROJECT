import React from "react";
import { Form } from "antd";
import FormLayout from "layouts/FormLayout";
import "./Admininfosetting.scss";
const Admininfosetting = () => {
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
  const renderForm = (Layout, formInfo) => {
    return formInfo.map((input, idx) => {
      if (input.name == "name") {
        return (
          <div className="formSetting-item col-12">
            <div className="itemInput nameField">
              <div className="item-label">
                {input.placeHolderText}
              </div>
              <Layout key={idx} formData={input} />
            </div>
          </div>
        );
      }
      return (
        <div className="formSetting-item col-6">
          <div className="itemInput">
              <div className="item-label">
                {input.placeHolderText}
              </div>
              <Layout key={idx} formData={input} />
            </div>
        </div>
      );
    });
  };
  return (
    <div className="adminInfo-setting">
      <div className="adminInfo-settingContent">
        <div className="adminInfo-settingTitle">Setting</div>
        <div className="adminInfo-settingMain">
          <Form
          // onFinish={onFinish}
          // ref={formRef}
          // onFieldsChange={onFielsChange}
          // onValuesChange={onValuesChange}
          // onClick={handleClickTab}
          // onBlur = {handleFocusOut}
          >
            <div className="formSetting row">
              {renderForm(FormLayout, userUpdateForm)}
            </div>
            <div className="formSetting__button">
              <button id="infoSettingUpdate">Update</button>
              <button id="infoSettingGoBack">Back</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Admininfosetting;
