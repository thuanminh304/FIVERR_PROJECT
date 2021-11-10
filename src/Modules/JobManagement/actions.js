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
  UPDATE_JOB_DETAIL_REQ,
  UPDATE_JOB_DETAIL_SUCC,
  UPDATE_JOB_DETAIL_FAIL,
  GET_ALL_JOB_REQ,
  GET_ALL_JOB_SUCC,
  GET_ALL_JOB_FAIL,
} from "./types";
import jobApi from "apis/jobApi";
import { actShowNote, actTurnOffNote } from "containers/admin/Header/modules/actions";
import { RevertData } from 'setting/RevertData';
import { RevertUser } from "setting/RevertDataUser";
import userApi from "apis/userApi";
import { actGetUserSatictis } from "containers/admin/user/module/action";

export const showNote = (dispatch, getState, typeNote, contentNote) => {
    const {isNote} = getState().AdminDashBoardSettingReducer;
    if(isNote){
      dispatch(actTurnOffNote());
    }
    const note = {type: typeNote, content: contentNote};
    console.log()
    dispatch(actShowNote(note));
}


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
  return (dispatch,getState) => {
    dispatch(actAddNewMainJobReq());
    jobApi
      .addNewMainJob(newData)
      .then((res) => {
        dispatch(actAddNewMainJobSucc(res.data));
        showNote(dispatch, getState,'complete','Add New Type Job Complete');
      })
      .catch((error) => {
        dispatch(actAddNewMainJobFail(error));
        showNote(dispatch, getState,'error','Add New Type Job Fail');
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
  return (dispatch, getState) => {
    dispatch(actUpdateMainJobReq());
    jobApi
      .updateMainJon(id, data)
      .then((res) => {
        const newData = { ...res.data };
        newData.name = data.name;
        dispatch(actUpdateMainJobSucc(newData));
        showNote(dispatch, getState,'complete','Update Type Job Name Complete');
      })
      .catch((error) => {
        dispatch(actUpdateMainJobFail(error));
        showNote(dispatch, getState,'error','Update Type Job Name Fail');
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
  return (dispatch, getState) => {
    const {isNote} = getState().AdminDashBoardSettingReducer;
    dispatch(actdeleteMainJobReq());
    jobApi
      .deleteMainJob(id)
      .then((res) => {
        dispatch(actdeleteMainJobSucc(id));
        showNote(dispatch, getState,'complete','Delete Type Job Name Complete');
      })
      .catch((error) => {
        dispatch(actdeleteMainJobFail(error));
        showNote(dispatch, getState,'error','Delete Type Job Name Fail');
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
  return (dispatch, getState) => {
    dispatch(actAddNewSubJobTypeReq());
    jobApi
      .addNewSubJobType(data)
      .then((res) => {
        dispatch(actAddNewSubJobTypeSuc(res.data));
        showNote(dispatch, getState,'complete','Add New SubType Job Name Complete');
      })
      .catch((error) => {
        dispatch(actAddNewSubJobTypeFail(error));
        showNote(dispatch, getState,'error','Add New SubType Job Name Fail');
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
  return (dispatch, getState) => {
    dispatch(actUpdateSubJobTypeReq());
    jobApi
      .updateSubJobType(id, data)
      .then((res) => {
        const newData = { ...res.data };
        newData.name = data.name;
        dispatch(actUpdateSubJobTypeSuc(newData));
        showNote(dispatch, getState,'complete','Update SubType Job Name Complete');
      })
      .catch((error) => {
        dispatch(actUpdateSubJobTypeFail(error));
        showNote(dispatch, getState,'error','Update SubType Job Name Fail');
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
  return (dispatch, getState) => {
    dispatch(actDeleteSubJobTypeReq());
    jobApi
      .deleteSubJobType(id)
      .then((res) => {
        dispatch(actDeleteSubJobTypeSuc(res.data));
        showNote(dispatch, getState,'complete','Delete SubType Job Name Complete');
      })
      .catch((error) => {
        dispatch(actDeleteSubJobTypeFail(error));
        showNote(dispatch, getState,'error','Delete SubType Job Name Fail');
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
      showNote(dispatch, getState,'complete','Delete Job Complete');
    })
    .catch(error=>{
      dispatch(actDeleteJobFail(error));
      showNote(dispatch, getState,'error','Delete Job Fail');
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
      const userBooking = listAllUser.find(user=>{
        return user._id = res.data.usersBooking;
      });
      let userBookingName = userBooking?.name;
      let userName = userCreated?.name;
      if(!userName) {
        userName = 'No Name';
      };
      const data = {...res.data, userCreatedName: userName, userBookingName: userBookingName};
      dispatch(actGetJobDetailSucc(data));
    })
    .catch(error=>{
      dispatch(actGetJobDetailFail(error));
    });
  };
};

// update job detail
const actUpdateJobDetailReq = () => ({
  type: UPDATE_JOB_DETAIL_REQ,
});
const actUpdateJobDetailFail = (error) => ({
  type: UPDATE_JOB_DETAIL_FAIL,
  payload: error,
});
export const actUpdateJobDetail = (id, data, image=null) => {
  return (dispatch, getState) => {
    dispatch(actUpdateJobDetailReq());
    jobApi.updateJobDetail(id,data).then(res=>{
      if(!image){
        dispatch(actGetJobDetail(id));
        showNote(dispatch, getState,'complete','Update Job Complete');
      }
      else{
        jobApi.updateJobImage(id,image).then(res=>{
          dispatch(actGetJobDetail(id));
          showNote(dispatch, getState,'complete','Update Job Complete');
        })
        .catch(error=>{
          dispatch(actUpdateJobDetailFail(error));
        });
      }
    })
    .catch(error=>{
      dispatch(actUpdateJobDetailFail(error));
      showNote(dispatch, getState,'error','Update Job Fail');
    });
  };
};

// get all job
const actGetAllJobReq = () => ({
  type: GET_ALL_JOB_REQ,
});
const actGetAllJobSucc = (data) => ({
  type: GET_ALL_JOB_SUCC,
  payload: data,
});
const actGetAllJobFail = (error) => ({
  type: GET_ALL_JOB_FAIL,
  payload: error,
});
export const actGetAllJob = () => {
  return (dispatch,getState)=>{
    dispatch(actGetAllJobReq());
    jobApi.getAllJob().then(jobRes=>{
      const dataSort = RevertData(jobRes.data);
      userApi.getAllUser().then(userRes=>{
        const userSatictis = RevertUser(userRes.data,jobRes.data);
        console.log(userSatictis);
        dispatch(actGetUserSatictis(userSatictis))
        dispatch(actGetAllJobSucc(dataSort));
      })
      .catch(error=> {
        dispatch(actGetAllJobFail(error));
      })
    })
    .catch(error=>{
      dispatch(actGetAllJobFail(error));
    });
  };
};