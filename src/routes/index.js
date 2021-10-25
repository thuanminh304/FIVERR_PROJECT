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
    name: 'Dashboard',
    href: ['Dashbord'],
  },
  {
    path: "/admin/management-user",
    component: ManagementUser,
    exact: true,
    isPrivate: true,
    name: 'Client Users',
    href: ['Client Users'],
  },
  {
    path: "/admin/management-user/add-new",
    component: AddNewUser,
    exact: false,
    isPrivate: true,
    name: 'Add New Staff',
    href: ['Add New Staff'],
  },
  {
    path: "/admin/management-user/update/:idUser",
    component: UpdateUser,
    exact: false,
    isPrivate: true,
    name: 'Update User',
    href: ['User Lists','Update User'],
  },
  {
    path: "/admin/job-management",
    component: Jobmanagement,
    exact: true,
    isPrivate: true,
    name: 'Statistics',
    href: ['Products','Statistics'],
  },
  {
    path: "/admin/job-management/:mainJobId",
    component: Jobmanagement,
    exact: false,
    isPrivate: true,
    name: '',
    href: ['Products'],
  },
];
