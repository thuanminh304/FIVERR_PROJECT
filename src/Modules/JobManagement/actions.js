import {GET_MAIN_JOB_REQUEST, GET_MAIN_JOB_SUCCESS,GET_MAIN_JOB_FAIL, ADD_NEW_MAIN_JOB_REQUEST, ADD_NEW_MAIN_JOB_SUCCESS, ADD_NEW_MAIN_JOB_FAIL, UPDATE_MAIN_JOB_FAIL, UPDATE_MAIN_JOB_SUCCESS, UPDATE_MAIN_JOB_REQUEST, DELETE_MAIN_JOB_FAIL, DELETE_MAIN_JOB_SUCCESS, DELETE_MAIN_JOB_REQUEST, ADD_NEW_SUB_JOB_REQUEST, ADD_NEW_SUB_JOB_SUCCESS, ADD_NEW_SUB_JOB_FAIL, UPDATE_SUB_JOB_REQUEST, UPDATE_SUB_JOB_SUCCESS, UPDATE_SUB_JOB_FAIL, DELETE_SUB_JOB_REQUEST, DELETE_SUB_JOB_SUCCESS, DELETE_SUB_JOB_FAIL} from './types';
import jobApi from 'apis/jobApi';
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
    return dispatch => {
        dispatch(actGetMainJobListReq());
        jobApi.getMainJob().then(res=> {
            dispatch(actGetMainJobListSucc(res.data));
        })
        .catch(error=>{
            dispatch(actGetMainJobListFail(error));
        })
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
    return dispatch => {
        dispatch(actAddNewMainJobReq());
        jobApi.addNewMainJob(newData).then(res=>{
            dispatch(actAddNewMainJobSucc(res.data))
        })
        .catch(error=>{
            dispatch(actAddNewMainJobFail(error));
        })
    }
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
export const actUpdateMainJob = (id,data) => {
    return dispatch => {
        dispatch(actUpdateMainJobReq());
        jobApi.updateMainJon(id,data).then(res=>{
            const newData = {...res.data};
            newData.name = data.name;
            dispatch(actUpdateMainJobSucc(newData));
        })
        .catch(error=>{
            dispatch(actUpdateMainJobFail(error));
        })
    }
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
    return dispatch => {
        dispatch(actdeleteMainJobReq());
        jobApi.deleteMainJob(id).then(res=>{
            dispatch(actdeleteMainJobSucc(id));
        })
        .catch(error=>{
            dispatch(actdeleteMainJobFail(error));
        })
    }
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
    return dispatch => {
        dispatch(actAddNewSubJobTypeReq());
        jobApi.addNewSubJobType(data).then(res=>{
            dispatch(actAddNewSubJobTypeSuc(res.data));
        })
        .catch(error=>{
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
    return dispatch => {
        dispatch(actUpdateSubJobTypeReq());
        jobApi.updateSubJobType(id,data).then(res=>{
            const newData = {...res.data};
            newData.name = data.name;
            dispatch(actUpdateSubJobTypeSuc(newData));
        })
        .catch(error=>{
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
    return dispatch => {
        dispatch(actDeleteSubJobTypeReq());
        jobApi.deleteSubJobType(id).then(res=>{
            dispatch(actDeleteSubJobTypeSuc(res.data));
        })
        .catch(error=> {
            dispatch(actDeleteSubJobTypeFail(error));
        })
    }
}