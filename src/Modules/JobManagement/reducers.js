import {
  GET_MAIN_JOB_REQUEST,
  GET_MAIN_JOB_SUCCESS,
  GET_MAIN_JOB_FAIL,
  ADD_NEW_MAIN_JOB_REQUEST,
  ADD_NEW_MAIN_JOB_SUCCESS,
  ADD_NEW_MAIN_JOB_FAIL,
  UPDATE_MAIN_JOB_REQUEST,
  UPDATE_MAIN_JOB_SUCCESS,
  UPDATE_MAIN_JOB_FAIL,
  DELETE_MAIN_JOB_FAIL,
  DELETE_MAIN_JOB_SUCCESS,
  DELETE_MAIN_JOB_REQUEST,
  ADD_NEW_SUB_JOB_REQUEST,
  ADD_NEW_SUB_JOB_SUCCESS,
  ADD_NEW_SUB_JOB_FAIL,
  UPDATE_SUB_JOB_SUCCESS,
  UPDATE_SUB_JOB_REQUEST,
  UPDATE_SUB_JOB_FAIL,
  DELETE_SUB_JOB_REQUEST,
  DELETE_SUB_JOB_SUCCESS,
  DELETE_SUB_JOB_FAIL,
  GET_JOB_LIST_REQ,
  GET_MAIN_TYPE_JOB_LIST_SUCC,
  GET_MAIN_TYPE_JOB_LIST_FAIL,
  GET_SUB_TYPE_JOB_LIST_SUCC,
  GET_SUB_TYPE_JOB_LIST_FAIL,
  DELETE_JOB_REQ,
  DELETE_JOB_SUCC,
  DELETE_JOB_FAIL,
  GET_JOB_DETAIL_REQ,
  GET_JOB_DETAIL_SUCC,
  GET_JOB_DETAIL_FAIL,
  UPDATE_JOB_DETAIL_REQ,
  UPDATE_JOB_DETAIL_FAIL,
  GET_ALL_JOB_REQ,
  GET_ALL_JOB_SUCC,
  GET_ALL_JOB_FAIL,
} from "./types";
const initialState = {
  mainJob: [],
  loading: false,
  loadingAction: false,
  isError: false,
  note: "",
  jobList: [],
  dataSatictis: [],
  jobDetail: null,
  typeNote: "",
};

const JobManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MAIN_JOB_REQUEST: 
      return { ...state, loading: true, isError: false };
    
    case GET_MAIN_JOB_SUCCESS: 
      return { ...state, loading: false, mainJob: payload, isError: false };
    
    case GET_MAIN_JOB_FAIL: 
      return { ...state, loading: false, isError: true };
    
    case ADD_NEW_MAIN_JOB_REQUEST: 
      return { ...state, loadingAction: true, isError: false };
    
    case ADD_NEW_MAIN_JOB_SUCCESS: 
      const listMainJobType = [...state.mainJob];
      listMainJobType.push(payload);
      return {
        ...state,
        loadingAction: false,
        mainJob: listMainJobType,
        isError: false,
      };
    
    case ADD_NEW_MAIN_JOB_FAIL: 
      return { ...state, loadingAction: false, isError: true };
    
    case UPDATE_MAIN_JOB_REQUEST: 
      return { ...state, loadingAction: true, isError: false };
    
    case UPDATE_MAIN_JOB_SUCCESS: {
      const listMainJobType = [...state.mainJob];
      const jobIndex = listMainJobType.findIndex((job) => {
        return job._id === payload._id;
      });
      if (jobIndex !== -1) {
        listMainJobType[jobIndex] = payload;
      }
      return {
        ...state,
        loadingAction: false,
        mainJob: listMainJobType,
        isError: false,
      };
    }
    case UPDATE_MAIN_JOB_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case DELETE_MAIN_JOB_REQUEST: {
      return { ...state, loadingAction: true, isError: false };
    }
    case DELETE_MAIN_JOB_SUCCESS: {
      const listMainJobType = [...state.mainJob];
      const jobIndex = listMainJobType.findIndex((job) => {
        return job._id === payload;
      });
      if (jobIndex !== -1) {
        listMainJobType.splice(jobIndex, 1);
      }
      return {
        ...state,
        loadingAction: false,
        mainJob: listMainJobType,
        isError: false,
      };
    }
    case DELETE_MAIN_JOB_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case ADD_NEW_SUB_JOB_REQUEST: {
      return { ...state, loadingAction: true, isError: false };
    }
    case ADD_NEW_SUB_JOB_SUCCESS: {
      const listSubJobType = [...state.mainJob];
      const jobIndex = listSubJobType.findIndex((job) => {
        return job._id === payload.typeJob;
      });
      if (jobIndex !== -1) {
        listSubJobType[jobIndex].subTypeJobs.push(payload);
      }
      return {
        ...state,
        loadingAction: false,
        mainJob: listSubJobType,
        isError: false,
      };
    }
    case ADD_NEW_SUB_JOB_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case UPDATE_SUB_JOB_REQUEST: {
      return { ...state, loadingAction: true, isError: false };
    }
    case UPDATE_SUB_JOB_SUCCESS: {
      const listSubJobType = [...state.mainJob];
      const jobIndex = listSubJobType.findIndex((job) => {
        return job._id === payload.typeJob;
      });
      if (jobIndex !== -1) {
        const subJobIdx = listSubJobType[jobIndex].subTypeJobs.findIndex(
          (subJob) => {
            return subJob._id === payload._id;
          }
        );
        if (subJobIdx !== -1) {
          listSubJobType[jobIndex].subTypeJobs[subJobIdx] = payload;
        }
      }
      return {
        ...state,
        loadingAction: false,
        mainJob: listSubJobType,
        isError: false,
      };
    }
    case UPDATE_SUB_JOB_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case DELETE_SUB_JOB_REQUEST: {
      return { ...state, loadingAction: true, isError: false };
    }
    case DELETE_SUB_JOB_SUCCESS: {
      const listSubJobType = [...state.mainJob];
      const jobIndex = listSubJobType.findIndex((job) => {
        return job._id === payload.typeJob;
      });
      if (jobIndex !== -1) {
        const subJobIdx = listSubJobType[jobIndex].subTypeJobs.findIndex(
          (subJob) => {
            return subJob._id === payload._id;
          }
        );
        if (subJobIdx !== -1) {
          listSubJobType[jobIndex].subTypeJobs.splice(subJobIdx, 1);
        }
      }
      return {
        ...state,
        loadingAction: false,
        mainJob: listSubJobType,
        isError: false,
      };
    }
    case DELETE_SUB_JOB_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case GET_JOB_LIST_REQ: {
      return { ...state, loadingAction: true, isError: false };
    }
    case GET_MAIN_TYPE_JOB_LIST_SUCC: {
      return {
        ...state,
        loadingAction: false,
        isError: false,
        jobList: payload,
      };
    }
    case GET_MAIN_TYPE_JOB_LIST_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case GET_SUB_TYPE_JOB_LIST_SUCC: {
      return {
        ...state,
        loadingAction: false,
        isError: false,
        jobList: payload,
      };
    }
    case GET_SUB_TYPE_JOB_LIST_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case DELETE_JOB_REQ: {
      return { ...state, loadingAction: true, isError: false };
    }
    case DELETE_JOB_SUCC: {
      return {
        ...state,
        loadingAction: false,
        isError: false,
        jobList: payload,
      };
    }
    case DELETE_JOB_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case GET_JOB_DETAIL_REQ: {
      return { ...state, loading: true, isError: false };
    }
    case GET_JOB_DETAIL_SUCC: {
      return {
        ...state,
        loading: false,
        loadingAction: false,
        isError: false,
        jobDetail: payload,
      };
    }
    case GET_JOB_DETAIL_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case UPDATE_JOB_DETAIL_REQ: {
      return { ...state, loadingAction: true, isError: false };
    }
    case UPDATE_JOB_DETAIL_FAIL: {
      return { ...state, loadingAction: false, isError: true };
    }
    case GET_ALL_JOB_REQ: {
      return { ...state, loadding: true, isError: false };
    }
    case GET_ALL_JOB_SUCC: {
      return {
        ...state,
        loadding: false,
        dataSatictis: payload,
        isError: false,
      };
    }
    case GET_ALL_JOB_FAIL: {
      return { ...state, loadding: false, isError: true };
    }
    default:
      return state;
  }
};

export default JobManagementReducer;
