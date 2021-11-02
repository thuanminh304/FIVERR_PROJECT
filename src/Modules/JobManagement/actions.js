import {
  GET_MAIN_JOB_REQUEST,
  GET_MAIN_JOB_SUCCESS,
  GET_MAIN_JOB_FAIL,
  ADD_NEW_MAIN_JOB_REQUEST,
  ADD_NEW_MAIN_JOB_SUCCESS,
  ADD_NEW_MAIN_JOB_FAIL,
  UPDATE_MAIN_JOB_FAIL,
  UPDATE_MAIN_JOB_SUCCESS,
  UPDATE_MAIN_JOB_REQUEST,
  DELETE_MAIN_JOB_FAIL,
  DELETE_MAIN_JOB_SUCCESS,
  DELETE_MAIN_JOB_REQUEST,
  ADD_NEW_SUB_JOB_REQUEST,
  ADD_NEW_SUB_JOB_SUCCESS,
  ADD_NEW_SUB_JOB_FAIL,
  UPDATE_SUB_JOB_REQUEST,
  UPDATE_SUB_JOB_SUCCESS,
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
} from "./types";
import jobApi from "apis/jobApi";
// get type of main job lists
const actGetMainJobListReq = () => ({
  type: GET_MAIN_JOB_REQUEST,
});
const actGetMainJobListSucc = (mainJobList) => ({
  type: GET_MAIN_JOB_SUCCESS,
  payload: mainJobList,
});
const actGetMainJobListFail = (error) => ({
  type: GET_MAIN_JOB_FAIL,
  payload: error,
});

export const actGetMainJobList = () => {
  return (dispatch) => {
    dispatch(actGetMainJobListReq());
    jobApi
      .getMainJob()
      .then((res) => {
        dispatch(actGetMainJobListSucc(res.data));
      })
      .catch((error) => {
        dispatch(actGetMainJobListFail(error));
      });
  };
};

// add new main job
const actAddNewMainJobReq = () => ({
  type: ADD_NEW_MAIN_JOB_REQUEST,
});
const actAddNewMainJobSucc = (newData) => ({
  type: ADD_NEW_MAIN_JOB_SUCCESS,
  payload: newData,
});
const actAddNewMainJobFail = (error) => ({
  type: ADD_NEW_MAIN_JOB_FAIL,
  payload: error,
});
export const actAddNewMainJob = (newData) => {
  return (dispatch) => {
    dispatch(actAddNewMainJobReq());
    jobApi
      .addNewMainJob(newData)
      .then((res) => {
        dispatch(actAddNewMainJobSucc(res.data));
      })
      .catch((error) => {
        dispatch(actAddNewMainJobFail(error));
      });
  };
};

// update main job
const actUpdateMainJobReq = () => ({
  type: UPDATE_MAIN_JOB_REQUEST,
});
const actUpdateMainJobSucc = (newData) => ({
  type: UPDATE_MAIN_JOB_SUCCESS,
  payload: newData,
});
const actUpdateMainJobFail = (error) => ({
  type: UPDATE_MAIN_JOB_FAIL,
  payload: error,
});
export const actUpdateMainJob = (id, data) => {
  return (dispatch) => {
    dispatch(actUpdateMainJobReq());
    jobApi
      .updateMainJon(id, data)
      .then((res) => {
        const newData = { ...res.data };
        newData.name = data.name;
        dispatch(actUpdateMainJobSucc(newData));
      })
      .catch((error) => {
        dispatch(actUpdateMainJobFail(error));
      });
  };
};

// delete main job
const actdeleteMainJobReq = () => ({
  type: DELETE_MAIN_JOB_REQUEST,
});
const actdeleteMainJobSucc = (id) => ({
  type: DELETE_MAIN_JOB_SUCCESS,
  payload: id,
});
const actdeleteMainJobFail = (error) => ({
  type: DELETE_MAIN_JOB_FAIL,
  payload: error,
});

export const actDeleteMainJob = (id) => {
  return (dispatch) => {
    dispatch(actdeleteMainJobReq());
    jobApi
      .deleteMainJob(id)
      .then((res) => {
        dispatch(actdeleteMainJobSucc(id));
      })
      .catch((error) => {
        dispatch(actdeleteMainJobFail(error));
      });
  };
};

// add new sub job type

const actAddNewSubJobTypeReq = () => ({
  type: ADD_NEW_SUB_JOB_REQUEST,
});

const actAddNewSubJobTypeSuc = (data) => ({
  type: ADD_NEW_SUB_JOB_SUCCESS,
  payload: data,
});

const actAddNewSubJobTypeFail = (error) => ({
  type: ADD_NEW_SUB_JOB_FAIL,
  payload: error,
});

export const actAddNewSubJobType = (data) => {
  return (dispatch) => {
    dispatch(actAddNewSubJobTypeReq());
    jobApi
      .addNewSubJobType(data)
      .then((res) => {
        dispatch(actAddNewSubJobTypeSuc(res.data));
      })
      .catch((error) => {
        dispatch(actAddNewSubJobTypeFail(error));
      });
  };
};

