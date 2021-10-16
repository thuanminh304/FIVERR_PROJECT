import axios from "axios";
import { BASE_URL, tokenByClass } from "setting/apiConfig";

const callApi = (endpoint, method = "GET", data = null, token = null) => {
  if (localStorage.getItem("fiverrToken")) {
    token = JSON.parse(localStorage.getItem("fiverrToken"));
  }
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers: token
      ? {
          token: token,
          tokenByClass: tokenByClass,
        }
      : { tokenByClass: tokenByClass },
  });
};

export default callApi;
