import Login from "containers/shared/Auth/Login/Login";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    isPrivate: true,
  },
];
