import React from "react";
import { useSelector } from "react-redux";
import HomeLoggedIn from "./homeLoggedIn/HomeLoggedIn";
import HomeNotLogin from "./homeNotLogin/HomeNotLogin";

export default function Home() {
  const { currentUser } = useSelector((state) => state.AuthReducer);

  return !currentUser ? <HomeNotLogin /> : <HomeLoggedIn />;
}
