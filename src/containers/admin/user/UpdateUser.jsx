import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { useFormik } from "formik";
import userApi from "apis/userApi";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as yup from "yup";
import moment from "moment";
import Loader from "components/Loader/Loader";
import "./user.scss";
import messageConfig from "components/Message/message";
import errorForm from "components/showErrors/showError";

//CONTENT
export default function UpdateUser() {
  const params = useParams();
  const history = useHistory();
  const [detailUser, setDetailUser] = useState(null);
  const { loading } = useSelector((state) => state.managementUserReducer);
  useEffect(() => {
    userApi
      .getDetailUser(params.idUser)
      .then((res) => {
        setDetailUser(res.data);
      })
      .catch((err) => console.log(err?.response.data));
  }, []);

  //tạo form để lưu trừ thông tin nhập từ input
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: detailUser?.name,
      email: detailUser?.email,
      phone: detailUser?.phone,
      birthday: detailUser?.birthday,
      gender: detailUser?.gender,
      role: detailUser?.role,
      skill: detailUser?.skill,
      certification: detailUser?.certification,
    },
    validationSchema: yup.object({
      email: yup.string().email().required("- Email is the incorrect format !"),
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
        .editUser(params.idUser, values)
        .then(() => {
          messageConfig.loading();
          setTimeout(() => {
            messageConfig.success();
          }, 1000);
          setTimeout(() => {
            history.goBack();
          }, 2000);
        })
        .catch((err) => {
          messageConfig.loading();
          setTimeout(() => {
            messageConfig.error();
          }, 1000);
          console.log(err);
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

  if (loading) return <Loader />;
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
        <div className="row form-update">
          <div className="col-6">
            <Form.Item>
              <label>Name</label>
              <Input
                name="name"
                onChange={formik.handleChange}
                placeholder="Enter name"
                value={values.name}
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
              <label htmlFor="">Email</label>
              <Input
                name="email"
                onChange={formik.handleChange}
                placeholder="abc@example.com"
                value={values.email}
                disabled
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
                value={values.phone}
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
                value={moment(values.birthday)}
              />
              {errorForm.showErrorsDefault(errors.birthday, touched.birthday)}
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item>
              <label htmlFor="">Gender</label>
              <Select
                name="gender"
                placeholder="-----Option-----"
                options={[
                  { label: "Male", value: true },
                  { label: "Female", value: false },
                ]}
                onChange={handleChangeGender}
                value={values.gender}
              />
             {errorForm.showErrorsDefault(errors.gender, touched.gender)}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Role</label>
              <Input
                name="role"
                onChange={formik.handleChange}
                value={values.role}
                disabled
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Skill</label>
              <Input
                name="skill"
                onChange={handleChangeSkill}
                placeholder="React, angular,..."
                value={values.skill}
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Certification</label>
              <Input
                name="certification"
                placeholder="Cybersoft, NEU,..."
                onChange={handleChangeCert}
                value={values.certification}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item className="btn-update">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button "
          >
            Update
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
