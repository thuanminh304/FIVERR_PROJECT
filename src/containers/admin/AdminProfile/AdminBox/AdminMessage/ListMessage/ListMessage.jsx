import React from "react";
import {
  GlobalOutlined,
  EllipsisOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import './ListMessage.scss';
const Listmessage = () => {
  return (
    <div className="listMessage">
      <div className="listMessage__title">Conversation Lists</div>
      <ul className="listMessage__content">
        <li className="listMessage__item active">
          <div className="list__item content__item">
            <div className="item__avatar">
              <GlobalOutlined />
            </div>
            <div className="item__name">GLOBAL</div>
            <div className="setting">
              <EllipsisOutlined />
            </div>
          </div>
          <div className="list__item content__setting">
              <EyeInvisibleOutlined />
              <DeleteOutlined />
            </div>
        </li>
      </ul>
    </div>
  );
};

export default Listmessage;
