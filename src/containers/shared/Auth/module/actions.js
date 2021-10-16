import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, MEMORY_USER_LOGIN_FLAG, LOGOUT }  from "./types";
import userApi from "apis/userApi";

// loginUser
const actLoginUserRequest = () => ({
    type: LOGIN_REQUEST,
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
        dispatch(actLoginUserRequest());
        const isRemember = getState().AuthReducer.isRemem;
        userApi.loginUser(user)
        .then(res=> {
            if(!!isRemember) {
                localStorage.setItem('fiverrUser', JSON.stringify(res.data));
            }
            dispatch(actLoginUserSuccess(res.data));
        })
        .catch(error=>{
            dispatch(actLoginUserFail(error.response.data.message));
        });
    };
};

// change remember user login status
export const actChangeRememberUserLoginStatus = () => {
    return dispatch => {
        dispatch({
            type: MEMORY_USER_LOGIN_FLAG,
        })
    }
}

// get user info saved in localStorage

export const actUploadUserLogin = (data) => {
    return dispatch => {
        dispatch(actLoginUserSuccess(data));
    };
}

// logout 

export const actLogout = () => {
    return dispatch => {
        localStorage.removeItem('fiverrUser');
        dispatch({
            type: LOGOUT,
        })
    }
}
