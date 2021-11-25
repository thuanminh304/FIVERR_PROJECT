import React from "react";
import { Form, Input } from "antd";
const Addtask = () => {
  return (
    <div className="Addtask">
      <Form
      // {...layout}
      // ref={this.formRef}
      // name="control-ref"
      // onFinish={this.onFinish}
      >
        <div className="newTaskTitle">Task Name</div>
        <Form.Item
          name="task"
          rules={[{ required: true, message: "Please, input task name" }]}
        >
          <Input />
        </Form.Item>
        <div className="taskBtn">
          <button className="button AddTask">Create New Task</button>
        </div>
      </Form>
    </div>
  );
};

export default Addtask;
