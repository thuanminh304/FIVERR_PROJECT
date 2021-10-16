import {  LOGIN_USER ,LOGOUT_USER} from "./types";

const initialState = {
  loading: false,
  currentUser: { message: "", token: "", user: {} },
};

const xacThucNguoiDungReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return { ...state, currentUser: payload,loading:false };

   
case LOGOUT_USER:
  return {...state,currentUser:null}
    default:
      return state;
  }
};

export default xacThucNguoiDungReducer;