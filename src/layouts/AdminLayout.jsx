import React from "react";
import withLayout from "../hocs/withLayout";
import 'containers/admin/admin.scss';

import { useSelector } from "react-redux";
import Adminheader from "containers/admin/Header/AdminHeader";
import Adminsidebar from "containers/admin/SideBar/AdminSideBar";
import Admintitle from "containers/admin/AdminTitle/AdminTitle";

//
function AdminLayout(props) {
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const {isFixSideBar, themeColor} = useSelector(state=>state.AdminDashBoardSettingReducer);
  const {path} = props.children.props.match;
  return (
    <div className="adminContainer">
      <Adminheader />
      <section className="adminContainer-content">
        <div className={"adminContent__sidebar " + themeColor + (!isFixSideBar?" inFix":"")}>
          <Adminsidebar />
        </div>
        <div className="adminContent__main">
          <div className="adminContent__title">
            <Admintitle path={path}/>
          </div>
          <div className="adminContent__container">
            {props.children}
          </div>
        </div>
      </section>
    </div>
  );
}

export default withLayout(AdminLayout);
