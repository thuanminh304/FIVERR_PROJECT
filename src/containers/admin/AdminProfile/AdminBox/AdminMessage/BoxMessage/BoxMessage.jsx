import React from "react";
import "./BoxMessage.scss";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const Boxmessage = () => {
  return (
    <div className="box-message">
      <div className="box-message__content">
        <div className="box-message__contenttitle">GLOBAL</div>
        <div className="chatBot">
          <div className="chatBot__content">
              <div className="content__text otherUser">
                <div className="userAvatar">
                    S
                </div>
                <div className="content__content">
                    <p>Server in develop progressing...</p>
                    <p>Plz, comeback later</p>
                </div>
              </div>
              <div className="content__text">
                <div className="content__content">
                    <p>I got it</p>
                </div>
              </div>
          </div>
          <div className="chatBot__toolChat">
            <div className="toolChat__input">
              <TextArea
                placeholder="Input Your Text"
                autoSize={{ minRows: 1, maxRows: 3 }}
              />
            </div>
            <div className="toolChat__button">
              <SendOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxmessage;
