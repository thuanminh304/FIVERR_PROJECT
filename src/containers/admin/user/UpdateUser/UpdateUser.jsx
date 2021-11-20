import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { useFormik } from "formik";
import userApi from "apis/userApi";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import moment from "moment";
import Loader from "components/Loader/Loader";
import "../AddNewStaff/AddNewStaff.scss";
import { LoadingOutlined } from "@ant-design/icons";
import errorForm from "components/showErrors/showError";
import { actGetDetailUser } from "containers/shared/Auth/module/actions";
import { actShowNote } from "containers/admin/Header/modules/actions";
//CONTENT
export default function UpdateUser() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const { isNote } = useSelector((state) => state.AdminDashBoardSettingReducer);
  const { detailUser } = useSelector((state) => state.AuthReducer);
  const { loading } = useSelector((state) => state.managementUserReducer);
  useEffect(() => {
    dispatch(actGetDetailUser(params.idUser));
  }, []);
  useEffect(() => {
    if (!isNote && !!isUpdate) {
      history.goBack();
      setIsUpdate(false);
    }
  }, [isNote]);
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
        
        .required(),
      birthday: yup.string().required("- Not selected yet !"),
    }),
    onSubmit: (values) => {
      setIsUpdate(true);
      userApi
        .editUser(params.idUser, values)
        .then(() => {
          const note = {
            type: "complete",
            content: "Update User Info Completed",
          };
          dispatch(actShowNote(note));
        })
        .catch((err) => {
          const note = { type: "error", content: "Add New Staff Fail" };
          dispatch(actShowNote(note));
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
    <div className="updateUser">
      <Form
        className="text-left"
        onSubmitCapture={formik.handleSubmit}
        name="basic"
      >
        <div className="row form-update">
          <div className="field_item col-12 col-sm-6">
            <Form.Item>
              <label>Client Name</label>
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
                "Not yet entered",
                "Do not use punctuation, numberic and special characters"
              )}
            </Form.Item>
          </div>
          <div className="field_item col-12 col-sm-6">
            <Form.Item>
              <label htmlFor="">Client Email</label>
              <Input
                name="email"
                onChange={formik.handleChange}
                placeholder="abc@example.com"
                value={values.email}
              />
              {errorForm.showErrors(
                errors.email,
                touched.email,
                values.email,
                "Not yet entered",
                "Email is the incorrect format!"
              )}
            </Form.Item>
          </div>
          <div className="field_item col-12 col-sm-6">
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
                "Not yet entered",
                "Must be 10 number characters!"
              )}
            </Form.Item>
          </div>
          <div className="field_item col-12 col-sm-6">
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
          <div className="field_item col-12 col-sm-6">
            <Form.Item>
              <label htmlFor="">Gender</label>
              <Select
                name="gender"
                placeholder="User Gender"
                options={[
                  { label: "Male", value: true },
                  { label: "Female", value: false },
                ]}
                onChange={handleChangeGender}
                value={values.gender}
              />
              {errorForm.showErrorsDefault(errors.gender, touched.gender)}
            </Form.Item>
          </div>
          <div className="field_item col-12 col-sm-6">
            <Form.Item>
              <label htmlFor="">Skill</label>
              <Input
                name="skill"
                onChange={handleChangeSkill}
                placeholder="React, angular,..."
                value={values.skill}
              />
            </Form.Item>
          </div>
          <div className="field_item col-12 col-sm-6">
            <Form.Item>
              <label htmlFor="">Certification</label>
              <Input
                name="certification"
                placeholder="DIB, PYNOW,..."
                onChange={handleChangeCert}
                value={values.certification}
              />
            </Form.Item>
          </div>
        </div>
        <div className="field_itemBtn col-12">
          <Button type="primary" htmlType="submit" className="updateUser">
            {!!isUpdate ? <LoadingOutlined /> : "Update"}
          </Button>

          <Button
            onClick={() => {
              history.goBack();
            }}
            type="primary"
            className="cancle"
          >
            Back
          </Button>
        </div>
      </Form>
    </div>
  );
}
