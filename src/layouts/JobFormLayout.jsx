import Withjobform from "hocs/withJobForm";
import React from "react";
import { useSelector } from "react-redux";
import { Form, Input, Select, Switch } from "antd";
import { formValidConfig } from "setting/formValidationConfig";
const { Option } = Select;
const Jobformlayout = (props) => {
  const { jobTypes, formData } = props;
  const { name, placeHolderText, type } = formData;
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  if (type === "select") {
    if (name === "type") {
      return (
        <Form.Item name={name}>
          <Select>
            {mainJob?.map((type, idx) => {
              return (
                <Option key={idx} value={type._id}>
                  {type.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      );
    } else {
      return (
        <Form.Item name={name}>
          <Select>
            {mainJob[jobTypes]?.subTypeJobs.map((type, idx) => {
              return (
                <Option key={idx} value={type._id}>
                  {type.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      );
    }
  }
  if (type === "switch") {
    return (
      <Form.Item name={name} valuePropName="checked">
        <Switch size="small" />
      </Form.Item>
    );
  }
  return (
    <Form.Item name={name} rules={formValidConfig(name)}>
      <Input type={type} placeholder={placeHolderText} />
    </Form.Item>
  );
};

export default Withjobform(Jobformlayout);
