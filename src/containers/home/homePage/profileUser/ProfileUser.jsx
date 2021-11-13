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
  actGetListJobBookedByUser,
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
  const { listAllJobsByUser, listJobBookedByUser } = useSelector(
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
  const listJobFinished = listJobBookedByUser?.filter(
    (job) => job.usersBooking === null && job.status === true
  );
  const listJobBooked = listJobBookedByUser?.filter(
    (job) => job.usersBooking !== null && job.status === false
  );
  useEffect(() => {
    dispatch(actGetListJobBookedByUser());
  }, []);

  const totalWallet = listJobFinished?.reduce(
    (preValue, curValue) => preValue + curValue.price,
    0
  );
  const columns = [
    {
      title: "#",
      key: "index",
      render: (text, record, index) => {
        return <span key={index + 1}>{index + 1}</span>;
      },
    },
    {
      title: "Name of Gig",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
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
      key: "price",
    },
    {
      title: "Rate ",
      dataIndex: "rating",
      key: "rating",
    },
    listJobBooked
      ? {
          title: "Action ",
          key: "action",
          render: (text, record) => {
            let job = { ...record };
            return (
              <div className="action-table-gigs">
                {record.status === true ? null : (
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
                            setTimeout(() => {
                              dispatch(actGetListJobBookedByUser());
                            }, 1000);
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
                )}
                <span className="eyeoutlined">
                  <Link to={`/${record.type}/${record._id}`}>
                    <EyeOutlined />
                  </Link>
                </span>
              </div>
            );
          },
        }
      : null,
  ];
  const dataJobFinised = listJobFinished;
  const dataJobBooked = listJobBooked;
  return (
    <div className="profile-user row">
      <div className="col-3 profile-left">
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
            <EditOutlined className="icon-edit" />
            <button>Preview Public Mode</button>
            <span className="span-online">Online</span>
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
        <div className="learn">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg"
            alt=""
          />
          <div>
            <img
              src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/fiverr_learn/enroll-icon.69b770f.svg"
              alt=""
            />
            <p>
              {" "}
              <strong>Earn badges and stand out</strong>{" "}
            </p>
            <p>Boost your sales, by boosting your expertise.</p>
          </div>
          <button>Enroll Now</button>
        </div>
        <div className="info-others">
          <form onSubmitCapture={formik.handleSubmit}>
            <div className="description">
              <p>Description</p>
              <button>Edit Description</button>
            </div>
            <div className="languages">
              <p>Languages</p>
              <button>Add New</button>
            </div>
            <div className="link-accounts">
              <p>Link Accounts</p>
              <div className="list-accounts">
                <ul>
                  <li>
                    <a href="# ">
                      <span>+</span>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "#555555", cursor: "default" }}
                      href="# "
                    >
                      <span>
                        <i className="fa fa-google-plus-square"></i>
                      </span>
                      Google
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <span>+</span>
                      Dribbble
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <span>+</span>
                      Stack Overflow
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <span>+</span>
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <span>+</span>
                      Vimeo
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <span>+</span>
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

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
            <div className="education">
              <div>
                <p>Education</p>
                <input
                  type="text"
                  placeholder="Add your Education.
"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    opacity: 0.4,
                  }}
                />
              </div>
              <button>Add New</button>
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
      <div className="col-7 profile-right">
        <div className="info-bars">
          <p>
            WALLET: <span>{totalWallet} $</span>{" "}
          </p>
        </div>
        <Tabs className="tab-profile-right-content" defaultActiveKey="1">
          <TabPane
            tab={
              listJobsCreatedByUser?.length > 0
                ? "Active Gigs"
                : "Create New Gigs"
            }
            key="1"
          >
            {listJobsCreatedByUser?.length > 0 ? (
              <ProfileHasJobs listJobsCreatedByUser={listJobsCreatedByUser} />
            ) : (
              <ProfileNoJob />
            )}
          </TabPane>
          <TabPane tab="Booked" key="2">
            <div className="render-job-booked">
              <Table
                key="tableBooked"
                size="small"
                columns={columns}
                dataSource={dataJobBooked}
              />
            </div>
          </TabPane>
          <TabPane tab="Finised" key="3">
            <div className="render-job-finished">
              <Table
                key="tableFinished"
                columns={columns}
                size="small"
                dataSource={dataJobFinised}
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
