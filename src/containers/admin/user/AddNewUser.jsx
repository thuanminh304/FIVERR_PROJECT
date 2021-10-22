import React from "react";
import { Form, Input, Button, Select, DatePicker ,message} from "antd";
import { useFormik } from "formik";
import userApi from "apis/userApi";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as yup from "yup";
import moment from "moment";
import "./user.scss";
//CONTENT
export default function ThemNguoiDung() {
  const dispatch = useDispatch();
  const history = useHistory();
  //tạo form để lưu trừ thông tin nhập từ input
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: "",
      role: "",
      skill: [],
      certification: [],
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/)
        .required(),
      email: yup.string().email().min(6).required("- Email không đúng định dạng"),
      phone: yup
        .string()
        .matches(/^[0-9]*$/)
        .max(10)
        .required("Số điện thoại chưa đúng định dạng !"),
      gender: yup.string().required("- Vui lòng chọn !"),
      role: yup.string().required("- Vui lòng chọn !"),
      name: yup
        .string()
        .matches(
          /^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ ]+$/
        )
        .required(),
      birthday: yup.string().required("- Vui lòng chọn !"),
    }),
    onSubmit: (values) => {
      console.log(values);
      userApi
        .addNewUser(values)
        .then((res) => {
          message.loading({ content: "Đang tải...", key: "updatable" });
          setTimeout(() => {
            message.success({
              content: "Thành công !",
              key: "updatable",
              duration: 2,
            });
          }, 1000);
          setTimeout(() => {
            history.goBack();
          }, 2000);
        })
        .catch((err) => {
          message.loading({ content: "Đang tải...", key: "updatable" });
          setTimeout(() => {
            message.error({
              content: "Lỗi! Email đã tồn tại",
              key: "updatable",
              duration: 2,
            });
          }, 1000);
        });
    },
  });
  const handleChangeGender = (value) => {
    formik.setFieldValue("gender", value);
  };
  const handleChangeRole = (value) => {
    formik.setFieldValue("role", value);
  };
  const handleChangeSkill = (value) => {
    formik.setFieldValue("skill", value.target.value.split(","));
  };
  const handleChangeCert = (value) => {
    formik.setFieldValue("certification", value.target.value.split(","));
  };
  const handleChangeDate = (value) => {
    formik.setFieldValue("birthday", moment(value).format("YYYY-MM-DD"));
  };
  // tạo biến riêng để tránh sử dụng lại nhiều ảnh hưởng performance
  const errors = formik.errors;
  const touched = formik.touched;
  const values = formik.values;
  return (
    <>
      <h1 className="form-title-them-moi">THÊM NGƯỜI DÙNG </h1>
      <Form
        className="text-left"
        onSubmitCapture={formik.handleSubmit}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
      >
        <div className="row form-them-moi">
          <div className="col-6">
            <Form.Item>
              <label>Họ tên</label>
              <Input
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Nhập họ tên"
              />
              {errors.name &&
                touched.name &&
                (values.name === "" ? (
                  <div className="styleErrors">
                    <p>- Không được để trống</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>- Không dùng dấu câu, ký tự số và ký tự đặc biệt</p>
                  </div>
                ))}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Mật khẩu</label>
              <Input
                name="password"
                onChange={formik.handleChange}
                placeholder="Nhập mật khẩu"
              />
              {errors.password &&
                touched.password &&
                (values.password.length < 6 || values.password.length > 10 ? (
                  <div className="styleErrors">
                    <p>- Độ dài ký tự từ 6 đến 10</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>
                      - Ít nhất 1 kí tự thường , hoa và ký tự số. Không dùng ký
                      tự đặc biệt và dấu câu
                    </p>
                  </div>
                ))}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Email</label>
              <Input
                name="email"
                onChange={formik.handleChange}
                placeholder="abc@example.com"
              />
              {errors.email &&
                touched.email &&
                (values.email === "" ? (
                  <div className="styleErrors">
                    <p>- Không được để trống</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>- Email không đúng định dạng</p>
                    <p>- Email phải trên 6 ký tự và không có ký tự đặc biệt</p>
                  </div>
                ))}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Số điện thoại</label>
              <Input
                name="phone"
                placeholder="Nhập số điện thoại"
                onChange={formik.handleChange}
              />
              {errors.phone &&
                touched.phone &&
                (values.phone === "" ? (
                  <div className="styleErrors">
                    <p>- Không được để trống</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>- Số điện thoại không đúng định dạng</p>
                  </div>
                ))}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Ngày sinh</label> <br />
              <DatePicker
                name="birthday"
                format="YYYY-MM-DD"
                placeholder="Chọn ngày"
                onChange={handleChangeDate}
              />
              {errors.birthday && touched.birthday && (
                <div className="styleErrors">
                  <p>{errors.birthday}</p>
                </div>
              )}
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item>
              <label htmlFor="">Giới tính</label>
              <Select
                name="gender"
                placeholder="Vui lòng chọn"
                options={[
                  { label: "Nam", value: true },
                  { label: "Nữ", value: false },
                ]}
                onChange={handleChangeGender}
              />
              {errors.gender && touched.gender && (
                <div className="styleErrors">
                  <p>{errors.gender}</p>
                </div>
              )}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Phân loại</label>
              <Select
                name="role"
                placeholder="Vui lòng chọn"
                options={[
                  { label: "ADMIN", value: "ADMIN" },
                  { label: "CLIENT", value: "CLIENT" },
                ]}
                onChange={handleChangeRole}
              />
              {errors.role && touched.role && (
                <div className="styleErrors">
                  <p>{errors.role}</p>
                </div>
              )}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Kỹ năng</label>
              <Input
                name="skill"
                onChange={handleChangeSkill}
                placeholder="React, angular,..."
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Bằng cấp</label>
              <Input
                name="certification"
                onChange={handleChangeCert}
                placeholder="Cybersoft, NEU,..."
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item className="btn-them-moi">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button "
          >
            Thêm
          </Button>
          <NavLink to="/admin/management-user">
            <Button type="primary" className="login-form-button  ml-5">
              Quay lại
            </Button>
          </NavLink>
        </Form.Item>
      </Form>
    </>
  );
}
