import {
  AUTH_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  MEMORY_USER_LOGIN_FLAG,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  DETAIL_USER,
  UPLOAD_AVATAR,
} from "./types";
import userApi from "apis/userApi";
import messageConfig from "components/Message/message";

// loginUser
const actUserRequest = () => ({
  type: AUTH_REQUEST,
});
const actLoginUserSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});
const actLoginUserFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const actLoginUser = (user) => {
  return (dispatch, getState) => {
    dispatch(actUserRequest());
    const isRemember = getState().AuthReducer.isRemem;
    userApi
      .loginUser(user)
      .then((res) => {
        if (!!isRemember) {
          localStorage.setItem("fiverrUser", JSON.stringify(res.data));
        }
        localStorage.setItem("fiverrToken", JSON.stringify(res.data.token));
        dispatch(actLoginUserSuccess(res.data));
      })
      .catch((error) => {
        dispatch(actLoginUserFail(error?.response.data.message));
      });
  };
};

// change remember user login status
export const actChangeRememberUserLoginStatus = () => {
  return (dispatch) => {
    dispatch({
      type: MEMORY_USER_LOGIN_FLAG,
    });
  };
};

// get user info saved in localStorage

export const actUploadUserLogin = (data) => {
  return (dispatch) => {
    dispatch(actLoginUserSuccess(data));
  };
};

// logout

export const actLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("fiverrUser");
    localStorage.removeItem("fiverrToken");
    localStorage.removeItem("fiverrUserUpload");

    dispatch({
      type: LOGOUT,
    });
  };
};

// register new user

const actRegisterSuccess = (isSuccess) => ({
  type: REGISTER_SUCCESS,
  payload: isSuccess,
});

const actRegisterFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});

export const actRegister = (newUser) => {
  return (dispatch) => {
    dispatch(actUserRequest());
    userApi
      .registerUser(newUser)
      .then((res) => {
        const isSuccess = true;
        dispatch(actRegisterSuccess(isSuccess));
      })
      .catch((error) => {
        const isSuccess = false;
        dispatch(actRegisterFail(isSuccess));
      });
  };
};

//get detail user
export const actGetDetailUser = (id) => {
  return (dispatch) => {
    userApi
      .getDetailUser(id)
      .then((res) => {
        dispatch({
          type: DETAIL_USER,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err?.response.data));
  };
};

export const actUploadAvatar = (formdata) => {
  return (dispatch) => {
    userApi
      .uploadAvatar(formdata)
      .then((res) => {

        localStorage.setItem("fiverrUserUpload", JSON.stringify(res.data));
        dispatch({
          type: UPLOAD_AVATAR,
          payload: res.data,
        });
          messageConfig.success();
        
       
      })
      .catch((err) => console.log(err?.response));
  };
};
