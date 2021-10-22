import Loader from "components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllUser } from "./module/action";
import { Table, Tag, Space, Popconfirm, message, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import userApi from "apis/userApi";
//
export default function QuanLyNguoiDung() {
  const dispatch = useDispatch();
  const [searchUser, setSearchUser] = useState([]);
  const { loading, listAllUser } = useSelector(
    (state) => state.managementUserReducer
  );

  const handleDeleteUser = (id) => {
    userApi
      .deleteUser(id)
      .then((res) => {
        message.loading({ content: "Đang tải...!", key: "updatable" });
        setTimeout(() => {
          message.success({
            content: "Thành công !",
            key: "updatable",
            duration: 2,
          });
        }, 1000);
        setTimeout(() => {
          dispatch(actGetAllUser());
        }, 1500);
      })
      .catch((err) => console.log(err?.response.data));
  };

  useEffect(() => {
    dispatch(actGetAllUser());
  }, []);
  //
  const columns = [
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
      width: 100,
      fixed: "left",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      width: 50,

      render: (text) => {
        let params = text === true ? "NAM" : "NỮ";
        return <p>{params}</p>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
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
      width: 100,
    },

    {
      title: "Kỹ năng",
      dataIndex: "skill",
      key: "skill",
      width: 100,

      render: (skill) => {
        let hienthi = skill.length > 3 ? skill.slice(2) : skill.slice(1);
        return (
          <>
            {hienthi.map((skill, idx) => {
              let color = skill.length > 5 ? "geekblue" : "green";

              return (
                <Tag color={color} key={idx}>
                  {`${skill.toUpperCase()}`}
                </Tag>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Băng cấp",
      dataIndex: "certification",
      key: "certification",
      width: 100,

      render: (certification) => {
        let hienthi = certification.length > 3 ? certification.slice(2) : certification.slice(1);
        return (
          <>
            {hienthi.map((certification, idx) => {
              let color = certification.length > 5 ? "geekblue" : "green";

              return (
                <Tag color={color} key={idx}>
                  {`${certification.toUpperCase()}`}
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
      width: 60,
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
      width: 50,
      fixed: "right",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/admin/management-user/update/${record._id}`}>
            <EditOutlined />
          </Link>
          <Popconfirm
            title="Bạn có chắc muốn xóa người dùng này ?"
            onConfirm={() => {
              handleDeleteUser(record._id);
            }}
            okText="Có"
            cancelText="Không"
          >
            <span className="btn-delete-user" key={record._id}>
              <DeleteOutlined />
            </span>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  // nếu gọi thành công api tìm kiếm user( length>0) thì sẽ render mảng tìm kiếm , không thì render mảng all user
  let data = searchUser?.length > 0 ? searchUser : listAllUser;
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);

    userApi
      .searchUserByName(value)
      .then((res) => {
        console.log(res.data);
        setSearchUser(res.data);
      })
      .catch((err) => console.log(err?.response.data));
  };

  if (loading) return <Loader />;
  return listAllUser ? (
    <div className="main-manage-user">
      {" "}
      <div>
        <h1 className="form-title-manage-user">QUẢN LÝ NGƯỜI DÙNG</h1>
      </div>
      <div className="text-left search-button-add-new">
        <Link to="/admin/management-user/add-new">+ Thêm mới</Link>
        <Search
          placeholder="Nhập họ tên ..."
          allowClear
          enterButton="Tìm"
          size="medium"
          onSearch={onSearch}
        />
      </div>
      <Table
        pagination={{
          size: "small",
          total: listAllUser?.length,
          showSizeChanger: false,
          showQuickJumper: true,
          showTotal: (total) => `Tổng cộng  ${total} người dùng`,
        }}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300 }}
      />
    </div>
  ) : (
    <Loader />
  );
}
