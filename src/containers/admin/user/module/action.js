import userApi from "apis/userApi";
import { GET_ALL_USER } from "./type";



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


