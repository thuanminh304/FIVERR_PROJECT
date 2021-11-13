import React from "react";
import { Form, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./Comment.scss";
const Comment = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const { TextArea } = Input;
  return (
    <div className="jobComment">
      <div className="jobComment__title">Review</div>
      <div className="jobComment__upload">
        <p className="newComment">Create new comment</p>
        <Form onFinish={onFinish} id="commentInput">
          <Form.Item name="content">
            <TextArea
              placeholder="Comment"
              autoSize={{ minRows: 1, maxRows: 6 }}
            />
          </Form.Item>
          <Button>
            <SendOutlined />
          </Button>
        </Form>
      </div>
      <div className="jobComment__list">
        <p className="newComment">Comments</p>
        <ul className="comment_list">
          <li className="comment_listItem">
            <div className="userAvatar">
              <h4>N</h4>
            </div>
            <div className="userComment">
              <div className="userName">
                <h4>Vo Nhat Nam</h4>
              </div>
              <div className="commentContent">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, itaque.</div>
            </div>
          </li>
          <li className="comment_listItem">
            <div className="userAvatar">
              <h4>N</h4>
            </div>
            <div className="userComment">
              <div className="userName">
                <h4>Vo Nhat Nam</h4>
              </div>
              <div className="commentContent">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, itaque.</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Comment;
