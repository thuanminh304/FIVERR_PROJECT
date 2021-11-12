import React, { useState } from "react";
import { Form, Input, InputNumber, Switch, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { useFormik } from "formik";
import jobApi from "apis/jobApi";
import { useHistory } from "react-router";
import { actCreateJobByUser } from "./modules/action";
import * as yup from "yup";
import errorForm from "components/showErrors/showError";
const RenderOverview = (props) => {
  const { mainJob } = useSelector((state) => state.JobManagementReducer);

  const [state, setState] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [current, setCurrent] = props.currentStep;
  const formik = useFormik({
    initialValues: {
      name: "",
      rating: 0,
      price: 0,
      proServices: false,
      localSellers: false,
      onlineSellers: false,
      deliveryTime: false,
      type: "",
      subType: "",
    },
    onSubmit: (value) => {
      dispatch(actCreateJobByUser(value, [current, setCurrent]));
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .matches(
          /^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ ]+$/
        )
        .required(),
      type: yup.string().required("Please select !"),
      subType: yup.string().required("Please select !"),
      price: yup.string().min(0).required("- Not yet entered"),
      rating: yup.number().min(0).max(5).required("- Not yet entered"),
    }),
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
  const handleChangeName = (value) => {
    formik.setFieldValue("name", `I will ${value.target.value}`);
  };
  const errors = formik.errors;
  const touched = formik.touched;
  const values = formik.values;
  return (
    <Form onSubmitCapture={formik.handleSubmit} className="render-overview">
      <Form.Item className="item-name" label="GIG TITLE">
        <span>I will</span>
        <Input
          placeholder="GIG TITLE
          "
          name="name"
          type="text"
          onChange={handleChangeName}
        />
        {errorForm.showErrors(
          errors.name,
          touched.name,
          values.name,
          "- Not yet entered",
          "- Do not use punctuation, numberic and special characters"
        )}
      </Form.Item>

      <Form.Item className="item-select" label="CATEGORY">
        <div>
          <Select
            key="type"
            name="type"
            options={mainJob?.map((mainjob, idx) => ({
              label: mainjob.name,
              value: mainjob._id,
            }))}
            onChange={handleChangeMainJob}
            placeholder="SELECT A CATEGORY"
          />

          {errorForm.showErrorsDefault(errors.type, touched.type)}
        </div>

        <div>
          <Select
            key="subType"
            name="subType"
            options={state?.subTypeJobs.map((subjob, idx) => ({
              label: subjob.name,
              value: subjob._id,
            }))}
            onChange={handleChangeSubJob}
            placeholder="SELECT A SUBCATEGORY"
          />

          {errorForm.showErrorsDefault(errors.subType, touched.subType)}
        </div>
      </Form.Item>
      <Form.Item label="Price">
        <InputNumber
          min={0}
          name="price"
          step={5}
          value={values.price}
          onChange={handleChangePrice}
        />
      </Form.Item>
      <Form.Item label="Rate">
        <InputNumber
          min={0}
          max={5}
          name="rating"
          step={0.1}
          value={values.rating}
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
      </Form.Item>
      <Form.Item className="steps-action">
        <button
          className="btn-pre-steps"
          onClick={() => {
            history.goBack();
          }}
        >
          Cancel
        </button>

        <button type="submit" className="btn-next-steps">
          Next
        </button>
      </Form.Item>
    </Form>
  );
};
export default RenderOverview;
