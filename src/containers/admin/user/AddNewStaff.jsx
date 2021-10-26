import React from "react";
import { Form, Input, Button, Select, DatePicker, message } from "antd";
import { useFormik } from "formik";
import userApi from "apis/userApi";
import { NavLink, useHistory } from "react-router-dom";
import * as yup from "yup";
import moment from "moment";
import "./user.scss";
//CONTENT
export default function ThemNguoiDung() {
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
      role: "ADMIN",
      skill: [],
      certification: [],
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/)
        .required(),
      email: yup
        .string()
        .email()
        .min(6)
        .required("- Email is the incorrect format !"),
      phone: yup
        .string()
        .trim()
        .matches(/^[0-9]*$/)
        .max(10)
        .required("- Must be 10 number characters!"),
      gender: yup.string().required("- Not selected yet !"),
      
      name: yup
        .string()
        .matches(
          /^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ ]+$/
        )
        .required(),
      birthday: yup.string().required("- Not selected yet !"),
    }),
    onSubmit: (values) => {
      console.log(values);
      userApi
        .addNewUser(values)
        .then((res) => {
          message.loading({ content: "Loading...", key: "updatable" });
          setTimeout(() => {
            message.success({
              content: "Success !",
              key: "updatable",
              duration: 2,
            });
          }, 1000);
          setTimeout(() => {
            history.push("/admin/staff/staff-user");
          }, 2000);
        })
        .catch((err) => {
          message.loading({ content: "Loading...", key: "updatable" });
          setTimeout(() => {
            message.error({
              content: "Error !Email already exists",
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
              <label>Name</label>
              <Input
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter name"
              />
              {errors.name &&
                touched.name &&
                (values.name === "" ? (
                  <div className="styleErrors">
                    <p>- Not yet entered</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>- Do not use punctuation, numberic and special characters</p>
                  </div>
                ))}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Password</label>
              <Input
                name="password"
                onChange={formik.handleChange}
                placeholder="Enter password"
              />
              {errors.password &&
                touched.password &&
                (values.password.length < 6 || values.password.length > 10 ? (
                  <div className="styleErrors">
                    <p>- Character length from 6 to 10</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>
                      - At least 1 lowercase, uppercase and numeric character. 
                      Do not use
                       special characters and punctuation
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
                    <p>- Not yet entered</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>- Email is the incorrect format !</p>
                    
                  </div>
                ))}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Phone</label>
              <Input
                name="phone"
                placeholder="Enter phone"
                onChange={formik.handleChange}
              />
              {errors.phone &&
                touched.phone &&
                (values.phone === "" ? (
                  <div className="styleErrors">
                    <p>- Not yet entered !</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>- Must be 10 number characters!</p>
                  </div>
                ))}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Birthday</label> <br />
              <DatePicker
                name="birthday"
                format="YYYY-MM-DD"
                placeholder="Pick date"
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
              <label htmlFor="">Gender</label>
              <Select
                name="gender"
                placeholder="--Option--"
                options={[
                  { label: "Male", value: true },
                  { label: "Female", value: false },
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
              <label htmlFor="">Role</label>
              <Input
              name="role"
              value="ADMIN"
              onChange={formik.handleChange}
disabled              
              />
              
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Skill</label>
              <Input
                name="skill"
                onChange={handleChangeSkill}
                placeholder="React, angular,..."
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Certification</label>
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
            Add
          </Button>
          <Button
            onClick={() => {
              history.goBack();
            }}
            type="primary"
            className="login-form-button  ml-5"
          >
            Back
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
