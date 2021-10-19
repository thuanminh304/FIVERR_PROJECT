import Withform from "hocs/withForm";
import React from "react";
import { Form, Input, Select, DatePicker } from "antd";
import { formValidConfig } from "setting/formValidationConfig";
const { Option } = Select;
const Formlayout = (props) => {
  const { name, placeHolderText, type, isLogin } = props.formData;
  if (name === "password" || name === "re-password") {
    if (!!isLogin) {
      return (
        <Form.Item
          name={name}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password type={type} placeholder={placeHolderText} />
        </Form.Item>
      );
    }
    return (
      <Form.Item name={name} rules={formValidConfig(name)} hasFeedback>
        <Input.Password type={type} placeholder={placeHolderText} />
      </Form.Item>
    );
  }
  if (name === "birthday") {
    return (
      <Form.Item name={name} rules={formValidConfig(name)}>
        <DatePicker format="YYYY-MM-DD"/>
      </Form.Item>
    );
  }
  if (name === "gender") {
    return (
      <Form.Item name={name} rules={formValidConfig(name)} hasFeedback>
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>
    );
  }
  if (name === "certification") {
    return (
      <>
        <Form.Item name={name} rules={formValidConfig(name)}>
          <Input type={type} placeholder={placeHolderText} />
        </Form.Item>
        <div className="certificationResult"></div>
      </>
    );
  }
  if (name === "skill") {
    return (
      <>
        <Form.Item name={name} rules={formValidConfig(name)}>
          <Input type={type} placeholder={placeHolderText} />
        </Form.Item>
        <div className="skillResult"></div>
      </>
    );
  }
  if (!!isLogin) {
    return (
      <Form.Item
        name={name}
        rules={[
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input type={type} placeholder={placeHolderText} />
      </Form.Item>
    );
  }
  return (
    <Form.Item name={name} rules={formValidConfig(name)} hasFeedback>
      <Input type={type} placeholder={placeHolderText} />
    </Form.Item>
  );
};

export default Withform(Formlayout);
