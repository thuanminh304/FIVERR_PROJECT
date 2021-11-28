import React, {useRef} from "react";
import { Form, Input } from "antd";
import {useSelector, useDispatch} from 'react-redux';
import getApiTodo from "../../setApi/getApi";
import { actGetListAllTask, actSelectDate, actUpdateListTask } from "../../Modules/action";
import { actShowNote } from "containers/admin/Header/modules/actions";
const Addtask = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { dayTask, taskLists, currentIdx, selectedDate} = useSelector((state) => state.TodoListReducer);
  const onFinish = (values) => {
    if(!taskLists){
      const data = {
        year: selectedDate.year,
        month: selectedDate.month,
        Task: [],
      };
      const taskList = {
        d: selectedDate.d,
        status: false,
        thing: [{title: values.task, status: false}]
      }
      data.Task.unshift(taskList);
      getApiTodo.postNewTaskList(data).then(res=>{
        dispatch(actGetListAllTask(res.data));
        dispatch(actSelectDate(selectedDate));
        inputRef.current.resetFields();
        const note = { type: 'complete', content: 'Create New Task Completed' };
        dispatch(actShowNote(note));
      })
      .catch(error=>{
        const note = { type: 'error', content: 'Create New Task Fail' };
        dispatch(actShowNote(note));
      });
    }
    else{
      const data = {...taskLists};
      if(!dayTask){
        const taskList = {
          d: selectedDate.d,
          status: false,
          thing: [{title: values.task, status: false}]
        }
        data.Task.push(taskList);
      }
      else{
        const thing = {title: values.task, status: false};
        data.Task[currentIdx].status = false;
        data.Task[currentIdx].thing.unshift(thing);
      };
      getApiTodo.changeStatusTask(taskLists.id,data).then(res=>{
        dispatch(actUpdateListTask(res.data));
        dispatch(actSelectDate(selectedDate));
        inputRef.current.resetFields();
        const note = { type: 'complete', content: 'Create New Task Completed' };
        dispatch(actShowNote(note));
      }).catch(error=>{
        const note = { type: 'error', content: 'Create New Task Fail' };
        dispatch(actShowNote(note));
      });
    }
  }
  return (
    <div className="Addtask">
      <Form
      ref={inputRef}
      onFinish={onFinish}
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
