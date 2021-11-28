import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import "../TopJob/JobSatictis.scss";
import "./TopUser.scss";
const TopBuyer = () => {
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
      width: "20%",
    },
    {
      title: "Skill",
      dataIndex: "skill",
      key: "skill",
      width: "25%",
      render: (skill) => {
        let skillList = skill;
        if(skill?.length>2){skillList = skill.slice(0,2).concat('...')}
        return (
          <div className="topUser__skillList">
            {skillList?.map((skill,idx) => {
              return <div key={idx} className="topUser__skillItem">{skill}</div>;
            })}
          </div>
        );
      },
    },
    {
      title: "Job Booking Qty",
      dataIndex: "jobBookingQty",
      key: "jobBookingQty",
      width: "18%",
    },
    {
      title: "PayFee",
      dataIndex: "payfee",
      key: "payfee",
      width: "10%",
      render: (text) => {
        return <span>{text + "$"}</span>;
      },
    },
  ];
  const { userSatictis } = useSelector((state) => state.managementUserReducer);
  const [data, setData] = useState(null);
  useEffect(() => {
    const data = userSatictis.filter((user) => user.payfee > 0);
    const dataFilter = data.sort((user1, user2) => {
      return user2.payfee - user1.payfee;
    });
    setData(dataFilter.slice(0, 10));
  }, [userSatictis]);
  return (
    <div className="topUser">
      <div className="topUser__content">
        <Table
          key="buyer"
          columns={columns}
          dataSource={data}
          scroll={{ x: 768 }}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default TopBuyer;
