import Loader from "components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllUser } from "../module/action";
import { Table, Tag, Space, Popconfirm, Input, Avatar } from "antd";
import {
  SettingOutlined,
  DeleteOutlined,
  UserOutlined,
  ManOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import userApi from "apis/userApi";
import messageConfig from "components/Message/message";
import {
  actCurrentPage,
  actSetPageSize,
} from "containers/admin/JobManagement/MainJobType/Modules/action";
import "../user.scss";
import { actShowNote } from "containers/admin/Header/modules/actions";
//
export default function ClientUser() {
  const dispatch = useDispatch();
  const [searchUser, setSearchUser] = useState(null);
  let { loading, listAllUser } = useSelector(
    (state) => state.managementUserReducer
  );
  const { currentPageSize, currentPage } = useSelector(
    (state) => state.FilterJobListReducer
  );
  //lọc user client đưa ra table
  const listClientUser = (searchUser ? searchUser : listAllUser)?.filter(
    (item) => {
      return item.role === "CLIENT";
    }
  );
  useEffect(() => {
    dispatch(actGetAllUser());
  }, []);
  const columns = [
    {
      title: "No.",
      key: "index",
      width: "5%",
      render: (value, item, index) => {
        return (currentPage - 1) * currentPageSize + index + 1;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "15%",
    },
    {
      title: "Avatar",
      dataIndex: "name",
      key: "avatar",
      width: "7%",
      render: (text, record) => {
        return record.avatar ? (
          <img
            src={record.avatar}
            style={{
              border: "1px solid #ccc",
              borderRadius: "50%",
              width: 40,
              height: 40,
              objectFit: "cover",
              boxShadow: "0 8px 14px 0 #ccc",
            }}
            alt=""
          />
        ) : (
          <span
            className="user-avatar"
            style={{
              border: "1px solid #ccc",
              borderRadius: "50%",
              width: 40,
              height: 40,
              lineHeight: "40px",
              textAlign: "center",
              fontWeight: "600",
              color: "#73bfdd",
              boxShadow: "0 8px 14px 0 #ccc",
            }}
          >
            {record.name?.slice(0, 1).toUpperCase()}
          </span>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "15%",
      render: (text, user) => {
        return user.email.length > 23
          ? user.email.substr(0, 23) + "..."
          : user.email;
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: "7%",
      render: (text, record) => {
        return (
          <span key={record._id}>
            {text === true ? <ManOutlined /> : <WomanOutlined />}
          </span>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "10%",
    },
    {
      title: "Skill",
      dataIndex: "skill",
      key: "skill",
      width: "13%",
      render: (skill) => {
        let skillShow =
          skill.length > 2
            ? skill.slice(0, 2).concat("...")
            : skill.slice(0, 2);
        return (
          <>
            {skillShow.map((skill, idx) => {
              return (
                <Tag color="green" key={idx}>
                  {skill.toUpperCase()}
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
      width: "12%",
      render: (certification) => {
        let certificationShow =
          certification.length > 2
            ? certification.slice(0, 2).concat("...")
            : certification.slice(0, 2);
        return (
          <>
            {certificationShow.map((certification, idx) => {
              return (
                <Tag color="green" key={idx}>
                  {certification.toUpperCase()}
                </Tag>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      width: "6%",
      fixed: "right",
      render: (text, record) => (
        <Space key={record._id} size="middle">
          <Link to={`/admin/update-user/${record._id}`}>
            <SettingOutlined />
          </Link>
          <Popconfirm
            key={record._id}
            title="Delete this user?"
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
  let data = listClientUser;
  const { Search } = Input;
  const onChange = (e) => {
    if (e.target.value === "") {
      setTimeout(() => {
        userApi
          .searchUserByName("")
          .then((res) => {
            setSearchUser(res.data);
          })
          .catch((err) => {});
      }, 200);
    }
  };
  const onSearch = (value) => {
    userApi
      .searchUserByName(value)
      .then((res) => {
        setSearchUser(res.data);
      })
      .catch((err) =>{});
  };
  const handleDeleteUser = (id) => {
    userApi
      .deleteUser(id)
      .then(() => {
        const note = { type: 'complete', content: 'Delete Client Completed' };
        dispatch(actShowNote(note));
        dispatch(actGetAllUser());
      })
      .catch((err) => {
        const note = { type: 'error', content: 'Delete Client Fail' };
        dispatch(actShowNote(note));
        dispatch(actGetAllUser());
      });
  };
  const paginationPage = (page, pageSize) => {
    if (pageSize !== currentPageSize) {
      dispatch(actSetPageSize(pageSize));
    }
    if (page !== currentPage) {
      dispatch(actCurrentPage(page));
    }
  };
  if (loading) return <Loader />;
  return (
    <div className="userList">
      <div className="userList__feature clientList">
        <Search
          placeholder="Enter name ..."
          allowClear
          enterButton="Search"
          size="medium"
          onSearch={onSearch}
          onChange={onChange}
        />
      </div>
      <div className="staffList__content">
        <Table
          rowKey={(record) => record._id}
          key={(record) => record._id}
          pagination={{
            onChange: paginationPage,
            current: currentPage,
            showSizeChanger: true,
            pageSize: currentPageSize,
            pageSizeOptions: ["10", "15", "20", "25"],
          }}
          columns={columns}
          dataSource={data}
          scroll={{ x: 1300 }}
        />
      </div>
    </div>
  );
}
