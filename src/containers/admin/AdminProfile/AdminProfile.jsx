import React, {useState, useEffect} from "react";
import { Route } from "react-router";
import Admininfo from "./AdminBox/AdminInfo";
import Adminmessage from "./AdminBox/AdminMessage";
import AdminInfoSettingLayout from "./AdminInfoSetting/AdminInfoSettingLayout";
import Adminmain from './Adminmain/AdminMain';
const Adminprofile = () => {
  const [showSetting, setShowSetting] = useState(false);
  useEffect(()=>{
    const adminBox = document.querySelector('.adminProfile');
    adminBox.addEventListener('click',showSettingBox);
  },[]);
  const showSettingBox = (e) => {
    const setting = e.target.closest('.adminBox-content .anticon-setting');
    const close = e.target.closest('.adminInfo-settingTitle .anticon-close-circle');
    if(!!setting){
      setShowSetting(true);
    }
    if(!!close){
      setShowSetting(false);
    }
  }
  return (
    <div className="adminProfile">
      <div className="adminProfile__content row">
        <div className="admin__bar col-12 col-sm-5 col-lg-4">
          <div className="admin__main">
            <Adminmain/>
          </div>
          <div className={"admin__box " + (!!showSetting?"hide":"")}>
            <Route path="/admin/adminProfile" component={Admininfo}/>
            <Route path="/admin/adminMessage" component={Adminmessage}/>
          </div>
        </div>
        <div className={"admin__content col-12 col-sm-7 col-lg-8 " + (!!showSetting?"show":"")}>
        <Route path="/admin/adminProfile" component={AdminInfoSettingLayout}/>
        </div>
      </div>
    </div>
  );
};

export default Adminprofile;
