import jobApi from "apis/jobApi";
import messageConfig from "components/Message/message";
import {
  CREATE_JOB_BY_USER,
  GET_ALL_JOBS_BY_USER,
  GET_LIST_JOB_BOOKED_BY_USER,
  GET_DETAIL_JOB_CREATED_BY_USER,
  GET_DETAIL_SUBTYPE_JOBS,
  GET_LIST_JOBS_BY_NAME,
} from "./type";

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

export const actGetListJobBookedByUser = () => {
  return (dispatch) => {
    jobApi
      .getListJobBookedByUser()
      .then((res) => {
        dispatch({
          type: GET_LIST_JOB_BOOKED_BY_USER,
          payload: res?.data.bookingJob,
        });
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };
};

export const actGetDetailJobCreatedByUser = (id) => {
  return (dispatch) => {
    jobApi
      .getJobDetail(id)
      .then((res) => {
        dispatch({
          type: GET_DETAIL_JOB_CREATED_BY_USER,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err?.response));
  };
};

export const actGetDetailSubTypeJob = (idSubType) => {
  return (dispatch) => {
    jobApi
      .getDetailSubTypeJob(idSubType)
      .then((res) => {
        dispatch({
          type: GET_DETAIL_SUBTYPE_JOBS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err?.response));
  };
};

export const actGetListJobsByName = (name) => {
  return (dispatch) => {
    jobApi
      .getListJobsByName(name)
      .then((res) => {
        dispatch({
          type: GET_LIST_JOBS_BY_NAME,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err?.response));
  };
};

