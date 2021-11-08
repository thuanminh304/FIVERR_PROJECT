import { CREATE_JOB_BY_USER, GET_ALL_JOBS_BY_USER } from "./type";

const initialState = {
  currentJob: null,
  listAllJobsByUser: null,
};

const profileUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_JOB_BY_USER:
      return { ...state, currentJob: payload };
    case GET_ALL_JOBS_BY_USER:
      return { ...state, listAllJobsByUser: payload };
    default:
      return state;
  }
};

export default profileUserReducer;
