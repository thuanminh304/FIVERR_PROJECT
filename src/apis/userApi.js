import callApi from "utils/callApi";

// const user={
//     email:"thuanvm.ssi@gmail.com",
//     password:"111111"
// } chưa làm trang dk thì lấy tạm account này đăng nhập

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
};

export default userApi;
