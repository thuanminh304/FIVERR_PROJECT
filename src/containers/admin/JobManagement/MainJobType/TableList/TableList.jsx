import React, {useState, useEffect} from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  StarFilled,
  CheckOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./TableList.scss";
const Tablelist = (props) => {
  const {data} = props;
  const { listAllUser } = useSelector((state) => state.managementUserReducer);
  const columns = [
    {
      title: "No.",
      width: "5%",
      fixed: "left",
      key: 'index',
      render: (value,item,index) => {
          return (1-1)*10 + index + 1;
      }
    },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Author",
      dataIndex: "userCreated",
      key: "userCreated",
      render: (text) => {
        const author = listAllUser?.find((user) => {
          return user._id === text;
        });
        if(author){
            return author.name;
        }
        else{
            return 'No Name'
        }
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      width: "8%",
      render: (text) => {
        return (
          <>
            <span>{text}</span>
            <StarFilled />
          </>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "10%",
      render: (text) => {
        return <span>{text + "$"}</span>;
      },
    },
    {
      title: "ProService",
      dataIndex: "proServices",
      key: "proServices",
      width: "10%",
      render: (text) => {
        if (text) {
          return <CheckOutlined />;
        }
      },
    },
    {
      title: "Local Sellers",
      dataIndex: "localSellers",
      key: "localSellers",
      width: "10%",
      render: (text) => {
        if (text) {
          return <CheckOutlined />;
        }
      },
    },
    {
      title: "Online Sellers",
      dataIndex: "onlineSellers",
      key: "onlineSellers",
      width: "10%",
      render: (text) => {
        if (text) {
          return <CheckOutlined />;
        }
      },
    },
    {
      title: "Action",
      fixed: "right",
      width: "10%",
      render: (text,record) => {
        return (
          <div className="settingJob">
            <Link to={`/admin/job-management/edit/${record._id}`}><SettingOutlined /></Link>
            <DeleteOutlined />
          </div>
        );
      },
    },
  ];
  return (
    <div className="tableJobList">
      <div className="tableJobList__content">
        <Table columns={columns} dataSource={data} scroll={{ x: 768 }}/>
      </div>
    </div>
  );
};

export default Tablelist;
