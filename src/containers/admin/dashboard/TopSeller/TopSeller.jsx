import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import "../TopJob/JobSatictis.scss";
import "../TopBuyer/TopUser.scss";
const TopSeller = () => {
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      width: "10%",
      render: (text, record) => {
        if (!!text) {
          return (
            <div className="topUser__avatar">
              <img
                src={text}
                alt="avatar"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "./images/defaultAvatar.jpg";
                }}
              />
            </div>
          );
        } else {
          return (
            <div className="topUser__avatar">
              <p>{record.email.slice(0, 1).toUpperCase()}</p>
            </div>
          );
        }
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Skill",
      dataIndex: "skill",
      key: "skill",
      width: "25%",
      render: (skill) => {
        return (
          <div className="topUser__skillList">
            {skill?.map((skill) => {
              return <div className="topUser__skillItem">{skill}</div>;
            })}
          </div>
        );
      },
    },
    {
        title: "Job Created Qty",
        dataIndex: "jobBookingQty",
        key: "jobBookingQty",
        width: "18%",
    },
    {
      title: "Job Booked Qty",
      dataIndex: "jobBookingQty",
      key: "jobBookingQty",
      width: "18%",
    },
    {
      title: "Wallet",
      dataIndex: "wallet",
      key: "wallet",
      width: "10%",
      render: (text) => {
        return <span>{text + "$"}</span>;
      },
    },
  ];
  const { userSatictis } = useSelector((state) => state.managementUserReducer);
  const [data, setData] = useState(null);
  useEffect(() => {
    const dataFilter = userSatictis.filter((user) => user.jobBookingQty > 0);
    setData(dataFilter.slice(0, 10));
  }, [userSatictis]);
  return (
    <div className="topUser">
      <div className="topUser__content">
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 768 }}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default TopSeller;
