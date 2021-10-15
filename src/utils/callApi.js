import axios from "axios";
import { BASE_URL, tokenClass } from "setting/apiConfig";

const callApi = (endpoint, method = "GET", data = null, token = null) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers:
      token
        ? {
            token: token,
            tokenByClass: tokenClass,
          }
        :{
          tokenByClass: tokenClass,
        },
  });
};

export default callApi;
