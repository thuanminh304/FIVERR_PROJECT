import React, {useEffect} from "react";
import withLayout from "../hocs/withLayout";
import 'containers/admin/admin.scss';

import { useSelector, useDispatch } from "react-redux";
import Adminheader from "containers/admin/Header/AdminHeader";
import Adminsidebar from "containers/admin/SideBar/AdminSideBar";
import Admintitle from "containers/admin/AdminTitle/AdminTitle";
import { actGetMainJobList } from "Modules/JobManagement/actions";
import { actGetAllUser } from "containers/admin/user/module/action";
import { FIX_SIDE_BAR } from "containers/admin/Header/modules/types";
import { Redirect } from "react-router";

//
function AdminLayout(props) {
  const dispatch = useDispatch();
  const {isFixSideBar, themeColor} = useSelector(state=>state.AdminDashBoardSettingReducer);
  const {mainJob} = useSelector(state=>state.JobManagementReducer)
  const {listAllUser} = useSelector(state=>state.managementUserReducer);
  const {currentUser} = useSelector(state=>state.AuthReducer);
  const {path} = props.children.props.match;
  useEffect(()=>{
    if(window.innerWidth <= 992 && !!isFixSideBar){
      dispatch({type: FIX_SIDE_BAR, payload: false});
    };
    if(mainJob.length === 0 || listAllUser.length === 0){
      dispatch(actGetMainJobList());
      dispatch(actGetAllUser());
    };
  },[]);
  const onBlurSideBarfunc = (e) => {
    if(window.innerWidth <= 992 && !!isFixSideBar) {
      dispatch({type: FIX_SIDE_BAR, payload: false})
    };
  };
  if(!currentUser || currentUser.role !== 'ADMIN') return (<Redirect to={'/'}/>);
  return (
    <div className="adminContainer">
      <Adminheader />
      <section className="adminContainer-content">
        <div className={"adminContent__sidebar " + themeColor + (!isFixSideBar?" inFix":"")}>
          <Adminsidebar />
        </div>
        <div className="adminContent__main" onClick={onBlurSideBarfunc}>
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
