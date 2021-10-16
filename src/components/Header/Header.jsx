import React from "react";
import HeaderNotLogin from "./HeaderNotLogin/HeaderNotLogin";
import {useSelector} from 'react-redux'
import HeaderLoggedIn from "./HeaderLoggedIn/HeaderLoggedIn";
const Header = () => {
  const { currentUser } = useSelector((state) => state.quanLyNguoiDungReducer);

  return !currentUser ? (
    <HeaderNotLogin />
  ) : (
    <HeaderLoggedIn/>
   
  );
};

export default Header;
