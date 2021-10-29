import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {AppstoreOutlined,GoldOutlined,SolutionOutlined,TeamOutlined,ReconciliationOutlined,RightOutlined} from '@ant-design/icons';
import './AdminSideBar.scss';
const Adminsidebar = () => {
    const [isCollapse, setCollapse] = useState([false,false]);
    const {isFixSideBar, themeColor} = useSelector(state=>state.AdminDashBoardSettingReducer);
    const  {mainJob} = useSelector(state=>state.JobManagementReducer);
    const showSubMenu = (event) => {
        event.preventDefault();
        const typeMenu = event.target.closest('.Menucollapse').dataset.target;
        const isCollapseShow = [...isCollapse];
        isCollapseShow[typeMenu] = !isCollapseShow[typeMenu];
        setCollapse(isCollapseShow);
    }
    useEffect(() => {
      if(mainJob.length === 0){
        
      }
    },[]);
  return (
    <div className={"adminSideBar " + themeColor + (!isFixSideBar?" inFix":"")}>
      <div className="adminSideBar-container">
        <ul className="adminSideBar-menu">
          <NavLink to="/admin" exact={true} className="menu-item">
            <li className="menu-itemTitle"><AppstoreOutlined /><p>Dashboard</p></li>
          </NavLink>
          <NavLink to="/admin/job-management" className={"menu-item Menucollapse " + (isCollapse[0]?"show":"")} data-target = "0" onClick={showSubMenu}>
            <li className="menu-itemTitle"><GoldOutlined /><p>Projects</p><RightOutlined /></li>
          </NavLink>
          <ul className={"adminSideBar-subMenu projectList " + (isCollapse[0]?"show":"")}>
              <NavLink to="/admin/job-management" exact={true} className="subMenu-item">
                <li className="subMenu-itemTitle"><p>Statistics</p></li>
              </NavLink>
              {mainJob?.map((job,idx)=>{
                return (
                  <NavLink key={idx}
                    to={`/admin/job-management/${job._id}`} className="subMenu-item">
                    <li className="subMenu-itemTitle"><p>{job.name}</p></li>
                  </NavLink>
                )
              })}
            </ul>
          <NavLink to="/admin/staff" className={"menu-item Menucollapse " + (isCollapse[1]?"show":"")}  data-target = "1" onClick={showSubMenu}>
            <li className="menu-itemTitle"><SolutionOutlined /><p>Staff Users</p><RightOutlined /></li>
          </NavLink>
          <ul className={"adminSideBar-subMenu staffUserList " + (isCollapse[1]?"show":"")}>
              <NavLink to="/admin/staff/add-staff" className="subMenu-item">
                <li className="subMenu-itemTitle"><p>Add New Staff Users</p></li>
              </NavLink>
              <NavLink
                to="/admin/staff/staff-user" className="subMenu-item">
                <li className="subMenu-itemTitle"><p>Staff User Lists</p></li>
              </NavLink>
            </ul>
          <NavLink to="/admin/client-user" className="menu-item">
            <li className="menu-itemTitle"><TeamOutlined /><p>Client Users</p></li>
          </NavLink>
          <NavLink to="/admin/todo-list" className="menu-item">
            <li className="menu-itemTitle"><ReconciliationOutlined /><p>Task Lists</p></li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Adminsidebar;
