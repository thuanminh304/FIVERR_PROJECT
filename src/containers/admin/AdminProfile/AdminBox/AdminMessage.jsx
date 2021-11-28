import React from "react";
import Newmessage from "./AdminMessage/NewMessage/NewMessage";
import "./AdminBox.scss";
import Listmessage from "./AdminMessage/ListMessage/ListMessage";
const Adminmessage = () => {
  return (
    <div className="adminBox-container adminMessage">
      <div className="adminBox-content adminMessage__content">
        <div className="adminBox-title">Message</div>
        <Newmessage />
        <Listmessage />
        <div className="messageNote">
          <div className="note">Server in develope progressing...</div>
        </div>
      </div>
    </div>
  );
};

export default Adminmessage;
