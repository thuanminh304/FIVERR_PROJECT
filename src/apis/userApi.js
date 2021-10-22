import callApi from "utils/callApi";

const userApi = {
  loginUser(user) {
    return callApi("api/auth/signin", "POST", user);
  },
  getAllUser() {
    return callApi("api/users");
  },
  addNewUser(user) {
    return callApi("api/users", "POST", user);
  },
  getDetailUser(id) {
    return callApi(`api/users/${id}`,"GET");
  },
  editUser(id,user) {
    return callApi(`api/users/${id}`, "PUT",user);
  },
  deleteUser(id) {
    return callApi(`api/users/${id}`, "DELETE");
  },  
  searchUserByName(name){
    return callApi(`api/users/pagination-search?name=${name}&skip=0&limit=0`)
  },
  registerUser(newUser) {
    return callApi(`api/auth/signup`,"POST",newUser);
  }

};

export default userApi;
