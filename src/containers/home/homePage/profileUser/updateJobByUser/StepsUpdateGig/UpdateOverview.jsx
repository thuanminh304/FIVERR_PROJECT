import React, { useState } from "react";
import { Form, Input, InputNumber, Switch } from "antd";
import { useSelector } from "react-redux";
import { Select } from "antd";
import { useFormik } from "formik";
import jobApi from "apis/jobApi";
import { useHistory } from "react-router";
import * as yup from "yup";
import errorForm from "components/showErrors/showError";
import messageConfig from "components/Message/message";
const UpdateOverview = (props) => {
  const detailJobCreatedByUser = props.detailJobCreatedByUser;
  const [current, setCurrent] = props.currentStep;
  const [state, setState] = useState(null);
  const history = useHistory();
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: detailJobCreatedByUser?.name,
      rating: detailJobCreatedByUser?.rating,
      price: detailJobCreatedByUser?.price,
      proServices: detailJobCreatedByUser?.proServices,
      localSellers: detailJobCreatedByUser?.localSellers,
      onlineSellers: detailJobCreatedByUser?.onlineSellers,
      deliveryTime: detailJobCreatedByUser?.deliveryTime,
      type: detailJobCreatedByUser?.type._id,
      subType: detailJobCreatedByUser?.subType,
    },
    onSubmit: (value) => {
      jobApi
        .updateJobDetail(detailJobCreatedByUser?._id, value)
        .then((res) => {
          messageConfig.loading();
          setTimeout(() => {
            setCurrent(current + 1);
          }, 1500);
          setTimeout(() => {
            messageConfig.success();
          }, 1000);
        })
        .catch((err) => {
          console.log(err?.response);
        });
    },
    validationSchema: yup.object({
      name: yup
        .string()
        
        .required(),
      type: yup.string().required("Please select !"),
      price: yup
        .string()

        .required("- Not yet entered"),
      rating: yup.string().min(0).max(5).required("- Not yet entered"),
    }),
  });

  async function handleChangeMainJob(value) {
    formik.setFieldValue("type", value);

    try {
      const data = await jobApi.getDetailTypeMainjob(
        value ? value : values.type._id
      );
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
  const errors = formik.errors;
  const touched = formik.touched;
  const values = formik.values;
  return (
    <Form onSubmitCapture={formik.handleSubmit} className="render-overview">
      <Form.Item className="item-name" label="Name">
        <Input
          placeholder="Name"
          name="name"
          type="text"
          value={values.name}
          onChange={formik.handleChange}
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
            name="type"
            options={mainJob?.map((mainjob, idx) => ({
              label: mainjob.name,
              value: mainjob._id,
            }))}
            value={values.type}
            onChange={handleChangeMainJob}
            placeholder="SELECT A CATEGORY"
          />

          {errorForm.showErrorsDefault(errors.type, touched.type)}
        </div>

        <div>
          <Select
            name="subType"
            value={values?.subType?.name}
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
          addonafter="$"
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
            checked={values.proServices}
            name="proServices"
            onChange={handleChangeSwitch("proServices")}
          />
        </div>
        <div>
          <label htmlFor="localSellers">Local Sellers</label>
          <Switch
            checked={values.localSellers}
            name="localSellers"
            onChange={handleChangeSwitch("localSellers")}
          />
        </div>

        <div>
          <label htmlFor="onlineSellers">Online Sellers</label>
          <Switch
            checked={values.onlineSellers}
            name="onlineSellers"
            onChange={handleChangeSwitch("onlineSellers")}
          />
        </div>
      </Form.Item>
      <Form.Item className="steps-action">
        <button
          type="button"
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
export default UpdateOverview;
