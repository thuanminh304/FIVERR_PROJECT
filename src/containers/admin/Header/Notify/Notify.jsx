import React from "react";
import {
  CheckOutlined,
  CloseOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";
import "./Notify.scss";
const Notify = (props) => {
  const { notify, deleteNotify, listNote } = props;
  const deleteAllNotify = () => {
    deleteNotify();
  };
  return (
    <div className={"notify " + (notify === "note" ? "show" : "")}>
      <div className="messageNotify__content notify__content">
        <div className="messageNotify__title">
          <h4>NOTIFY</h4>
        </div>
        <ul className="messageNotify__messageBox">
          {listNote.length>0?listNote.map((note, idx) => {
            return (
              <li className="messageBox__item notifyBox__item">
                <div className={"item__userItem item__notifyType " + note.type}>
                  <div className="notifyType__icon">
                    {note.type === 'complete'?<CheckOutlined />:<CloseOutlined/>}
                  </div>
                </div>
                <div className="item__userItem">
                  <div className="user__name">{note.content === ''?'No Problem':note.content}</div>
                </div>
              </li>
            );
          }):(<p>Notify is Empty</p>)}
        </ul>
        <div className="messageNotify__viewAllBtn notify__footer">
          <p onClick={deleteAllNotify}>Delete All Message</p>
        </div>
      </div>
    </div>
  );
};

export default Notify;
