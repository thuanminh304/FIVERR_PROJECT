import Dashboard from "containers/admin/dashboard/Dashboard";
import QuanLyBinhLuan from "containers/admin/comment/QuanLyBinhLuan";
import ManagementUser from "containers/admin/user/ManagementUser";
import AddNewUser from "containers/admin/user/AddNewUser";
import Home from "containers/home/homePage/Home";
import Login from "containers/shared/Auth/Login/Login";
import UpdateUser from "containers/admin/user/UpdateUser";
import Jobmanagement from "containers/admin/JobManagement/JobManagement";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
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
];
export const adminRoutes = [
  {
    path: "/admin",
    component: Dashboard,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/management-user",
    component: ManagementUser,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/management-user/add-new",
    component: AddNewUser,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/management-user/update/:idUser",
    component: UpdateUser,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/management-comment",
    component: QuanLyBinhLuan,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/quan-ly-binh-luan",
    component: QuanLyBinhLuan,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/job-management",
    component: Jobmanagement,
    exact: false,
    isPrivate: true,
  },
];
