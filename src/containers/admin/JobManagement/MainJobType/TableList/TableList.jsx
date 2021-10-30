import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import {
  StarFilled,
  CheckOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./TableList.scss";
const Tablelist = () => {
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
      //   width: 100,
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
      key: "_id",
      fixed: "right",
      width: "10%",
      render: (text) => {
        return (
          <div className="settingJob">
            <SettingOutlined />
            <DeleteOutlined />
          </div>
        );
      },
    },
  ];
  const data = [
    {
      deleteAt: false,
      _id: "617beede95d99f001c0ad415",
      name: "Project noway",
      rating: 10,
      price: 1000,
      proServices: true,
      localSellers: false,
      onlineSellers: true,
      deliveryTime: true,
      type: {
        subTypeJobs: [
          "617aa97f07fe01001cabca79",
          "617aa99d07fe01001cabca7d",
          "617aa9e807fe01001cabca8c",
          "617aa9ff07fe01001cabca90",
          "617aaa1007fe01001cabca94",
          "617abaa595d99f001c0ac129",
          "617ac03195d99f001c0ac175",
          "617ac09095d99f001c0ac17e",
          "617ac0d595d99f001c0ac199",
          "617ac4ae95d99f001c0ac4a8",
          "617ac4be95d99f001c0ac4c1",
          "617ac4c395d99f001c0ac4c5",
          "617ac4cc95d99f001c0ac4db",
          "617ac4d495d99f001c0ac4df",
          "617ac4e295d99f001c0ac4f8",
          "617ac4e995d99f001c0ac4ff",
          "617ac50295d99f001c0ac515",
          "617ac51095d99f001c0ac51f",
          "617ac51795d99f001c0ac523",
          "617ac51f95d99f001c0ac53c",
          "617ac52995d99f001c0ac540",
          "617ac52e95d99f001c0ac544",
          "617ac53495d99f001c0ac548",
          "617ac53c95d99f001c0ac54c",
          "617ac54695d99f001c0ac550",
          "617ac54e95d99f001c0ac566",
          "617ac55495d99f001c0ac56a",
          "617ac56795d99f001c0ac5a6",
          "617ac57395d99f001c0ac5bc",
          "617ac58595d99f001c0ac5c0",
          "617ac58c95d99f001c0ac5c4",
          "617ac59595d99f001c0ac5ec",
          "617ac5a095d99f001c0ac602",
          "617ac5a695d99f001c0ac618",
          "617ac5ae95d99f001c0ac61c",
          "617ac5b895d99f001c0ac632",
          "617ac5c695d99f001c0ac648",
          "617ac5cd95d99f001c0ac64c",
          "617ac5d495d99f001c0ac665",
          "617ac5ea95d99f001c0ac681",
          "617ac5f795d99f001c0ac691",
          "617ac5ff95d99f001c0ac695",
          "617ac60b95d99f001c0ac69d",
          "617ac61795d99f001c0ac6a1",
          "617ac62595d99f001c0ac6a5",
          "617ac62d95d99f001c0ac6a9",
          "617ac63395d99f001c0ac6ad",
          "617ac63a95d99f001c0ac6c3",
          "617ac64695d99f001c0ac6c9",
          "617ac64d95d99f001c0ac6cd",
          "617ac65995d99f001c0ac6d1",
          "617ac66595d99f001c0ac6e7",
          "617ac67b95d99f001c0ac6eb",
          "617ac68e95d99f001c0ac6f1",
          "617ac69595d99f001c0ac6f5",
          "617ac69a95d99f001c0ac6f9",
        ],
        deleteAt: false,
        _id: "617aa92207fe01001cabca67",
        name: "Graphic & Design",
        status: true,
        __v: 56,
      },
      subType: {
        deleteAt: false,
        _id: "617aa97f07fe01001cabca79",
        name: "Logo Design",
        status: true,
        typeJob: "617aa92207fe01001cabca67",
        __v: 0,
      },
      status: true,
      userCreated: "617a9c6d07fe01001cabca37",
      __v: 0,
    },
    {
        deleteAt: false,
        _id: "617beede95d99f001c0ad415",
        name: "Project noway",
        rating: 10,
        price: 1000,
        proServices: true,
        localSellers: false,
        onlineSellers: true,
        deliveryTime: true,
        type: {
          subTypeJobs: [
            "617aa97f07fe01001cabca79",
            "617aa99d07fe01001cabca7d",
            "617aa9e807fe01001cabca8c",
            "617aa9ff07fe01001cabca90",
            "617aaa1007fe01001cabca94",
            "617abaa595d99f001c0ac129",
            "617ac03195d99f001c0ac175",
            "617ac09095d99f001c0ac17e",
            "617ac0d595d99f001c0ac199",
            "617ac4ae95d99f001c0ac4a8",
            "617ac4be95d99f001c0ac4c1",
            "617ac4c395d99f001c0ac4c5",
            "617ac4cc95d99f001c0ac4db",
            "617ac4d495d99f001c0ac4df",
            "617ac4e295d99f001c0ac4f8",
            "617ac4e995d99f001c0ac4ff",
            "617ac50295d99f001c0ac515",
            "617ac51095d99f001c0ac51f",
            "617ac51795d99f001c0ac523",
            "617ac51f95d99f001c0ac53c",
            "617ac52995d99f001c0ac540",
            "617ac52e95d99f001c0ac544",
            "617ac53495d99f001c0ac548",
            "617ac53c95d99f001c0ac54c",
            "617ac54695d99f001c0ac550",
            "617ac54e95d99f001c0ac566",
            "617ac55495d99f001c0ac56a",
            "617ac56795d99f001c0ac5a6",
            "617ac57395d99f001c0ac5bc",
            "617ac58595d99f001c0ac5c0",
            "617ac58c95d99f001c0ac5c4",
            "617ac59595d99f001c0ac5ec",
            "617ac5a095d99f001c0ac602",
            "617ac5a695d99f001c0ac618",
            "617ac5ae95d99f001c0ac61c",
            "617ac5b895d99f001c0ac632",
            "617ac5c695d99f001c0ac648",
            "617ac5cd95d99f001c0ac64c",
            "617ac5d495d99f001c0ac665",
            "617ac5ea95d99f001c0ac681",
            "617ac5f795d99f001c0ac691",
            "617ac5ff95d99f001c0ac695",
            "617ac60b95d99f001c0ac69d",
            "617ac61795d99f001c0ac6a1",
            "617ac62595d99f001c0ac6a5",
            "617ac62d95d99f001c0ac6a9",
            "617ac63395d99f001c0ac6ad",
            "617ac63a95d99f001c0ac6c3",
            "617ac64695d99f001c0ac6c9",
            "617ac64d95d99f001c0ac6cd",
            "617ac65995d99f001c0ac6d1",
            "617ac66595d99f001c0ac6e7",
            "617ac67b95d99f001c0ac6eb",
            "617ac68e95d99f001c0ac6f1",
            "617ac69595d99f001c0ac6f5",
            "617ac69a95d99f001c0ac6f9",
          ],
          deleteAt: false,
          _id: "617aa92207fe01001cabca67",
          name: "Graphic & Design",
          status: true,
          __v: 56,
        },
        subType: {
          deleteAt: false,
          _id: "617aa97f07fe01001cabca79",
          name: "Logo Design",
          status: true,
          typeJob: "617aa92207fe01001cabca67",
          __v: 0,
        },
        status: true,
        userCreated: "617a9c6d07fe01001cabca37",
        __v: 0,
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
