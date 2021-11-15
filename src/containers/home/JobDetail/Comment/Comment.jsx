import React, { useRef } from "react";
import { Form, Input, Button } from "antd";
import { SendOutlined, LoadingOutlined } from "@ant-design/icons";
import userDefaultAvatar from "assets/images/defaultAvatar/defaultAvatar.jpg";
import "./Comment.scss";
const Comment = (props) => {
  const formRef = useRef();
  const { creatComment, isSendCommnet, commentList, currentUser } = props;
  const onFinish = (values) => {
    creatComment(values.content);
    formRef.current.resetFields();
  };
  const { TextArea } = Input;
  const renderListComment = () => {
    return commentList?.map((comment, idx) => {
      return (
        <li key={idx} className="comment_listItem">
          <div className="userAvatar">
            {!!comment.user.avatar ? (
              <img
                src={comment.user.avatar}
                alt="user-comment-avt"
                onError={(e) => (
                  (e.target.onerror = null),
                  (e.target.src = { userDefaultAvatar })
                )}
              />
            ) : (
              <h4>{comment.user.name.slice(0, 1).toUpperCase()}</h4>
            )}
          </div>
          <div className="userComment">
            <div className="userName">
              <h4>{comment.user.name}</h4>
            </div>
            <div className="commentContent">{comment.content}</div>
          </div>
        </li>
      );
    });
  };
  return (
    <div className="jobComment">
      <div className="jobComment__title">Review</div>
      {!!currentUser?._id ? (
        <div className="jobComment__upload">
          <p className="newComment">Create new comment</p>
          <Form ref={formRef} onFinish={onFinish} id="commentInput">
            <Form.Item name="content">
              <TextArea
                placeholder="Comment"
                autoSize={{ minRows: 1, maxRows: 6 }}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              {!isSendCommnet ? <SendOutlined /> : <LoadingOutlined />}
            </Button>
          </Form>
        </div>
      ) : (
        ""
      )}

      <div className="jobComment__list">
        <p className="newComment">Comments</p>
        <ul className="comment_list">
          {commentList.length > 0 ? (
            <>{renderListComment()}</>
          ) : (
            <p>...No Comment...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
