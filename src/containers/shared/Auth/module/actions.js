import userApi from "apis/userApi";
import { LOGIN_USER,LOGOUT_USER } from "./types";

export const actLoginUser = (user,history) => {
    return (dispatch) => {
      userApi
        .loginUser(user)
        .then((res) => {
          alert('Đăng nhập thành công !')
          localStorage.setItem("token", JSON.stringify(res?.data.token));
          dispatch({
            type: LOGIN_USER,
            payload: res.data,
          });
          history.push('/')
        })
        .catch((err) => {
          console.log(err?.response.data);
        });
    };
  };

  export const actLogoutUser=()=>{
    return dispatch=>{
      dispatch({type:LOGOUT_USER})
    }
  }