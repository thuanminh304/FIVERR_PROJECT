import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import "./JobSatictis.scss";
const JobSatictis = () => {
  const { dataSatictis } = useSelector((state) => state.JobManagementReducer);
  const [data, setData] = useState(null);
  const pagination = {
    pageSize: 10,
  };
  const columns = [
    {
      title: "Type Job",
      dataIndex: "type",
      key: "type",
      fixed: "left",
      width: "16%",
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
      title: "Earning",
      dataIndex: "price",
      key: "price",
      width: "8%",
      render: (text) => {
        return <span>{text + "$"}</span>;
      },
    },
  ];
  useEffect(() => {
    setData(dataSatictis);
  }, [dataSatictis]);
  return (
    <div className="topJob">
      <div className="topJob__content">
        <Table
          key="job"
          columns={columns}
          dataSource={data}
          scroll={{ x: 768 }}
          pagination={data?.length < 10 ? false : pagination}
        />
      </div>
    </div>
  );
};

export default JobSatictis;
