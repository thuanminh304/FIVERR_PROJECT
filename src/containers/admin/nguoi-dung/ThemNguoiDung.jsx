import React from "react";
import { Form, Input, Button, Select } from "antd";
import { useFormik } from "formik";
import userApi from "apis/userApi";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllUser } from "./module/action";
import { NavLink } from "react-router-dom";
import * as yup from "yup";

//CONTENT
export default function ThemNguoiDung() {
  const dispatch = useDispatch();
  //tạo form để lưu trừ thông tin nhập từ input
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: null,
      role: "",
      skill: "",
      certification: "",
    },
    // validationSchema: yup.object({
    //   taiKhoan: yup.string().matches(/^\w+$/).required(),
    //   matKhau: yup
    //     .string()
    //     .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/)
    //     .required(),
    //   email: yup.string().email().required("Email không đúng định dạng"),
    //   soDt: yup
    //     .string()
    //     .matches(/^[0-9]*$/)
    //     .max(10)
    //     .required("Số điện thoại chưa đúng định dạng !"),
    //   maNhom: yup.string(),
    //   maLoaiNguoiDung: yup.string().required("Bạn chưa chọn loại người dùng !"),
    //   hoTen: yup
    //     .string()
    //     .matches(
    //       /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
    //     )
    //     .required(),
    // }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleChangeGender = (value) => {
    formik.setFieldValue("gender", value);
  }; const handleChangeRole = (value) => {
    formik.setFieldValue("role", value);
  };
  // tạo biến riêng để tránh sử dụng lại nhiều ảnh hưởng performance
  const errors = formik.errors;
  const touched = formik.touched;
  const values = formik.values;
  return (
    <>
      <h1>THÊM NGƯỜI DÙNG </h1>
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
        <Form.Item>
          <label>Họ tên</label>
          <Input name="name" onChange={formik.handleChange} />
          {/* {errors.taiKhoan &&
            touched.taiKhoan &&
            (values.taiKhoan === "" ? (
              <div className="styleErrors">
                <p>_ Không được để trống</p>
                <p>_ Không sử dụng dấu câu và các ký tự đặc biệt</p>
              </div>
            ) : (
              <div className="styleErrors">
                <p>_ Không sử dụng dấu câu và các ký tự đặc biệt</p>
              </div>
            ))} */}
        </Form.Item>
        <Form.Item>
          <label htmlFor="">Mật khẩu</label>
          <Input name="password" onChange={formik.handleChange} />
          {/* {errors.matKhau &&
            touched.matKhau &&
            (values.matKhau.length < 6 || values.matKhau.length > 10 ? (
              <div className="styleErrors">
                <p>_ Độ dài ký tự từ 6 đến 10</p>
                <p>_ Không sử dụng kí tự đặc biệt</p>
                <p>_ Ít nhất 1 kí tự thường , hoa và chữ số</p>
              </div>
            ) : (
              <div className="styleErrors">
                <p>_ Không sử dụng kí tự đặc biệt</p>
                <p>_ Ít nhất 1 kí tự thường , hoa và chữ số</p>
              </div>
            ))} */}
        </Form.Item>
        <Form.Item>
          <label htmlFor="">Email</label>
          <Input name="email" onChange={formik.handleChange} />
          {/* {errors.hoTen &&
            touched.hoTen &&
            (values.hoTen === "" ? (
              <div className="styleErrors">
                <p>_ Không được để trống</p>
                <p>_ Không chứa các kí tự đặc biệt và dấu câu</p>
              </div>
            ) : (
              <div className="styleErrors">
                <p>_ Không chứa các kí tự đặc biệt và dấu câu</p>
              </div>
            ))} */}
        </Form.Item>
        <Form.Item>
          <label htmlFor="">Số điện thoại</label>
          <Input
            name="phone"
            placeholder="Nhập số điện thoại"
            onChange={formik.handleChange}
          />
          {/* {errors.soDt &&
            touched.soDt &&
            (values.soDt === "" ? (
              <div className="styleErrors">
                <p>_ Không được để trống</p>
                <p>_ Số điện thoại không đúng định dạng</p>
              </div>
            ) : (
              <div className="styleErrors">
                <p>_ Số điện thoại không đúng định dạng</p>
              </div>
            ))} */}
        </Form.Item>
        <Form.Item>
          <label htmlFor="">Ngày sinh</label>
          <Input name="birthday" onChange={formik.handleChange} />
          {/* {errors.email &&
            touched.email &&
            (values.email === "" ? (
              <div className="styleErrors">
                <p>_ Không được để trống</p>
                <p>_ Email không đúng định dạng</p>
              </div>
            ) : (
              <div className="styleErrors">
                <p>_ Email không đúng định dạng</p>
              </div>
            ))} */}
        </Form.Item>
        <Form.Item>
          <label htmlFor="">Giới tính</label>
          <Select
            name="gender"
            options={[
              { label: "Nam", value: true },
              { label: "Nữ", value: false },
            ]}
            onChange={handleChangeGender}
          />
          {/* {formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung && (
            <div className="styleErrors">
              <p>{formik.errors.maLoaiNguoiDung}</p>
            </div>
          )} */}
        </Form.Item>
        <Form.Item>
          <label htmlFor="">Phân loại</label>
          <Select
            name="role"
            options={[
              { label: "ADMIN", value: "ADMIN" },
              { label: "CLIENT", value: "CLIENT" },
            ]}
            onChange={handleChangeRole}
          />
          {/* {formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung && (
            <div className="styleErrors">
              <p>{formik.errors.maLoaiNguoiDung}</p>
            </div>
          )} */}
        </Form.Item>
        <Form.Item>
          <label htmlFor="">Kỹ năng</label>
          <Input name="skill" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item>
          <label htmlFor="">Bằng cấp</label>
          <Input name="certification" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item className="btn-them-moi" style={{ marginLeft: "295px" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button btnAdd"
          >
            Thêm
          </Button>
          <NavLink to="/admin/quan-ly-nguoi-dung">
            <Button type="primary" className="login-form-button btnBack ml-5">
              Quay lại
            </Button>
          </NavLink>
        </Form.Item>
      </Form>
    </>
  );
}
