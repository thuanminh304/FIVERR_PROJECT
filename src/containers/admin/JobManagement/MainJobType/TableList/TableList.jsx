import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  StarFilled,
  CheckOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  DeleteOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "./TableList.scss";
import { actSetPageSize, actCurrentPage } from "../Modules/action";
import { actDeleteJob } from "Modules/JobManagement/actions";
const Tablelist = (props) => {
  const { data } = props;
  const [DeleteIdx, setDelete] = useState(null);
  const dispatch = useDispatch();
  const { listAllUser } = useSelector((state) => state.managementUserReducer);
  const { currentPageSize, currentPage } = useSelector(
    (state) => state.FilterJobListReducer
  );
  const columns = [
    {
      title: "No.",
      width: "5%",
      fixed: "left",
      key: "index",
      render: (value, item, index) => {
        return (currentPage - 1) * 10 + index + 1;
      },
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
        if (author) {
          return author.name;
        } else {
          return "No Name";
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
      render: (text, record, index) => {
        return (
          <div
            className={"settingJob " + ((DeleteIdx && DeleteIdx == index)?"comfirm":"")}
            data-jobid={record._id}
            data-index={index}
          >
            {DeleteIdx && DeleteIdx == index ? (
              <>
                <p>Confirm?</p>
                <CheckCircleOutlined id="approveDelete" onClick={deleteJob}/>
                <CloseCircleOutlined id="canleDelete" onClick={deleteJob} />
              </>
            ) : (
              <>
                <Link to={`/admin/job-management/edit/${record._id}`}>
                  <SettingOutlined />
                </Link>
                <DeleteOutlined id="deleteIcon" onClick={deleteJob} />
              </>
            )}
          </div>
        );
      },
    },
  ];
  const deleteJob = (e) => {
    const deleteBtn = e.target.closest('#deleteIcon');
    const cancleDeleteBtn = e.target.closest('#canleDelete');
    const approveDeleteBtn = e.target.closest('#approveDelete');
    const settingJobBtn = e.target.closest(".settingJob");
    const index = settingJobBtn.dataset.index;
    const jobId = settingJobBtn.dataset.jobid;
    const tbodyBox = document.querySelector(".ant-table-tbody");
    const paginationBox = document.querySelector('ul.ant-pagination');
    const tdItem = document.querySelectorAll(".ant-table-row");
    if(!!deleteBtn){
      tdItem[index].classList.add("deleteItem");
      paginationBox.classList.add('deleteItem');
      tbodyBox.classList.add("deleteItem");
      setDelete(index);
    };
    if(!!cancleDeleteBtn){
      tdItem[index].classList.remove("deleteItem");
      paginationBox.classList.remove('deleteItem');
      tbodyBox.classList.remove("deleteItem");
      setDelete(null);
    };
    if(!!approveDeleteBtn){
      approveDelete(jobId);
      tdItem[index].classList.remove("deleteItem");
      paginationBox.classList.remove('deleteItem');
      tbodyBox.classList.remove("deleteItem");
      setDelete(null);
    }
  };
  const approveDelete = (id) => {
    dispatch(actDeleteJob(id));
  };
  const paginationPage = (page, pageSize) => {
    if (pageSize !== currentPageSize) {
      dispatch(actSetPageSize(pageSize));
    }
    if (page !== currentPage) {
      dispatch(actCurrentPage(page));
    }
  };
  return (
    <div className="tableJobList">
      <div className="tableJobList__content">
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 768 }}
          pagination={{
            onChange: paginationPage,
            current: currentPage,
            showSizeChanger: true,
            pageSize: currentPageSize,
            pageSizeOptions: ["10", "15", "20", "25"],
          }}
        />
      </div>
    </div>
  );
};

export default Tablelist;
