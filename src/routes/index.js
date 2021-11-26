import Dashboard from "containers/admin/dashboard/Dashboard";
import Home from "containers/home/homePage/Home";
import Login from "containers/shared/Auth/Login/Login";
import Statistics from "containers/admin/JobManagement/Statistics/Statistics";
import Mainjobtype from "containers/admin/JobManagement/MainJobType/MainJobType";
import ProfileUser from "containers/home/homePage/profileUser/ProfileUser";
import Editjob from "containers/admin/JobManagement/EditJob/EditJob";
import CreateNewJobByUser from "containers/home/homePage/profileUser/createNewJobByUser/CreateNewJobByUser";
import UpdateJobByUser from "containers/home/homePage/profileUser/updateJobByUser/UpdateJobByUser";
import DetailJob from "containers/home/homePage/profileUser/detailJob/DetailJob";
import Adminprofile from "containers/admin/AdminProfile/AdminProfile";
import Categories from "containers/home/Categories/Categories";
import DetailListSubType from "containers/home/homePage/DetailListSubType/DetailListSubType";
import PageSearchJob from "containers/home/homePage/pageSearchJob/PageSearchJob";
import Jobdetail from "containers/home/JobDetail/JobDetail";
import AddNewStaffLayout from "containers/admin/user/AddNewStaff/AddNewStaffLayout";
import Stafflist from "containers/admin/user/StaffManagement/StaffList";
import Clientlistlayout from "containers/admin/user/ClientList/ClientListLayout";
import Updateuserlayout from "containers/admin/user/UpdateUser/UpdateUserLayout";
import TodoLayout from "containers/admin/Todo/TodoLayout";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/user/:email",
    component: ProfileUser,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/by-user/create-new-job",
    component: CreateNewJobByUser,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/by-user/update-job/:idJobCreateByUser",
    component: UpdateJobByUser,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/by-user/:idUser/:idJobCreateByUser",
    component: DetailJob,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/join",
    component: Login,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/categories/:typeJob",
    component: Categories,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/categories/:nameTypeJob/:idSubTypeJob",
    component: DetailListSubType,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/search/gigs/:name",
    component: PageSearchJob,
    exact: true,
    isPrivate: true,
  },
  {
    path: ["/:nameTypeJob/detail/:jobId", "/:idTypeJob/detail/:jobId"],
    component: Jobdetail,
    exact: true,
    isPrivate: true,
  },
];
export const adminRoutes = [
  {
    path: "/admin",
    component: Dashboard,
    exact: true,
    isPrivate: true,
    name: "Dashboard",
    href: ["Dashbord"],
  },
  {
    path: "/admin/client-user",
    component: Clientlistlayout,
    exact: true,
    isPrivate: true,
    name: "Client Users",
    href: ["Client Users"],
  },
  {
    path: "/admin/staff/staff-user",
    component: Stafflist,
    exact: true,
    isPrivate: true,
    name: "Staff Users",
    href: ["Staff Users"],
  },
  {
    path: "/admin/staff/add-staff",
    component: AddNewStaffLayout,
    exact: true,
    isPrivate: true,
    name: "Add New Staff",
    href: ["Add New Staff"],
  },
  {
    path: "/admin/update-user/:idUser",
    component: Updateuserlayout,
    exact: true,
    isPrivate: true,
    name: "Update User",
    href: ["User Lists", "Update User"],
  },
  {
    path: "/admin/job-management",
    component: Statistics,
    exact: true,
    isPrivate: true,
    name: "Statistics",
    href: ["Products", "Statistics"],
  },
  {
    path: "/admin/job-management/list/:mainJobId",
    component: Mainjobtype,
    exact: false,
    isPrivate: true,
    name: "",
    href: ["Products"],
  },
  {
    path: "/admin/job-management/edit/:jobId",
    component: Editjob,
    exact: false,
    isPrivate: true,
    name: "Job Edit",
    href: ["Products", "Job Edit"],
  },
  {
    path: "/admin/adminProfile",
    component: Adminprofile,
    exact: false,
    isPrivate: true,
    name: "Admin Profile",
    href: ["Admin Profile"],
  },
  {
    path: "/admin/adminMessage",
    component: Adminprofile,
    exact: false,
    isPrivate: true,
    name: "Admin Profile",
    href: ["Admin Profile"],
  },
  {
    path: "/admin/todo-list",
    component: TodoLayout,
    exact: false,
    isPrivate: true,
    name: "Todo List",
    href: ["Todo List"],
  },
];
