import axios from "axios";
import { BASE_URL } from "setting/apiConfig";
let tokenByClass =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxMiIsIkhldEhhblN0cmluZyI6IjA4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NjY5NzYwMDAwMCIsIm5iZiI6MTYxNzkwMTIwMCwiZXhwIjoxNjQ2ODQ1MjAwfQ.mPmSkXNXN1frPpzs9CbkOn1tlxu1XGzuT_3jPckLDnU";

const callApi = (endpoint, method = "GET", data = null, token = null) => {
  if (localStorage.getItem("token")) {
     token = JSON.parse(localStorage.getItem("token"));
    
  }
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers:
      tokenByClass || token
        ? {
            token: token,
            tokenByClass: tokenByClass,
          }
        : null,
  });
};

export default callApi;
