import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./profileUser.scss";
import {
  EditOutlined,
  PictureOutlined,
  FileDoneOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { actUploadAvatar } from "containers/shared/Auth/module/actions";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  renderInputCert,
  renderInputSkill,
  renderAvatar,
} from "components/render/render";
import {
  actGetAllJobsByUser,
  actGetListJobRentedByUser,
} from "./createNewJobByUser/StepsCreateNewGig/modules/action";
import ProfileHasJobs from "./ProfileHasJobs";
import ProfileNoJob from "./ProfileNoJob";
import { Tabs, Table, Avatar, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import jobApi from "apis/jobApi";
import messageConfig from "components/Message/message";

export default function ProfileUser() {
  const [imageUrl, setImageUrl] = useState(null);
  const { TabPane } = Tabs;
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const { listAllJobsByUser, listJobRentedByUser } = useSelector(
    (state) => state.profileUserReducer
  );
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      avatar: currentUser?.avatar,
      skill: currentUser?.skill,
      bookingJob: currentUser?.bookingJob,
      email: currentUser?.email,
      gender: currentUser?.gender,
      name: currentUser?.name,
      phone: currentUser?.phone,
      birthday: currentUser?.birthday,
      role: currentUser?.role,
      certification: currentUser?.certification,
      _id: currentUser?._id,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleChangeAvatar = (event) => {
    let file = event.target.files[0];
    if (file) {
      //
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", (event) => {
        setImageUrl(event.target.result);
      });
      formik.setFieldValue("avatar", file);
      //
      const formData = new FormData();
      formData.append("avatar", file, file.name);
      dispatch(actUploadAvatar(formData));
    }
  };
  const handleClickBlockInput = (e, classInput) => {
    e.preventDefault();
    document.querySelector(classInput).style.display = "block";
  };

  useEffect(() => {
    dispatch(actGetAllJobsByUser());
  }, []);
  const listJobsCreatedByUser = listAllJobsByUser?.filter(
    (job) => job.userCreated === currentUser?._id
  );
  let listJobBooked = [];
  listJobBooked = listJobsCreatedByUser?.filter(
    (job) => job.usersBooking !== null && job.status === false
  );
  let listJobBookFinished = [];
  listJobBookFinished = listJobsCreatedByUser?.filter(
    (job) => job.usersBooking === null && job.status === true
  );

  //
  const listJobRentFinished = listJobRentedByUser?.filter(
    (job) => job.usersBooking === null && job.status === true
  );
  const listJobRent = listJobRentedByUser?.filter(
    (job) => job.usersBooking !== null && job.status === false
  );
  useEffect(() => {
    dispatch(actGetListJobRentedByUser());
  }, []);

  const FEE = listJobRentFinished?.reduce(
    (preValue, curValue) => preValue + curValue.price,
    0
  );
  const INCOME = listJobBookFinished?.reduce(
    (preValue, curValue) => preValue + curValue.price,
    0
  );

  const columns = [
    {
      title: "No.",
      align: "center",
      key: "index",
      render: (text, record, index) => {
        return <span key={index + 1}>{index + 1}</span>;
      },
    },
    {
      align: "center",
      title: "Name of Gig",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      align: "center",
      key: "image",
      render: (text, record) => {
        return record.image ? (
          <img
            key={record._id}
            src={record.image}
            style={{
              width: "50px",
              objectFit: "cover",
            }}
            alt=""
          />
        ) : (
          <Avatar key={record._id} shape="square" icon={<PictureOutlined />} />
        );
      },
    },
    {
      title: "Price $",
      dataIndex: "price",
      align: "center",
      key: "price",
    },
    {
      title: "Rate ",
      dataIndex: "rating",
      align: "center",
      key: "rating",
    },
    {
      title: "Action ",
      align: "center",
      key: "action",
      render: (text, record) => {
        return (
          <div className="action-table-gigs">
            {record.userCreated === currentUser?._id &&
            record.usersBooking !== null ? (
              <span className="filedoneoutlined">
                <Popconfirm
                  title="Would you like to hand over this assignment?"
                  onConfirm={() => {
                    messageConfig.loading();
                    jobApi
                      .doneJobBooked(record._id)
                      .then((res) => {
                        setTimeout(() => {
                          messageConfig.success();
                        }, 500);
                        // setTimeout(() => {
                        //   dispatch(actGetListJobRentedByUser());
                        // }, 1000);
                      })
                      .catch((err) => {
                        console.log(err?.response.data);
                      });
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <FileDoneOutlined />
                </Popconfirm>
              </span>
            ) : null}
            <span className="eyeoutlined">
              <Link to={`/${record.type}/detail/${record._id}`}>
                <EyeOutlined />
              </Link>
            </span>
          </div>
        );
      },
    },
  ];
  const columnsBooked = [
    {
      title: "No.",
      align: "center",
      key: "index",
      render: (text, record, index) => {
        return <span key={index + 1}>{index + 1}</span>;
      },
    },
    {
      title: "Name of Gig",
      dataIndex: "name",
      align: "center",
      key: "name",
    },

    {
      title: "Price $",
      dataIndex: "price",
      align: "center",
      key: "price",
    },
    {
      title: "Rate ",
      dataIndex: "rating",
      align: "center",
      key: "rating",
    },
    {
      title: "Action ",
      key: "action",
      align: "center",
      render: (text, record) => {
        return (
          <div className="action-table-gigs">
            {record.userCreated === currentUser?._id &&
            record.usersBooking !== null ? (
              <span className="filedoneoutlined">
                <Popconfirm
                  title="Would you like to hand over this assignment?"
                  onConfirm={() => {
                    messageConfig.loading();
                    jobApi
                      .doneJobBooked(record._id)
                      .then((res) => {
                        setTimeout(() => {
                          messageConfig.success();
                        }, 500);
                        // setTimeout(() => {
                        //   dispatch(actGetListJobRentedByUser());
                        // }, 1000);
                      })
                      .catch((err) => {
                        console.log(err?.response.data);
                      });
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <FileDoneOutlined />
                </Popconfirm>
              </span>
            ) : null}
            <span className="eyeoutlined">
              <Link to={`/${record.type}/detail/${record._id}`}>
                <EyeOutlined />
              </Link>
            </span>
          </div>
        );
      },
    },
  ];
  const dataJobRentFinised = listJobRentFinished;
  const dataJobRented = listJobRent;
  const dataJobBooked = listJobBooked;
  const dataJobBookFinished = listJobBookFinished;

  return (
    <div className="profile-user row">
      <div className="col-10 col-md-4 col-xl-3 profile-left">
        <div className="info-basic">
          <div className="info-top">
            <div className="avatar-edit">
              {renderAvatar(
                imageUrl ? imageUrl : currentUser?.avatar,
                currentUser
              )}

              <div className="custom-input-file">
                <label htmlFor="upload">
                  <i className="fa fa-camera"></i>
                </label>

                <input
                  required
                  id="upload"
                  name="avatar"
                  type="file"
                  onChange={handleChangeAvatar}
                  accept="image/*"
                />
              </div>
            </div>
            <p>{currentUser?.name}</p>
            <span className="span-online">
              <span className="dot"></span>
              Online
            </span>
          </div>
          <div className="info-bottom">
            <div className="from">
              <span>
                <i className="fa fa-map-marker"></i> From
              </span>
              <p>Vietnam</p>
            </div>
            <div className="member-since">
              <span>
                <i className="fa fa-user"></i>
                Member since
              </span>
              <p>Oct 2021</p>
            </div>
          </div>
        </div>

        <div className="info-others">
          <form onSubmitCapture={formik.handleSubmit}>
            <div className="skill">
              <div>
                <p>Skill</p>
                {renderInputSkill(currentUser?.skill)}
                <input
                  type="text"
                  value={formik.values.skill}
                  placeholder="Add your Skill.
"
                  onChange={formik.handleChange}
                />
              </div>
              <button
                onClick={(e) => {
                  handleClickBlockInput(e, ".input-addnew-skill");
                }}
              >
                {currentUser?.skill.length > 1 ? "Edit" : "Add New"}
              </button>
            </div>

            <div className="certification">
              <div>
                <p>Certification</p>
                {renderInputCert(currentUser?.certification)}
                <input
                  type="text"
                  value={formik.values.certification}
                  onChange={formik.handleChange}
                  placeholder="Add your Certification.
"
                />
              </div>
              <button
                onClick={(e) => {
                  handleClickBlockInput(e, ".input-addnew-cert");
                }}
              >
                {currentUser?.certification.length > 1 ? "Edit" : "Add New"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-10 col-md-7 col-xl-7 profile-right">
        <div className="info-bars">
          <p>
            FEE: <span>{FEE} $</span>{" "}
          </p>
          <p>
            INCOME: <span>{INCOME} $</span>{" "}
          </p>
          <Tabs className="tab-profile-right-content" defaultActiveKey="1">
            <TabPane tab="Booked" key="1">
              <div className="render-job-booked">
                <Table
                  key="tableBooked"
                  columns={columnsBooked}
                  size="small"
                  dataSource={dataJobBooked}
                />
              </div>
            </TabPane>
            <TabPane tab="Finised" key="2">
              <div className="render-job-book-finished">
                <Table
                  key="tableBookFinished"
                  columns={columnsBooked}
                  size="small"
                  dataSource={dataJobBookFinished}
                />
              </div>
            </TabPane>
          </Tabs>
        </div>
        <Tabs className="tab-profile-right-content" defaultActiveKey="3">
          <TabPane
            tab={
              listJobsCreatedByUser?.length > 0
                ? "Active Gigs"
                : "Create New Gigs"
            }
            key="3"
          >
            {listJobsCreatedByUser?.length > 0 ? (
              <ProfileHasJobs listJobsCreatedByUser={listJobsCreatedByUser} />
            ) : (
              <ProfileNoJob />
            )}
          </TabPane>
          <TabPane tab="Rent Job" key="4">
            <div className="render-job-rent">
              <Table
                key="tableRent"
                size="small"
                columns={columns}
                dataSource={dataJobRented}
              />
            </div>
          </TabPane>

          <TabPane tab="Finised" key="5">
            <div className="render-job-finished">
              <Table
                key="tableRentFinished"
                columns={columns}
                size="small"
                dataSource={dataJobRentFinised}
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
