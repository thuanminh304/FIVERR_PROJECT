import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Form,Input } from "antd";
import JobFormLayout from "layouts/JobFormLayout";
import "./JobInfo.scss";
import Uploadimage from "../UploadImage/UploadImage";
import { actGetJobDetail } from "Modules/JobManagement/actions";
const Jobinfo = (props) => {
  const dispatch = useDispatch();
  const formRef = React.createRef();
  const [imageJob, setImage] = useState(
    "https://fiverr.cybersoft.edu.vn/public/images/job/1635838516420_phu-thuy-syndra.jpg"
  );
  const [initialValue, setInitialValue] = useState(null);
  const [indexType,setIndexType] = useState(0);
  const jobField = [
    {
      name: "name",
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
  const { mainJob, jobDetail } = useSelector(
    (state) => state.JobManagementReducer
  );
  const { jobId } = useParams();
  useEffect(() => {
    dispatch(actGetJobDetail(jobId));
  }, []);
  useEffect(() => {
    const initialValue = {
      name: "",
      type: "",
      subType: "",
      userCreated: "",
      rating: null,
      price: null,
      proServices: false,
      localSellers: false,
      onlineSellers: false,
      deliveryTime: false,
      image: "",
    };
    for (let i in initialValue) {
      for (let j in jobDetail) {
        if (i == j) {
          if (i === "type") {
            initialValue[i] = jobDetail[j]._id;
            changeSubType(jobDetail[j]._id);
            break;
          }
          if (i === "subType") {
            initialValue[i] = jobDetail[j]._id;
            break;
          }
          initialValue[i] = jobDetail[j];
          break;
        }
      }
    }
    setInitialValue(initialValue);
  }, [jobDetail]);
  useEffect(()=>{
    formRef.current.setFieldsValue(initialValue);
  },[initialValue,indexType])
  const onFinish = (values) => {
    console.log(values);
  };
  const changeImage = (image) => {
    console.log(image);
  };
  const changeSubType = (typeId) => {
    const typeIdx = mainJob.findIndex(type=>{
      return type._id === typeId;
    });
    if(typeIdx !== -1) {
      setIndexType(typeIdx);
    }
  }
  return (
    <div className="JobInfo">
      <div className="jobInfo__content">
        <Form
          onFinish={onFinish}
          scrollToFirstError
          ref={formRef}
          initialValues={initialValue}
          // initialValues={{"name": initialValue?.name}}
        >
          <div className="jobInfo__formContent row">
            <div className="jobInfo__formContentItem col-12">
              <div className="jobInfo__jobName jobInfo__formItem">
                <div className="jobInfo__title">
                  <p>Project Name</p>
                </div>
                <Form.Item name="name">
                  <Input type='text'/>
                </Form.Item>
                {/* <JobFormLayout formData={jobField[0]} /> */}
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
              <JobFormLayout formData={jobField[2]} jobTypes={indexType} />
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
                      <div
                        key={idx}
                        className="jobInfo__switchItem col-6 col-md-3"
                      >
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
              <div className="jobInfo__nameUser">{initialValue?.userCreated}</div>
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-9">
              <div className="jobInfo__title">
                <p>Project Image</p>
              </div>
              <div className="jobInfo__uploadFile">
                <Uploadimage
                  imageJob={initialValue?.image}
                  changeImage={changeImage}
                  jobTitle={initialValue?.name}
                />
              </div>
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
