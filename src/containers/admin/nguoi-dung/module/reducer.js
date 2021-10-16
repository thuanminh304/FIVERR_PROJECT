import { GET_ALL_USER, LOGIN_USER ,LOGOUT_USER} from "./type";

const initialState = {
  loading: false,
  listAllUser: null,
  currentUser: { message: "", token: "", user: {} },
};

const quanLyNguoiDungReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return { ...state, currentUser: payload,loading:false };

    case GET_ALL_USER:
      return { ...state, listAllUser: payload,loading:false };
case LOGOUT_USER:
  return {...state,currentUser:null}
    default:
      return state;
  }
};

export default quanLyNguoiDungReducer;
