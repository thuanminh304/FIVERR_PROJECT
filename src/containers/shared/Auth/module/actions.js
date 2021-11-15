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
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "./types";
import userApi from "apis/userApi";
import messageConfig from "components/Message/message";
import { showNote } from "Modules/JobManagement/actions";

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
  return (dispatch, getState) => {
    const { currentUser } = getState().AuthReducer;
    userApi
      .uploadAvatar(formdata)
      .then((res) => {
        messageConfig.loading();
        const userLogin = JSON.parse(localStorage.getItem("fiverrUser"));
        userLogin.user = { ...userLogin.user, avatar: res.data.avatar };
        localStorage.setItem("fiverrUser", JSON.stringify(userLogin));
        dispatch({
          type: UPLOAD_AVATAR,
          payload: res.data,
        });
        setTimeout(() => {
          messageConfig.success();
        }, 500);
        if (currentUser.role === "ADMIN") {
          showNote(dispatch, getState, "complete", "Upload avatar success");
        } else if (currentUser.role === "CLIENT") {
          messageConfig.success();
        }
      })
      .catch((err) => {
        console.log(err?.response);
        if (currentUser.role === "ADMIN") {
          showNote(dispatch, getState, "error", "Upload avatar fail");
        }
      });
  };
};

// update profile
const actUpdateProfileReq = () => ({
  type: UPDATE_PROFILE_REQUEST,
});
const actUpdateProfileSucc = (data) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: data,
});
const actUpdateProfileFail = (error) => ({
  type: UPDATE_PROFILE_FAIL,
  payload: error,
});
export const actUpdateProfile = (id, data) => {
  return (dispatch, getState) => {
    dispatch(actUpdateProfileReq());
    userApi
      .editUser(id, data)
      .then((res) => {
        userApi
          .getDetailUser(id)
          .then((res) => {
            const userLogin = JSON.parse(localStorage.getItem("fiverrUser"));
            userLogin.user = { ...res.data };
            localStorage.setItem("fiverrUser", JSON.stringify(userLogin));
            dispatch(actUpdateProfileSucc(res.data));
            showNote(
              dispatch,
              getState,
              "complete",
              "Update admin info success"
            );
          })
          .catch((error) => {
            dispatch(actUpdateProfileFail(error));
            showNote(
              dispatch,
              getState,
              "error",
              "Update admin info success but load data fail"
            );
          });
      })
      .catch((error) => {
        dispatch(actUpdateProfileFail(error));
        showNote(dispatch, getState, "error", "Update admin info fail");
      });
  };
};
