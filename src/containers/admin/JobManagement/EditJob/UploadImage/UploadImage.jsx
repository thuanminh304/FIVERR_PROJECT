import React, { useState, useEffect } from "react";
import { Form, Upload, Modal } from "antd";
import { InboxOutlined, EyeOutlined } from "@ant-design/icons";
import { getBase } from "containers/shared/GetBase/GetBase";
import "./UploadImage.scss";
const { Dragger } = Upload;
const Uploadimage = (props) => {
  const { imageJob, changeImage, jobTitle } = props;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [fileUpload, setFileUpload] = useState(false);
  const uploadDrops = {
    multiple: false,
    listType: "picture-card",
    maxCount: 1,
    onDrop(e) {
    //   console.log("Dropped files", e.dataTransfer.files);
    },
    onChange: (e) => {
      if (e.file.status === "removed") {
        setFileUpload(false);
        changeImage(null);
      } else {
        setFileUpload(true);
        changeImage(e.file);
      }
    },
    beforeUpload(file) {
      return false;
    },
  };
  const handleCancel = () => {
    setPreviewVisible(false);
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase(file.originFileObj);
    }
    setPreviewImage(file.preview);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexof("/") + 1)
    );
    setPreviewVisible(true);
  };
  const previewImageFunc = () => {
    setPreviewImage(imageJob);
    setPreviewTitle(jobTitle);
    setPreviewVisible(true);
  }
  console.log(fileUpload);
  const renderImageJob = () => {
    if (!fileUpload) {
      if (!!imageJob) {
        return (
          <div className="renderImage">
            <div className="renderImage__content">
              <img src={imageJob} alt="" />
              <div className="icon">
                <EyeOutlined onClick={previewImageFunc}/>
              </div>
            </div>
          </div>
        );
      }
    }
  };
  return (
    <div className="uploadFile">
      <div className="uploadFile__content">
        <Form.Item name="job" valuePropName={File}>
          <Dragger {...uploadDrops} onPreview={handlePreview}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area</p>
          </Dragger>
        </Form.Item>
        {renderImageJob()}
      </div>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default Uploadimage;
