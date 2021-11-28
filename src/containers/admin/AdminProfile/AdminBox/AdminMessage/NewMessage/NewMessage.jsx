import React, { createRef } from "react";
import { Select, Switch, Form } from "antd";
import { useSelector } from "react-redux";
import './NewMessage.scss';
const {Option} = Select;
const Newmessage = () => {
  const formRef = createRef();
  const onChangeSelect = (value) => {
  };
  const onFinish = (values) => {

  }
  const { listAllUser } = useSelector((state) => state.managementUserReducer);
  const {currentUser} = useSelector((state) => state.AuthReducer);
  return (
    <div className="message__createNew">
      <div className="message__title">New Conversation</div>
      <div className="message__findUser">
        <Form ref={formRef} onFinish={onFinish}>
          <Form.Item name="admin">
            <Select
              showSearch
              allowClear
              style={{ width: 200 }}
              placeholder="Find admin account"
              optionFilterProp="children"
              onChange={onChangeSelect}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {listAllUser?.map((user, idx) => {
                if (user.role === "ADMIN" && user._id !== currentUser._id) {
                  return (
                    <Option key={idx} value={user._id}>
                      {user.name}
                    </Option>
                  );
                }
              })}
            </Select>
          </Form.Item>
          <button className="newMessage">Create</button>
        </Form>
      </div>
    </div>
  );
};

export default Newmessage;
