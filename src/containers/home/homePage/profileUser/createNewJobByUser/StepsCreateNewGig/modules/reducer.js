import { CREATE_JOB_BY_USER, GET_DETAIL_TYPE_MAINJOB } from "./type";

const initialState = {
  listDetailTypeMainjob: {},
  currentJob: null,
};

const profileUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_TYPE_MAINJOB:
      return { ...state, listDetailTypeMainjob: payload };
    case CREATE_JOB_BY_USER:
      return { ...state, currentJob: payload };
    default:
      return state;
  }
};

export default profileUserReducer;
