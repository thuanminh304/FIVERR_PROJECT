import jobApi from "apis/jobApi";
import messageConfig from "components/Message/message";
import { CREATE_JOB_BY_USER, GET_ALL_JOBS_BY_USER } from "./type";

export const actCreateJobByUser = (formJob, [current, setCurrent]) => {
  return (dispatch) => {
    messageConfig.loading();

    jobApi
      .createNewJobByUser(formJob)
      .then((res) => {
        dispatch({
          type: CREATE_JOB_BY_USER,
          payload: res?.data,
        });
        setTimeout(() => {
          setCurrent(current + 1);
        }, 1500);
        setTimeout(() => {
          messageConfig.success();
        }, 1000);
      })
      .catch(() => {
        messageConfig.error();
      });
  };
};

export const actGetAllJobsByUser = () => {
  return (dispatch) => {
    jobApi
      .getAllJob()
      .then((res) => {
        dispatch({
          type: GET_ALL_JOBS_BY_USER,
          payload: res?.data,
        });
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };
};
