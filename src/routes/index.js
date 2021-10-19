import Dashboard from "containers/admin/dashboard/Dashboard";
import QuanLyBinhLuan from "containers/admin/binh-luan/QuanLyBinhLuan";
import QuanLyNguoiDung from "containers/admin/nguoi-dung/QuanLyNguoiDung";
import ThemNguoiDung from "containers/admin/nguoi-dung/ThemNguoiDung";
import Home from "containers/home/homePage/Home";
import Login from "containers/shared/Auth/Login/Login";
import ThayDoiThongTinNguoiDung from "containers/admin/nguoi-dung/ThayDoiThongTinNguoiDung";

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
    path: "/admin/quan-ly-nguoi-dung",
    component: QuanLyNguoiDung,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/quan-ly-nguoi-dung/them-moi",
    component: ThemNguoiDung,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/doi-thong-tin/:idUser",
    component: ThayDoiThongTinNguoiDung,
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
