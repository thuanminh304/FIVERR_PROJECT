import React from "react";
import { Route } from "react-router";
import Admininfo from "./AdminBox/AdminInfo";
import Adminmessage from "./AdminBox/AdminMessage";
import AdminInfoSettingLayout from "./AdminInfoSetting/AdminInfoSettingLayout";
import Adminmain from './Adminmain/AdminMain';
const Adminprofile = () => {
  return (
    <div className="adminProfile">
      <div className="adminProfile__content row">
        <div className="admin__bar col-4">
          <div className="admin__main">
            <Adminmain/>
          </div>
          <div className="admin__box">
            <Route path="/admin/adminProfile" component={Admininfo}/>
            <Route path="/admin/adminMessage" component={Adminmessage}/>
          </div>
        </div>
        <div className="admin__content col-8">
        <Route path="/admin/adminProfile" component={AdminInfoSettingLayout}/>
        </div>
      </div>
    </div>
  );
};

export default Adminprofile;
