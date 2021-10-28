import React from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { useFormik } from "formik";
import userApi from "apis/userApi";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import moment from "moment";
import "./user.scss";
import messageConfig from "components/Message/message";
import errorForm from "components/showErrors/showError";
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
      userApi
        .addNewUser(values)
        .then(() => {
          messageConfig.loading();
          setTimeout(() => {
            messageConfig.success();
          }, 1000);
          setTimeout(() => {
            history.push("/admin/staff/staff-user");
          }, 2000);
        })
        .catch(() => {
          messageConfig.loading();
          setTimeout(() => {
            messageConfig.error();
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
        <div className="row form-add-new">
          <div className="col-6">
            <Form.Item>
              <label>Name</label>
              <Input
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter name"
              />

              {errorForm.showErrors(
                errors.name,
                touched.name,
                values.name,
                "- Not yet entered",
                "- Do not use punctuation, numberic and special characters"
              )}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Password</label>
              <Input
                name="password"
                onChange={formik.handleChange}
                placeholder="Enter password"
              />

              {errorForm.showErrors(
                errors.password,
                touched.password,
                values.password.length < 6 || values.password.length > 10,
                "- At least 1 lowercase, uppercase and numeric character. Do not use special characters and punctuation",
                "- Character length from 6 to 10"
              )}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Email</label>
              <Input
                name="email"
                onChange={formik.handleChange}
                placeholder="abc@example.com"
              />
              {errorForm.showErrors(
                errors.email,
                touched.email,
                values.email,
                "- Not yet entered",
                "- Email is the incorrect format !"
              )}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Phone</label>
              <Input
                name="phone"
                placeholder="Enter phone"
                onChange={formik.handleChange}
              />

              {errorForm.showErrors(
                errors.phone,
                touched.phone,
                values.phone,
                "- Not yet entered",
                "- Must be 10 number characters!"
              )}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Birthday</label> <br />
              <DatePicker
                name="birthday"
                format="YYYY-MM-DD"
                placeholder="Pick date"
                onChange={handleChangeDate}
              />
              {errorForm.showErrorsDefault(errors.birthday, touched.birthday)}
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item>
              <label htmlFor="">Gender</label>
              <Select
                name="gender"
                placeholder="-----------Option-----------"
                options={[
                  { label: "Male", value: true },
                  { label: "Female", value: false },
                ]}
                onChange={handleChangeGender}
              />
              {errorForm.showErrorsDefault(errors.gender, touched.gender)}
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
        <Form.Item className="btn-add-new">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button "
          >
            Add
          </Button>
          <Button
            onClick={() => {
              history.push("/admin/staff/staff-user");
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
