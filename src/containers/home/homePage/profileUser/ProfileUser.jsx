import React from "react";
import { useSelector } from "react-redux";
import "./profileUser.scss";
import { EditOutlined } from "@ant-design/icons";
import { actUploadAvatar } from "containers/shared/Auth/module/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import {
  renderInputCert,
  renderInputSkill,
  renderAvatar,
} from "components/render/render";
import { useEffect } from "react";
import { actGetAllJobsByUser } from "./createNewJobByUser/StepsCreateNewGig/modules/action";
import ProfileHasJobs from "./ProfileHasJobs";
import ProfileNoJob from "./ProfileNoJob";

export default function ProfileUser(props) {
  const [imageUrl, setImageUrl] = useState(null);

  const { currentUser } = useSelector((state) => state.AuthReducer);
  const { listAllJobsByUser } = useSelector(
    (state) => state.profileUserReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();
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
  console.log(listJobsCreatedByUser);

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
        {listJobsCreatedByUser?.length > 0 ? (
          <ProfileHasJobs listJobsCreatedByUser={listJobsCreatedByUser} />
        ) : (
          <ProfileNoJob />
        )}
      </div>
    </div>
  );
}
