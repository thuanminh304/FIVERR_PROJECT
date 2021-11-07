import React, { useState } from "react";
import { useFormik } from "formik";
import jobApi from "apis/jobApi";
import { useSelector } from "react-redux";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import getBase64 from "components/base64/getBase64";
import messageConfig from "components/Message/message";

const { Dragger } = Upload;
export default function RenderUploadAvatar(props) {
  const { currentJob } = useSelector((state) => state.profileUserReducer);
  const [imageUrl, setImageUrl] = useState(null);
  const [current, setCurrent] = props.currentStep;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      job: null,
    },
    onSubmit: (value) => {
      const formData = new FormData();
      formData.append("job", value.job, value.job.name);
      messageConfig.loading();

      jobApi
        .updateJobImage(currentJob?._id, formData)
        .then((res) => {
          setTimeout(() => {
            setCurrent(current + 1);
          }, 1500);
          setTimeout(() => {
            messageConfig.success();
          }, 1000);
        })
        .catch(() => {});
    },
  });

  const propsDragger = {
    name: "job",
    multiple: false,
    maxCount: 1,
    accept: "image/*",
    listType: "picture-card",
    onChange(info) {
      getBase64(info.file.originFileObj, setImageUrl);
      formik.setFieldValue("job", info.file.originFileObj);
    },
    onDrop(e) {
      getBase64(e.dataTransfer.files[0], setImageUrl);
      formik.setFieldValue("job", e.dataTransfer.files[0]);
    },
  };
  return (
    <div className="render-upload-avatar">
      <h3>Showcase Your Services In A Gig Gallery</h3>
      <p>
        Encourage buyers to choose your Gig by featuring a variety of your work.
      </p>
      <form onSubmitCapture={formik.handleSubmit}>
        <div className="dragger-image">
          <Dragger {...propsDragger}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
          <div className="ant-show-upload-image">
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className="steps-action">
          <button
            className="btn-pre-steps"
            onClick={() => {
              setCurrent(current - 1);
            }}
          >
            Previous
          </button>

          <button type="submit" className="btn-next-steps">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
