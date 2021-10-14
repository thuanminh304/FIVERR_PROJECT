import Dashboard from "containers/admin/dashboard/Dashboard";
import QuanLyBinhLuan from "containers/admin/binh-luan/QuanLyBinhLuan";
import QuanLyNguoiDung from "containers/admin/nguoi-dung/QuanLyNguoiDung";
import Home from "containers/home/homePage/Home";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: false,
    isPrivate: false,
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
