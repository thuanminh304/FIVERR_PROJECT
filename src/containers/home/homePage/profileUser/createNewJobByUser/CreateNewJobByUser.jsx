import React from "react";
import { Steps, Button, Form } from "antd";
import RenderOverview from "./StepsCreateNewGig/RenderOverview";
import { useFormik } from "formik";
import jobApi from "apis/jobApi";
import "./createNewJobByUser.scss"
const CreateNewJobByUser = () => {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);
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
      console.log(value, "15");
      jobApi
        .createNewJobByUser(value)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err?.response);
        });
    },
  });
  const steps = [
    {
      title: "Overview",
      content: [<RenderOverview formik={formik} />],
    },
    {
      title: "Upload Avatar",
      content: "Second-content",
    },
    {
      title: "Finish",
      content: "Second-content",
    },
  ];

  return (
    <Form className="form-create-job-by-user" onSubmitCapture={formik.handleSubmit}>
      <Steps className="steps-create-job-by-user" current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content content-create-job-by-user">{steps[current].content}</div>
      <Form.Item className="steps-action">
        {current < steps.length - 1 && (
          <Button onClick={() => setCurrent(current + 1)}>Next</Button>
        )}
        {current === steps.length - 1 && (
          <Button htmlType="submit">Done</Button>
        )}
        {current > 0 && (
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => setCurrent(current - 1)}
          >
            Previous
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default CreateNewJobByUser;
