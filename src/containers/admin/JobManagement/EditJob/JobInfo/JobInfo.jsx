import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import JobFormLayout from "layouts/JobFormLayout";
import "./JobInfo.scss";
import Uploadimage from "../UploadImage/UploadImage";
import {
  actGetJobDetail,
  actUpdateJobDetail,
} from "Modules/JobManagement/actions";
const Jobinfo = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formRef = React.createRef();
  const [initialValue, setInitialValue] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [indexType, setIndexType] = useState(0);
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
    // {
    //   name: "deliveryTime",
    //   placeHolderText: "Delivery Time",
    //   type: "switch",
    // },
  ];
  const { mainJob, jobDetail, loadingAction } = useSelector(
    (state) => state.JobManagementReducer
  );
  const { isNote } = useSelector((state) => state.AdminDashBoardSettingReducer);
  const { jobId } = useParams();
  useEffect(() => {
    dispatch(actGetJobDetail(jobId));
  }, []);
  useEffect(() => {
    if (!isNote && !!isEdit) {
      history.goBack();
      setIsEdit(false);
    }
  }, [isNote]);
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
      userCreatedName: "",
      userBookingName: "",
    };
    for (let i in initialValue) {
      for (let j in jobDetail) {
        if (i === j) {
          if (i === "type") {
            initialValue[i] = jobDetail[j]?._id;
            changeSubType(jobDetail[j]?._id);
            break;
          }
          if (i === "subType") {
            initialValue[i] = jobDetail[j]?._id;
            break;
          }
          initialValue[i] = jobDetail[j];
          break;
        }
      }
    }
    setInitialValue(initialValue);
  }, [jobDetail]);
  useEffect(() => {
    formRef.current.setFieldsValue(initialValue);
  }, [initialValue]);
  const onFinish = (values) => {
    const data = { ...values };
    const job = values.job?.file;
    delete data.job;
    let formData = new FormData();
    if (job && job?.status !== "removed") {
      formData.append("job", job, job.name);
    }
    if (!!formData.get("job")) {
      dispatch(actUpdateJobDetail(jobDetail._id, data, formData));
    } else {
      dispatch(actUpdateJobDetail(jobDetail._id, data));
    }
    setIsEdit(true);
  };
  const changeSubType = (typeId) => {
    const typeIdx = mainJob.findIndex((type) => {
      return type._id === typeId;
    });
    if (typeIdx !== -1) {
      setIndexType(typeIdx);
    }
  };
  const onFieldChange = (changedFields) => {
    const fieldName = changedFields[0].name[0];
    if (fieldName === "type") {
      const typeId = changedFields[0].value;
      if (typeId !== initialValue.type) {
        const typeIdx = mainJob.findIndex((type) => {
          return type._id === typeId;
        });
        if (typeIdx !== -1) {
          setIndexType(typeIdx);
          formRef.current.setFieldsValue({
            subType: mainJob[typeIdx].subTypeJobs[0]._id,
          });
        }
      } else {
        changeSubType(typeId);
        formRef.current.setFieldsValue({ subType: initialValue.subType });
      }
    }
  };
  const BacktoPrevPage = (e) => {
    e.preventDefault();
    history.goBack();
  };
  return (
    <div className="JobInfo">
      <div className="jobInfo__content">
        <Form
          onFinish={onFinish}
          scrollToFirstError
          ref={formRef}
          initialValues={initialValue}
          onFieldsChange={onFieldChange}
        >
          <div className="jobInfo__formContent row">
            <div className="jobInfo__formContentItem col-12">
              <div className="jobInfo__jobName jobInfo__formItem">
                <div className="jobInfo__title">
                  <p>Job Name</p>
                </div>
                <JobFormLayout formData={jobField[0]} />
              </div>
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-6">
              <div className="jobInfo__title">
                <p>Job Type</p>
              </div>
              <JobFormLayout formData={jobField[1]} />
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-6">
              <div className="jobInfo__title">
                <p>Job Sub Type</p>
              </div>
              <JobFormLayout formData={jobField[2]} jobTypes={indexType} />
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-6">
              <div className="jobInfo__title">
                <p>Job Rating</p>
              </div>
              <JobFormLayout formData={jobField[3]} />
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-6">
              <div className="jobInfo__title">
                <p>Job Price</p>
              </div>
              <JobFormLayout formData={jobField[4]} />
            </div>
            <div className="jobInfo__formContentItem col-12 col-sm-7">
              <div className="jobInfo__switch row">
                {jobField.map((feild, idx) => {
                  if (feild.type === "switch") {
                    return (
                      <div
                        key={idx}
                        className="jobInfo__switchItem col-6 col-sm-4"
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
                <p>Seller</p>
              </div>
              <div className="jobInfo__nameUser">
                {initialValue?.userCreatedName}
              </div>
            </div>
            <div className="jobInfo__formContentItem col-12 col-md-9">
              <div className="jobInfo__title">
                <p>Job Image</p>
              </div>
              <div className="jobInfo__uploadFile">
                <Uploadimage
                  imageJob={initialValue?.image}
                  jobTitle={initialValue?.name}
                />
              </div>
            </div>
          </div>
          <div className="form__Submit">
            <button type="submit" className="form__btn form__SubmitBtn">
              Update {loadingAction ? <LoadingOutlined /> : ""}
            </button>
            <button
              className="form__btn form__canceltBtn"
              onClick={BacktoPrevPage}
            >
              Back
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Jobinfo;
