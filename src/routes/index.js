import Dashboard from "containers/admin/dashboard/Dashboard";
import QuanLyBinhLuan from "containers/admin/binh-luan/QuanLyBinhLuan";
import QuanLyNguoiDung from "containers/admin/nguoi-dung/QuanLyNguoiDung";
import Home from "containers/home/homePage/Home";
import Login from "containers/shared/Auth/Login/Login";

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
    exact: false,
    isPrivate: true,
  },
  {
    path: "/join",
    component: Login,
    exact: false,
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
    path: "/admin/quan-ly-nguoi-dung",
    component: QuanLyNguoiDung,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/quan-ly-binh-luan",
    component: QuanLyBinhLuan,
    exact: true,
    isPrivate: true,
  },
];
