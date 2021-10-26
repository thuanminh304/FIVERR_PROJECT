import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllUser } from "./module/action";
import { Table, Tag, Space, Popconfirm, message, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import userApi from "apis/userApi";
import Loader from "components/Loader/Loader";

//
export default function AdminUser() {
  const dispatch = useDispatch();
  const [searchUser, setSearchUser] = useState(null);
  let { loading, listAllUser } = useSelector(
    (state) => state.managementUserReducer
  );

  

  const listStaffUser = (searchUser ? searchUser : listAllUser)?.filter(
    (item) => {
      return item.role === "ADMIN";
    }
  );

  const handleDeleteUser = (id) => {
    userApi
      .deleteUser(id)
      .then((res) => {
        message.loading({ content: "Loading...!", key: "updatable" });
        setTimeout(() => {
          message.success({
            content: "Success !",
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      fixed: "left",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: 50,

      render: (text) => {
        let params = text === true ? "MALE" : "FEMALE";
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
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 100,
    },

    {
      title: "Skill",
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
      title: "Certification",
      dataIndex: "certification",
      key: "certification",
      width: 100,

      render: (certification) => {
        let hienthi =
          certification.length > 3
            ? certification.slice(2)
            : certification.slice(1);
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
      title: "Role",
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
          <Link to={`/admin/update-user/${record._id}`}>
            <EditOutlined />
          </Link>
          <Popconfirm
            title="Are you sure delete this user ?"
            onConfirm={() => {
              handleDeleteUser(record._id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <span className="btn-delete-user" key={record._id}>
              <DeleteOutlined />
            </span>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  
  let data = listStaffUser;
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
  return listStaffUser!==null ? (
    <div className="main-manage-user">
      {" "}
      
      <div className="text-left search-button-add-new">
        <Link style={{fontWeight:"bolder"}} to="/admin/staff/add-staff">+ ADD NEW</Link>
        <Search
          placeholder="Enter name ..."
          allowClear
          enterButton="Search"
          size="medium"
          onSearch={onSearch}
        />
      </div>
      <Table
        pagination={{
          size: "small",
          total: listStaffUser?.length,
          showSizeChanger: false,
          showQuickJumper: true,
          howTotal: (total) =>
            `Total  ${total} user${listStaffUser?.length > 1 ? "s" : ""}`,
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
