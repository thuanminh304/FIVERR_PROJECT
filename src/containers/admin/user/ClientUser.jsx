import Loader from "components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllUser } from "./module/action";
import { Table, Tag, Space, Popconfirm, message, Input,Avatar  } from "antd";
import { EditOutlined, DeleteOutlined ,UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import userApi from "apis/userApi";
import messageConfig from "components/Message/message";
//
export default function ClientUser() {
  const dispatch = useDispatch();
  const [searchUser, setSearchUser] = useState(null);
  let { loading, listAllUser } = useSelector(
    (state) => state.managementUserReducer
  );
  //lọc user client đưa ra table
  const listClientUser = (searchUser ? searchUser : listAllUser)?.filter(
    (item) => {
      return item.role === "CLIENT";
    }
  );

  const handleDeleteUser = (id) => {
    userApi
      .deleteUser(id)
      .then((res) => {
        messageConfig.loading()
        setTimeout(() => {
          messageConfig.success()

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
      title: "#",
      key: "index",
      width: 20,
      fixed: "left",
      render: (text, record, index) => {
        return <span>{index+1}</span>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      fixed: "left",
    },
    {
      title: "Avatar",
      dataIndex: "name",
      key: "avatar",
      width: 50,
      fixed: "left",
      render: () => {
        return <Avatar icon={<UserOutlined />} />;
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: 50,

      render: (text) => {
        let params = text === true ? "MALE" : "FEMALE";
        return <span>{params}</span>;
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
        return (
          <Tag color={"green"} key={user.role}>
            {user.role}
          </Tag>
        );
      },
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
          <Popconfirm className="popup-confirm-delete"
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
  // nếu gọi thành công api tìm kiếm user( length>0) thì sẽ render mảng tìm kiếm , không thì render mảng all user
  let data = listClientUser;
  const { Search } = Input;
  const onSearch = (value) => {
    userApi
      .searchUserByName(value)
      .then((res) => {
        setSearchUser(res.data);
      })
      .catch((err) => console.log(err?.response.data));
  };

  if (loading) return <Loader />;
  return listClientUser !== null ? (
    <div className="main-manage-user">
      {" "}
      <div className="text-left input-search">
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
          total: listClientUser?.length,
          showSizeChanger: false,
          showQuickJumper: true,
          showTotal: (total) =>
            `Total  ${total} user${listClientUser?.length > 1 ? "s" : ""}`,
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
