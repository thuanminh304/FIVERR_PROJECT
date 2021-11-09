import {
  LOGIN_FAIL,
  AUTH_REQUEST,
  LOGIN_SUCCESS,
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

const initialState = {
  loading: false,
  isRemem: true,
  currentUser: null,
  token: "",
  note: "",
  isError: false,
  isRegisterSuccess: false,
  detailUser: {},
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MEMORY_USER_LOGIN_FLAG:
      let isRemem = true;
      isRemem = !state.isRemem;
      return { ...state, isRemem: isRemem };
    case AUTH_REQUEST:
      return { ...state, loading: true, note: "" };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isRegisterSuccess: false,
        currentUser: payload.user,
        token: payload.token,
        note: payload.message,
        isError: false,
      };
    case LOGIN_FAIL:
      return { ...state, loading: false, note: payload, isError: true };
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        token: "",
        isRegisterSuccess: false,
        note: "",
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        note: "Đăng ký thành công",
        isRegisterSuccess: payload,
        isError: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        note: "Đăng ký không thành công",
        isRegisterSuccess: payload,
        isError: true,
      };
    case DETAIL_USER:
      return { ...state, detailUser: payload };
    case UPLOAD_AVATAR:
      return { ...state, currentUser: {...state.currentUser, avatar: payload.avatar}};
    case UPDATE_PROFILE_REQUEST:
      return {...state, loading: true};
    case UPDATE_PROFILE_SUCCESS:
      return {...state, loading: false, currentUser: payload};
    case UPDATE_PROFILE_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default AuthReducer;
