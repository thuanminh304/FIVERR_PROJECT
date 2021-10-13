import callApi from "utils/callApi";

// const user={
//     email:"thuanvm.ssi@gmail.com",
//     password:"111111"
// } chưa làm trang dk thì lấy tạm account này đăng nhập

const userApi = {
  loginUser(user) {
    return callApi("api/auth/signin", user);
  },
};

export default userApi;
