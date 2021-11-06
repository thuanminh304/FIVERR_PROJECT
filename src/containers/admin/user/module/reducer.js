import { GET_ALL_USER, GET_USER_SATICTIS } from "./type";

const initialState = {
  loading: false,
  listAllUser: [],
  userSatictis: [],
};

const managementUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USER:
      return { ...state, listAllUser: payload, loading: false };
    case GET_USER_SATICTIS:
      return {...state, userSatictis: payload};
    default:
      return state;
  }
};

export default managementUserReducer;
