import jobApi from "apis/jobApi";
import { CREATE_JOB_BY_USER, GET_DETAIL_TYPE_MAINJOB } from "./type";

export const actGetDetailTypeMainjob = (id) => {
  return (dispatch) => {
    jobApi
      .getDetailTypeMainjob(id)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_DETAIL_TYPE_MAINJOB,
          payload: res?.data,
        });
      })
      .catch((err) => console.log(err?.response));
  };
};

export const actCreateJobByUser = (formJob) => {
  return (dispatch) => {
    jobApi
      .createNewJobByUser(formJob)
      .then((res) => {
        dispatch({
          type: CREATE_JOB_BY_USER,
          payload: res?.data,
        });
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };
};
