import Withform from "hocs/withForm";
import React from "react";
import { Form, Input, Select, DatePicker } from "antd";
// import "containers/shared/Auth/Login/Login.scss";
const { Option } = Select;
const Formlayout = (props) => {
  const { name, placeHolderText, type } = props.formData;
  if (name === "password" || name === "re-password") {
    return (
      <Form.Item name={name}>
        <Input.Password type={type} placeholder={placeHolderText} />
      </Form.Item>
    );
  }
  if (name === "birthday") {
    return (
      <Form.Item name={name}>
        <DatePicker />
      </Form.Item>
    );
  }
  if (name === "gender") {
    return (
      <Form.Item name={name}>
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
    );
  }
  return (
    <>
      <Form.Item name={name}>
        <Input type={type} placeholder={placeHolderText} />
      </Form.Item>
    </>
  );
};

export default Withform(Formlayout);
