import React, { useState } from "react";
import { Form, Input, InputNumber, Switch, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { useFormik } from "formik";
import jobApi from "apis/jobApi";
import { useHistory } from "react-router";
import { actCreateJobByUser } from "./modules/action";
const RenderOverview = (props) => {
  const { mainJob } = useSelector((state) => state.JobManagementReducer);

  const [state, setState] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [current, setCurrent] = props.currentStep;
  const formik = useFormik({
    initialValues: {
      name: "",
      rating: 10,
      price: 0,
      proServices: false,
      localSellers: false,
      onlineSellers: false,
      deliveryTime: false,
      type: "",
      subType: "",
    },
    onSubmit: (value) => {
      dispatch(actCreateJobByUser(value));
      setTimeout(() => {
        setCurrent(current + 1);
      }, 0);
    },
  });

  async function handleChangeMainJob(value) {
    formik.setFieldValue("type", value);

    try {
      const data = await jobApi.getDetailTypeMainjob(value);
      setState(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleChangeSubJob = (value) => {
    formik.setFieldValue("subType", value);
  };
  const handleChangePrice = (value) => {
    formik.setFieldValue("price", value);
  };
  const handleChangeRate = (value) => {
    formik.setFieldValue("rating", value);
  };
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    <Form onSubmitCapture={formik.handleSubmit} className="render-overview">
      <Form.Item className="item-name" label="Name">
        <Input
          defaultValue="PROJECT FIVERR"
          placeholder="Name"
          name="name"
          type="text"
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item className="item-select" label="CATEGORY">
        <Select
          name="type"
          options={mainJob?.map((mainjob, idx) => ({
            label: mainjob.name,
            value: mainjob._id,
          }))}
          onChange={handleChangeMainJob}
          placeholder="SELECT A CATEGORY"
        />
        <Select
          name="subType"
          options={state?.subTypeJobs.map((subjob, idx) => ({
            label: subjob.name,
            value: subjob._id,
          }))}
          onChange={handleChangeSubJob}
          placeholder="SELECT A SUBCATEGORY"
        />
      </Form.Item>
      <Form.Item label="Price">
        <InputNumber
          min={0}
          name="price"
          step={5}
          defaultValue={0}
          onChange={handleChangePrice}
        />
      </Form.Item>
      <Form.Item label="Rate">
        <InputNumber
          min={0}
          max={10}
          name="rating"
          step={0.1}
          defaultValue={10}
          onChange={handleChangeRate}
        />
      </Form.Item>
      <Form.Item className="item-status" label="Status">
        <div>
          <label htmlFor="proServices">Pro Services</label>
          <Switch
            name="proServices"
            onChange={handleChangeSwitch("proServices")}
          />
        </div>
        <div>
          <label htmlFor="localSellers">Local Sellers</label>
          <Switch
            name="localSellers"
            onChange={handleChangeSwitch("localSellers")}
          />
        </div>

        <div>
          <label htmlFor="onlineSellers">Online Sellers</label>
          <Switch
            name="onlineSellers"
            onChange={handleChangeSwitch("onlineSellers")}
          />
        </div>

        <div>
          <label htmlFor="deliveryTime">Delivery Time</label>
          <Switch
            name="deliveryTime"
            onChange={handleChangeSwitch("deliveryTime")}
          />
        </div>
      </Form.Item>
      <Form.Item className="steps-action">
        <Button
          className="btn-pre-steps"
          onClick={() => {
            history.goBack();
          }}
        >
          Cancel
        </Button>

        <Button htmlType="submit" className="btn-next-steps">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RenderOverview;
