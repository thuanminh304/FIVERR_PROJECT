import userApi from "apis/userApi";
import { GET_ALL_USER, LOGIN_USER } from "./type";

export const actLoginUser = (user) => {
  return (dispatch) => {
    userApi
      .loginUser(user)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        dispatch({
          type: LOGIN_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err?.response.data);
      });
  };
};

export const actGetAllUser = () => {
  return (dispatch) => {
    userApi
      .getAllUser()
      .then((res) => {
        dispatch({
          type: GET_ALL_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err?.response.data);
      });
  };
};
