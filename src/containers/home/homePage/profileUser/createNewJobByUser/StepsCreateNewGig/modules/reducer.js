import {
  CREATE_JOB_BY_USER,
  GET_ALL_JOBS_BY_USER,
  GET_DETAIL_JOB_CREATED_BY_USER,
  GET_LIST_JOB_BOOKED_BY_USER,
} from "./type";

const initialState = {
  currentJob: null,
  listAllJobsByUser: null,
  listJobBookedByUser: null,
  detailJobCreatedByUser: null,
};

const profileUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_JOB_BY_USER:
      return { ...state, currentJob: payload };
    case GET_ALL_JOBS_BY_USER:
      return { ...state, listAllJobsByUser: payload };
    case GET_LIST_JOB_BOOKED_BY_USER:
      return { ...state, listJobBookedByUser: payload };
      case GET_DETAIL_JOB_CREATED_BY_USER:
      return { ...state, detailJobCreatedByUser: payload };
    default:
      return state;
  }
};

export default profileUserReducer;
