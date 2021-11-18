import React,{useState, useEffect} from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { useFormik } from "formik";
import userApi from "apis/userApi";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import moment from "moment";
import "../user.scss";
import "./AddNewStaff.scss";
import {LoadingOutlined} from '@ant-design/icons';
import messageConfig from "components/Message/message";
import errorForm from "components/showErrors/showError";
import { actShowNote } from "containers/admin/Header/modules/actions";

export default function ThemNguoiDung() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {isNote} = useSelector(state=>state.AdminDashBoardSettingReducer);
  const [isAdd, setIsAdd] = useState(false);
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
      setIsAdd(true);
      userApi
        .addNewUser(values)
        .then(() => {
          const note = { type: 'complete', content: 'Add New Staff Completed' };
          dispatch(actShowNote(note));
        })
        .catch(() => {
          const note = { type: 'error', content: 'Add New Staff Fail' };
          dispatch(actShowNote(note));          
        });
    },
  });
  useEffect(() => {
    if (!isNote && !!isAdd) {
      history.replace('/admin/staff/staff-user');
      setIsAdd(false);
    }
  }, [isNote]);
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
    <div className="addNewStaff">
      <Form
        className="text-left"
        onSubmitCapture={formik.handleSubmit}
        name="basic"
      >
        <div className="row form-add-new">
          <div className="field_item col-12 col-sm-6">
            <Form.Item>
              <label>Name</label>
              <Input
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="User Name"
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
              <label htmlFor="">Password</label>
              <Input
                name="password"
                type="password"
                onChange={formik.handleChange}
                placeholder="User Password"
              />

              {errorForm.showErrors(
                errors.password,
                touched.password,
                values.password.length < 6 || values.password.length > 10,
                "At least 1 lowercase, uppercase and numeric character. Do not use special characters and punctuation",
                "Character length from 6 to 10"
              )}
            </Form.Item>
          </div>
          <div className="field_item col-12 col-sm-6">
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
                "Not yet entered",
                "Email is the incorrect format !"
              )}
            </Form.Item>
          </div>
          <div className="field_item col-12 col-sm-6">
            <Form.Item>
              <label htmlFor="">Phone</label>
              <Input
                name="phone"
                placeholder="User Phone"
                onChange={formik.handleChange}
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
                placeholder="User Birthday"
                onChange={handleChangeDate}
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
              />
            </Form.Item>
          </div>
          <div className="field_item col-12 col-sm-6">
            <Form.Item>
              <label htmlFor="">Certification</label>
              <Input
                name="certification"
                onChange={handleChangeCert}
                placeholder="DIB, PYTHO,..."
              />
            </Form.Item>
          </div>
          <div className="field_itemBtn col-12">
            <Button type="primary" htmlType="submit" className="addUser">
              {!!isAdd?(<LoadingOutlined />):"Add"}
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
        </div>
      </Form>
    </div>
  );
}
