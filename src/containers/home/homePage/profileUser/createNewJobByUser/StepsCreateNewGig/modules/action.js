import jobApi from "apis/jobApi";
import { GET_DETAIL_TYPE_MAINJOB } from "./type";

export const actGetDetailTypeMainjob = (id) => {
  return (dispatch) => {
    jobApi
      .getDetailTypeMainjob(id)
      .then((res) => {
          console.log(res.data);
        dispatch({
            type:GET_DETAIL_TYPE_MAINJOB,
            payload:res?.data
        })
      })
      .catch((err) => console.log(err?.response));
  };
};
