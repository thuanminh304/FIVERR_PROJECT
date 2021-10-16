import Loader from "components/Loader/Loader";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllUser } from "./module/action";
import { Table, Tag, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
//
export default function QuanLyNguoiDung() {
  const dispatch = useDispatch();
  const { loading, listAllUser } = useSelector(
    (state) => state.quanLyNguoiDungReducer
  );
 const handleDeleteUser=(id)=>{
      console.log(id);
 }
  
  useEffect(() => {
    dispatch(actGetAllUser());
  }, []);
  //
  const columns = [
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
      width: "15%",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      width: "10%",
      render: (text) => {
        let params = text === true ? "NAM" : "NỮ";
        return <p>{params}</p>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "15%",
      render: (text, user) => {
        return user.email.length > 20
          ? user.email.substr(0, 20) + "..."
          : user.email;
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: "15%",
    },

    {
      title: "Kỹ năng",
      dataIndex: "skill",
      key: "skill",
      width: "20%",

      render: (skill) => {
        let hienthi = skill.length >= 2 ? skill.slice(1) : skill.slice(2);
        return (
          <>
            {hienthi.map((skill) => {
              let color = skill.length > 5 ? "geekblue" : "green";

              return (
                <Tag color={color} key={skill}>
                  {`${skill.toUpperCase()}`}
                </Tag>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Phân loại",
      key: "role",
      dataIndex: "role",
      width: "15%",

      render: (text, user) => {
        let color = user.role === "ADMIN" ? "volcano" : "green";
        let params = user.role === "ADMIN" ? "ADMIN" : "CLIENT";
        return (
          <Tag color={color} key={user.role}>
            {params}
          </Tag>
        );
      },
      filters: [
        {
          text: "ADMIN",
          value: "ADMIN",
        },
        {
          text: "CLIENT",
          value: "CLIENT",
        },
      ],
      onFilter: (value, record) => record.role.startsWith(value),
      filterSearch: true,
    },
    {
      title: "Action",
      key: "action",
      width: "15%",

      render: (text, record) => (
        <Space size="middle">
          <Link to="/admin">
            <EditOutlined />
          </Link>
          <Link to="/admin" onClick={()=>{
            handleDeleteUser(record._id)
          }}>
            <DeleteOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  const data = listAllUser;

  //
  if (loading) return <Loader />;
  return (
    <div className="mainQuanLyNguoiDung">
      {" "}
      <div>
        <h1>QUẢN LÝ NGƯỜI DÙNG</h1>
      </div>
      <div className="text-left">
        <Link to='/admin/quan-ly-nguoi-dung/them-moi'>+ Thêm mới</Link>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
