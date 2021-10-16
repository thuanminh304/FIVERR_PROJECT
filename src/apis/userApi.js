import callApi from "utils/callApi";

const userApi = {
  loginUser(user) {
    return callApi("api/auth/signin","POST", user);
  },

  getAllUser(token){
    return callApi('api/users',token)
  }
,
  deleteUser(id){
    return callApi(`api/users/${id}`,"DELETE")
  }
};

export default userApi;
