import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  CheckOutlined,
  CloseOutlined,
  
} from "@ant-design/icons";
import { Progress } from "antd";
import "./NotifyNote.scss";
import { actTurnOffNote } from "../../modules/actions";
const Notifynote = () => {
  const dispatch = useDispatch();
  const [loaddingProgess, setLoaddingProgess] = useState(100);
  const [showNote, setShowNote] = useState(false);
  const { currentNote, isNote } = useSelector(
    (state) => state.AdminDashBoardSettingReducer
  );
  const { type, content } = currentNote;
  useEffect(() => {
    if (loaddingProgess === 0) {
      dispatch(actTurnOffNote());
      return;
    }
    const progressing = setInterval(() => {
      setLoaddingProgess(loaddingProgess - 0.5);
    }, 5);
    return () => clearInterval(progressing);
  }, [loaddingProgess]);
  useEffect(() => {
    setShowNote(isNote);
  }, [isNote]);
  return (
    <div className={"notifynote " + (showNote ? "showNote" : "")}>
      <div className={"notifynote__content " + type}>
        <div className="item__userItem item__notifyType">
          <div className={"notifyType__icon " + type}>
            {type === "complete" ? <CheckOutlined /> : <CloseOutlined />}
          </div>
        </div>
        <div className="item__userItem">
          <div className="user__name">{content}</div>
        </div>
        <Progress percent={loaddingProgess} />
      </div>
    </div>
  );
};

export default Notifynote;
