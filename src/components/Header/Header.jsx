import React from "react";
import {  useSelector } from "react-redux";
import HeaderNotLogin from "components/Header/HeaderNotLogin/HeaderNotLogin";
import HeaderLoggedIn from "./HeaderLoggedIn/HeaderLoggedIn";
const Header = () => {
  const { currentUser } = useSelector((state) => state.AuthReducer);
  

  return !currentUser? <HeaderNotLogin /> : <HeaderLoggedIn />;
};

export default Header;
