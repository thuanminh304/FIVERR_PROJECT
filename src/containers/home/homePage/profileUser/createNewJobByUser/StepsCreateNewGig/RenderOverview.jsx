import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { actGetDetailTypeMainjob } from "./modules/action";
import jobApi from "apis/jobApi";
const RenderOverview = (props) => {
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  const { listDetailTypeMainjob } = useSelector(
    (state) => state.profileUserReducer
  );
  const formik = props.formik;
  const [state, setState] = useState(null);
  const dispatch = useDispatch();

  async function handleChangeMainJob(value) {
    formik.setFieldValue("type", value);
    console.log(value);

    try {
      const data = await jobApi.getDetailTypeMainjob(value);
      setState(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleChangeSubJob = (value) => {
    console.log(value);
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
    <div className="render-overview">
      <Form.Item label="Name">
        <Input
          placeholder="Name"
          name="name"
          type="text"
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label="CATEGORY">
        <Select
          options={mainJob?.map((mainjob, idx) => ({
            label: mainjob.name,
            value: mainjob._id,
          }))}
          onChange={handleChangeMainJob}
          placeholder="SELECT A CATEGORY"
        />
        <Select
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
      <Form.Item label="Status">
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
    </div>
  );
};
export default RenderOverview;
