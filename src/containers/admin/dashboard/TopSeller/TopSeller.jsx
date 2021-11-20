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
              <p>{record?.name?.slice(0, 1).toUpperCase()}</p>
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
            {skillList?.map((skill) => {
              return <div className="topUser__skillItem">{skill.length>5?skill.substr(0, 5) + "..." : skill}</div>;
            })}
          </div>
        );
      },
    },
    {
      title: "Job Created Qty",
      dataIndex: "jobCreatedQty",
      key: "jobCreatedQty",
      width: "18%",
    },
    {
      title: "Job Booked Qty",
      dataIndex: "jobBooked",
      key: "jobBooked",
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
    const data = userSatictis.filter(user=>{
      return user.jobBooked > 0;
    });

    const dataFilter = data.sort((user1, user2)=>{
      const userSort = user2.jobBooked - user1.jobBooked;
      if(userSort !== 0){
        return userSort;
      };
      return user2.jobCreatedQty - user1.jobCreatedQty;
    })

    setData(dataFilter.slice(0, 10));
  }, [userSatictis]);
  return (
    <div className="topUser">
      <div className="topUser__content">
        <Table
          rowKey={(record) => record._id}
          key={(record) => record._id}
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
