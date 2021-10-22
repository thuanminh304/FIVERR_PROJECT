import { GET_ALL_USER } from "./type";

const initialState = {
  loading: false,
  listAllUser: null,
};

const managementUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USER:
      return { ...state, listAllUser: payload, loading: false };
      
    default:
      return state;
  }
};

export default managementUserReducer;
