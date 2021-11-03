import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Form } from "antd";
import JobFormLayout from "layouts/JobFormLayout";
import "./JobInfo.scss";
const Jobinfo = (props) => {
  const formRef = React.createRef();
  const jobField = [
    {
      name: "jobName",
      placeHolderText: "Job Name",
      type: "text",
    },
    {
      name: "type",
      placeHolderText: "Job Name",
      type: "select",
    },
    {
      name: "subType",
      placeHolderText: "Sub Job Name",
      type: "select",
    },
    {
      name: "rating",
      placeHolderText: "Rate",
      type: "number",
    },
    {
      name: "price",
      placeHolderText: "Price",
      type: "number",
    },
    {
      name: "proServices",
      placeHolderText: "Pro Services",
      type: "switch",
    },
    {
      name: "localSellers",
      placeHolderText: "Local Sellers",
      type: "switch",
    },
    {
      name: "onlineSellers",
      placeHolderText: "Online Sellers",
      type: "switch",
    },
    {
      name: "deliveryTime",
      placeHolderText: "Delivery Time",
      type: "switch",
    },
  ];
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  const { jobId } = useParams();
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="JobInfo">
      <div className="jobInfo__content">
        <Form onFinish={onFinish} scrollToFirstError ref={formRef}>
          <div className="jobInfo__formContent row">
            <div className="jobInfo__formContentItem col-12">
              <div className="jobInfo__jobName jobInfo__formItem">
                <div className="jobInfo__title">
                  <p>Project Name</p>
                </div>
                <JobFormLayout formData={jobField[0]} />
              </div>
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-6">
              <div className="jobInfo__title">
                <p>Project Type</p>
              </div>
              <JobFormLayout formData={jobField[1]} />
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-6">
              <div className="jobInfo__title">
                <p>Project Sub Type</p>
              </div>
              <JobFormLayout formData={jobField[2]} jobTypes={0} />
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-6">
              <div className="jobInfo__title">
                <p>Project Rating</p>
              </div>
              <JobFormLayout formData={jobField[3]} />
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-6">
              <div className="jobInfo__title">
                <p>Project Price</p>
              </div>
              <JobFormLayout formData={jobField[4]} />
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-7">
              <div className="jobInfo__switch row">
                {jobField.map((feild, idx) => {
                  if (feild.type === "switch") {
                    return (
                      <div className="jobInfo__switchItem col-6 col-md-3">
                        <div className="jobInfo__title">
                          <p>{feild.placeHolderText}</p>
                        </div>
                        <JobFormLayout key={idx} formData={jobField[idx]} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-5"></div>
            <div className="jobInfo__formContentItem col-12 col-md-3">
              <div className="jobInfo__title">
                <p>Project Manager</p>
              </div>
              <div className="jobInfo__nameUser">Vo Nhat Nam</div>
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-9">
              <div className="jobInfo__title">
                <p>Project Image</p>
              </div>
              <div className="jobInfo__nameUser">Vo Nhat Nam</div>
            </div>
          </div>
          <div className="form__Submit">
            <button type="submit" className="form__btn form__SubmitBtn">
              Update
            </button>
            <button className="form__btn form__canceltBtn">Back</button>
          </div>
        </Form>
        {jobId}
      </div>
    </div>
  );
};

export default Jobinfo;
