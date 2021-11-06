import userApi from "apis/userApi";
import { GET_ALL_USER, GET_USER_SATICTIS} from "./type";



export const actGetAllUser = () => {
  return (dispatch) => {
    userApi
      .getAllUser()
      .then((res) => {
        dispatch({
          type: GET_ALL_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err?.response.data);
      });
  };
};

export const actGetUserSatictis = (data) => {
  return dispatch => {
    dispatch({
      type: GET_USER_SATICTIS,
      payload: data,
    });
  };
};


