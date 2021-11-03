import React from "react";
import { useSelector } from "react-redux";
import "./profileUser.scss";
import { EditOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { BASE_URL, tokenByClass } from "setting/apiConfig";

export default function ProfileUser() {
  const { detailUser } = useSelector((state) => state.AuthReducer);
  const [imageUrl, setImageUrl] = useState(null);
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  function beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isLt2M;
  }
  const handleChange = (info) => {
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => setImageUrl(imageUrl));
    }
  };
  let token = "";
  if (localStorage.getItem("fiverrToken")) {
    token = JSON.parse(localStorage.getItem("fiverrToken"));
  }
  return (
    <div className="profile-user row">
      <div className="col-3 profile-left">
        <div className="info-basic">
          <div className="info-top">
            {/* <label>
              {" "}
              <span>T</span>{" "}
            </label> */}
            <div className="change-avatar">
              {detailUser?.avatar ? (
                <img
                  src={detailUser.avatar}
                  style={{
                    borderRadius: "50%",
                    width: 150,
                    height: 150,
                    cursor: "pointer",
                  }}
                  alt=""
                />
              ) : (
                <Upload
                  accept=".jpg,.png,.jpeg,.gif,.jfif"
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action={`${BASE_URL}/api/users/upload-avatar`}
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                  headers={
                    token
                      ? {
                          token: token,
                          tokenByClass: tokenByClass,
                        }
                      : { tokenByClass: tokenByClass }
                  }
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                    />
                  ) : (
                    "uploadAvatar"
                  )}
                </Upload>
              )}
            </div>
            <div className="name-edit">
              <p>{detailUser.name}</p>
              <EditOutlined className="icon-edit" />
            </div>
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
                  <a style={{ color: "#555555", cursor: "default" }} href="# ">
                    <span>
                      <i class="fa fa-google-plus-square"></i>
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
            <p>Skill</p>
            <button>Add New</button>
          </div>
          <div className="education">
            <p>Education</p>
            <button>Add New</button>
          </div>
          <div className="certification">
            <p>Certification</p>
            <button>Add New</button>
          </div>
        </div>
      </div>
      <div className="col-7 profile-right">
        <div className="buying-services">
          <img src="/images/imagesProfile/office-building.7ac5061.gif" alt="" />
          <div>
            <p>
              {" "}
              <strong>Buying services for work?</strong>Get the best experience
              for your business with 3 quick questions.{" "}
            </p>
            <p>
              What’s your industry
              {">"}
            </p>
          </div>
          <span>X</span>
        </div>
        <div className="create-gig">
          <p>It seems that you don't have any active Gigs. Get selling!</p>
          <button>Create a New Gig</button>
        </div>
      </div>
    </div>
  );
}
