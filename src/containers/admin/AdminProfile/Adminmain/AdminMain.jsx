import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./AdminMain.scss";
import { useLocation } from "react-router-dom";
import { Upload, Button, Space } from "antd";
import {
  CameraOutlined,
  CheckCircleFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { actUploadAvatar } from "containers/shared/Auth/module/actions";
const Adminmain = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [avatarUpload, setavatarUpload] = useState(null);
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const { avatar, email, name, _id } = currentUser;
  const onChange = (file) => {
    setavatarUpload(file.file);
    document.querySelector(".ant-upload-select-picture").classList.add("uploaded");
    if(file.file.status === 'removed'){
      document.querySelector(".ant-upload-select-picture").classList.remove("uploaded");
      document.querySelector(".edit-avatarConfig").classList.remove("uploaded");
      setavatarUpload(null);
    }
  };
  const beforeUpload = (file) => {
    return false;
  };
  const updateAvatar = () => {
    const formData = new FormData();
    formData.append("avatar", avatarUpload, avatarUpload.name);
    dispatch(actUploadAvatar(formData));
  };
  const deleteAvatar = () => {
    document.querySelector('.ant-upload-list-item-card-actions button')?.click();
  };
  useEffect(() => {
    if(!!avatar){
      document.querySelector('.ant-upload-list-item-card-actions button')?.click();
    }
  },[avatar])
  return (
    <div className="adminMain">
      <div className="adminMain__content">
        <div className="avatar">
          {avatar ? (
            <img src={avatar} alt="user-avatar" />
          ) : (
            <div className="avatarText">{email.slice(0, 1).toUpperCase()}</div>
          )}
          <div className="edit-avatar">
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={beforeUpload}
              onChange={onChange}
            >
              <div className="uploadImage">
                <CameraOutlined />
              </div>
            </Upload>
            <div className={"edit-avatarConfig " + (!!avatarUpload?"uploaded":"")}>
              <CheckCircleFilled onClick={updateAvatar}/>
              <DeleteFilled onClick = {deleteAvatar}/>
            </div>
          </div>
        </div>
        <div className="name">{name}</div>
        <div className="option">
          <Link to="/admin/adminProfile">
            <button
              className={
                "Info " +
                (location.pathname === "/admin/adminProfile" ? "active" : "")
              }
            >
              Infomation
            </button>
          </Link>
          <Link to="/admin/adminMessage">
            <button
              className={
                "Message " +
                (location.pathname === "/admin/adminMessage" ? "active" : "")
              }
            >
              Message
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Adminmain;
