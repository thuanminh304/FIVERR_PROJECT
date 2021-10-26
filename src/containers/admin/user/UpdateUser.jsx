import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, DatePicker, message } from "antd";
import { useFormik } from "formik";
import userApi from "apis/userApi";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as yup from "yup";
import moment from "moment";
import Loader from "components/Loader/Loader";
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
      //   console.log(values);
      console.log(values);
      userApi
        .editUser(params.idUser, values)
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
            history.push("/admin/management-user");
          }, 2000);
        })
        .catch((err) => {
          message.loading({ content: "Loading...", key: "updatable" });
          setTimeout(() => {
            message.error({ content: "Error !", key: "updatable", duration: 2 });
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
        <div className="row form-cap-nhat">
          <div className="col-6">
            <Form.Item>
              <label>Name</label>
              <Input
                name="name"
                onChange={formik.handleChange}
                placeholder="Enter name"
                value={values.name}
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
              <label htmlFor="">Email</label>
              <Input
                name="email"
                onChange={formik.handleChange}
                placeholder="abc@example.com"
                value={values.email}
                disabled
              />
              {errors.email &&
                touched.email &&
                (values.email === "" ? (
                  <div className="styleErrors">
                    <p>- Not yet entered</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>- Email không đúng định dạng</p>
                  </div>
                ))}
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Phone</label>
              <Input
                name="phone"
                placeholder="Enter phone"
                onChange={formik.handleChange}
                value={values.phone}
              />
              {errors.phone &&
                touched.phone &&
                (values.phone === "" ? (
                  <div className="styleErrors">
                    <p>- Not yet entered !</p>
                  </div>
                ) : (
                  <div className="styleErrors">
                    <p>- - Must be 10 number characters!</p>
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
                value={moment(values.birthday)}
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
                value={values.gender}
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
                
                onChange={formik.handleChange}
                value={values.role}
                disabled
              />
             
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Kỹ năng</label>
              <Input
                name="skill"
                onChange={handleChangeSkill}
                placeholder="React, angular,..."
                value={values.skill}
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="">Bằng cấp</label>
              <Input
                name="certification"
                placeholder="Cybersoft, NEU,..."
                onChange={handleChangeCert}
                value={values.certification}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item className="btn-cap-nhat">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button "
            // onClick={openMessage}
          >
            Cập nhật
          </Button>

          <Button
            onClick={() => {
              history.goBack();
            }}
            type="primary"
            className="login-form-button  ml-5"
          >
            Quay lại
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}