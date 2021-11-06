import React, {useEffect, useState} from "react";
import { StarFilled, CheckOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import './JobSatictis.scss';
const JobSatictis = () => {
  const { dataSatictis } = useSelector((state) => state.JobManagementReducer);
  const [data, setData] = useState(null);
  const pagination = {
    pageSize: 10,
  }
  const columns = [
    {
      title: "No.",
      width: "5%",
      fixed: "left",
      key: "index",
      render: (value, item, index) => {
        return index + 1;
      },
    },
    {
      title: "Type Job",
      dataIndex: "type",
      key: "type",
      fixed: "left",
    },
    {
      title: "Job Qty",
      dataIndex: "jobQty",
      key: "jobQty",
      width: "8%",
    },
    {
      title: "ProService Qty",
      dataIndex: "proServiceQty",
      key: "proServiceQty",
      width: "15%",
    },
    {
      title: "Local Sellers Qty",
      dataIndex: "localSellerQty",
      key: "localSellerQty",
      width: "15%",
    },
    {
      title: "Online Sellers Qty",
      dataIndex: "onlineSellerQty",
      key: "onlineSellerQty",
      width: "15%",
    },
    {
        title: "Delivery Time Qty",
        dataIndex: "deliveryTimeQty",
        key: "deliveryTimeQty",
        width: "15%",
      },
    {
        title: "Earning",
        dataIndex: "price",
        key: "price",
        width: "8%",
        fixed: "right",
        render: (text) => {
          return <span>{text + "$"}</span>;
        },
      },
  ];
  useEffect(()=>{
    setData(dataSatictis);
  },[dataSatictis]);
  return (
    <div className="topJob">
      <div className="topJob__content">
        <Table columns={columns} dataSource={data} scroll={{ x: 768 }} pagination = {data?.length<10?false:pagination}/>
      </div>
    </div>
  );
};

export default JobSatictis;
