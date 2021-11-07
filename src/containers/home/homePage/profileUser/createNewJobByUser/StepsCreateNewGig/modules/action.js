import jobApi from "apis/jobApi";
import messageConfig from "components/Message/message";
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
      .catch((err) => {
        messageConfig.error();

        console.log(err?.response);
      });
  };
};
