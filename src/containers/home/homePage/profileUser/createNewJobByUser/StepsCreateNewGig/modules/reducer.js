import {
  CREATE_JOB_BY_USER,
  GET_ALL_JOBS_BY_USER,
  GET_DETAIL_JOB_CREATED_BY_USER,
  GET_DETAIL_SUBTYPE_JOBS,
  GET_LIST_JOBS_BY_NAME,
  GET_LIST_JOB_RENTED_BY_USER,
} from "./type";

const initialState = {
  currentJob: null,
  listAllJobsByUser: [],
  listJobRentedByUser: [],
  detailJobCreatedByUser: null,
  detailSubTypeJob: null,
  listJobsByName: [],
};

const profileUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_JOB_BY_USER:
      return { ...state, currentJob: payload };
    case GET_ALL_JOBS_BY_USER:
      return { ...state, listAllJobsByUser: payload };
    case GET_LIST_JOB_RENTED_BY_USER:
      return { ...state, listJobRentedByUser: payload };
    case GET_DETAIL_JOB_CREATED_BY_USER:
      return { ...state, detailJobCreatedByUser: payload };
    case GET_DETAIL_SUBTYPE_JOBS:
      return { ...state, detailSubTypeJob: payload };
    case GET_LIST_JOBS_BY_NAME:
      return { ...state, listJobsByName: payload };
    default:
      return state;
  }
};

export default profileUserReducer;