// update sub job type

const actUpdateSubJobTypeReq = () => ({
  type: UPDATE_SUB_JOB_REQUEST,
});

const actUpdateSubJobTypeSuc = (data) => ({
  type: UPDATE_SUB_JOB_SUCCESS,
  payload: data,
});

const actUpdateSubJobTypeFail = (error) => ({
  type: UPDATE_SUB_JOB_FAIL,
  payload: error,
});

export const actUpdateSubJob = (id, data) => {
  return (dispatch) => {
    dispatch(actUpdateSubJobTypeReq());
    jobApi
      .updateSubJobType(id, data)
      .then((res) => {
        const newData = { ...res.data };
        newData.name = data.name;
        dispatch(actUpdateSubJobTypeSuc(newData));
      })
      .catch((error) => {
        dispatch(actUpdateSubJobTypeFail(error));
      });
  };
};

// delete sub job type

const actDeleteSubJobTypeReq = () => ({
  type: DELETE_SUB_JOB_REQUEST,
});
const actDeleteSubJobTypeSuc = (data) => ({
  type: DELETE_SUB_JOB_SUCCESS,
  payload: data,
});

const actDeleteSubJobTypeFail = (error) => ({
  type: DELETE_SUB_JOB_FAIL,
  payload: error,
});

export const actDeleteSubJobType = (id) => {
  return (dispatch) => {
    dispatch(actDeleteSubJobTypeReq());
    jobApi
      .deleteSubJobType(id)
      .then((res) => {
        dispatch(actDeleteSubJobTypeSuc(res.data));
      })
      .catch((error) => {
        dispatch(actDeleteSubJobTypeFail(error));
      });
  };
};

// get main type job lists

const actGetMainJobReq = () => ({
  type: GET_JOB_LIST_REQ,
});
const actGetMainJobSucc = (data) => ({
  type: GET_MAIN_TYPE_JOB_LIST_SUCC,
  payload: data,
});
const actGetMainJobFail = (error) => ({
  type: GET_MAIN_TYPE_JOB_LIST_FAIL,
  payload: error,
});
export const actGetMainJob = (id) => {
  return (dispatch) => {
    dispatch(actGetMainJobReq());
    jobApi
      .getMainJobList(id)
      .then((res) => {
        dispatch(actGetMainJobSucc(res.data));
      })
      .catch((error) => {
        dispatch(actGetMainJobFail(error));
      });
  };
};

// get sub type job lists
const actGetSubJobSucc = (data) => ({
    type: GET_SUB_TYPE_JOB_LIST_SUCC,
    payload: data,
});
const actGetSubJobFail = (error) => ({
    type: GET_SUB_TYPE_JOB_LIST_FAIL,
    payload: error,
});

export const actGetSubJob = (id) => {
    return dispatch => {
        dispatch(actGetMainJobReq());
        jobApi
          .getSubJobList(id)
          .then((res) => {
            dispatch(actGetSubJobSucc(res.data));
          })
          .catch((error) => {
            dispatch(actGetSubJobFail(error));
          });
    }
}

// delete job
const actDeleteJobReq = () => ({
  type: DELETE_JOB_REQ,
});
const actDeleteJobSucc = (data) => ({
  type: DELETE_JOB_SUCC,
  payload: data,
});
const actDeleteJobFail = (error) => ({
  type: DELETE_JOB_FAIL,
  payload: error,
});
export const actDeleteJob = (id) => {
  return (dispatch,getState)=> {
    dispatch(actDeleteJobReq());
    jobApi.deleteJob(id).then(res=>{
      const {jobList} = getState().JobManagementReducer;
      const jobIdx = jobList.findIndex(job => job._id === id);
      if(jobIdx !== -1) {
        jobList.splice(jobIdx, 1);
      };
      const jobData = [...jobList];
      dispatch(actDeleteJobSucc(jobData));
    })
    .catch(error=>{
      dispatch(actDeleteJobFail(error));
    });
  };
};

// get job detail 
const actGetJobDetailReq = () => ({
  type: GET_JOB_DETAIL_REQ,
});
const actGetJobDetailSucc = (data) => ({
  type: GET_JOB_DETAIL_SUCC,
  payload: data,
});
const actGetJobDetailFail = (error) => ({
  type: GET_JOB_DETAIL_FAIL,
  payload: error,
});
export const actGetJobDetail = (id) => {
  return (dispatch, getState) => {
    dispatch(actGetJobDetailReq());
    jobApi.getJobDetail(id).then(res=>{
      const {listAllUser} = getState().managementUserReducer;
      const userCreated = listAllUser.find(user=>{
        return user._id = res.data.userCreated;
      });
      let userName = userCreated?.name;
      if(!userName) {
        userName = 'No Name';
      }
      const data = {...res.data, userCreated: userName};
      dispatch(actGetJobDetailSucc(data));
    })
    .catch(error=>{
      dispatch(actGetJobDetailFail(error));
    });
  };
};