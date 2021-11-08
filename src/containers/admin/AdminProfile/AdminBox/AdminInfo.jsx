import React from "react";
import "./AdminBox.scss";
import Admininfoperson from "./AdminInfo/AdminInfoPerson";
import Admincertification from './AdminInfo/AdminCertification';
import Adminskill from './AdminInfo/AdminSkill';
const Admininfo = () => {
  return (
    <>
        <Admininfoperson/>
        <Admincertification/>
        <Adminskill/>
    </>
  );
};

export default Admininfo;
