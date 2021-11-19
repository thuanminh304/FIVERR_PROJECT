import React from "react";
import {useSelector} from "react-redux";
import {SettingOutlined} from '@ant-design/icons';
const Admininfoperson = (props) => {
  const {show} = props;
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const { email, phone, birthday, gender } = currentUser;
  return (
    <div className="adminBox-container">
      <div className="adminBox-content">
        <div className="adminBox-title">Information <SettingOutlined/></div>
        <div className="adminBox-list">
          <div className="adminInfo__content">
            <div className="infoField">Email:</div>
            <div className="infoValue">{email}</div>
          </div>
          <div className="adminInfo__content">
            <div className="infoField">Phone:</div>
            <div className="infoValue">{phone}</div>
          </div>
          <div className="adminInfo__content">
            <div className="infoField">Birthday:</div>
            <div className="infoValue">{new Date(birthday).toLocaleDateString()}</div>
          </div>
          <div className="adminInfo__content">
            <div className="infoField">Gender:</div>
            <div className="infoValue">{gender?"Male":"Female"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admininfoperson;
