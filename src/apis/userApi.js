import callApi from "utils/callApi";

const userApi = {
  loginUser(user) {
    return callApi("api/auth/signin","POST", user);
  },

  getAllUser(){
    return callApi('api/users');
  },
  deleteUser(id){
    return callApi(`api/users/${id}`,"DELETE");
  },
  registerUser(newUser) {
    return callApi(`api/auth/signup`,"POST",newUser);
  }
};

export default userApi;
