import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Addtask from "./AddTask/AddTask";
import Listtask from "./ListTask/ListTask";
import "./TodoList.scss";
const Todolist = () => {
  const [isAddtask, setAddTask] = useState(false);
  useEffect(() => {
    const taskListContent = document.querySelector(".todolist");
    const resizeElement = new ResizeObserver(() =>
      changeSizeElement(taskListContent)
    );
    resizeElement.observe(taskListContent);
    return () => resizeElement.disconnect();
  }, []);
  const changeSizeElement = (taskListContent) => {
    const iconCheck = document.querySelector(
      ".allFunc__item .anticon-check-circle"
    );
    const iconDelete = document.querySelector(".allFunc__item .anticon-delete");
    if (!!iconCheck && !!iconDelete) {
      if (taskListContent.offsetWidth < 300) {
        iconCheck.style.display = "none";
        iconDelete.style.display = "none";
      } else {
        iconCheck.style.display = "inline-block";
        iconDelete.style.display = "inline-block";
      }
    }
  };
  const showAddTask = () => {
    setAddTask(!isAddtask);
  }
  const { selectedDate } = useSelector((state) => state.TodoListReducer);
  return (
    <div className="todolist">
      <div className="totoList__Header">
        <div className="headerTime">
          {`${selectedDate?.d}-${selectedDate?.month + 1}-${
            selectedDate?.year
          }`}
        </div>
        <div className="headerAdd">
          <button className="addTask" onClick={showAddTask}>{!isAddtask?"Create Task":"List Task"}</button>
        </div>
      </div>
      <div className="todoList__container">
        <div className={"todoList__item taskList " + (!isAddtask?"active":"")}><Listtask /></div>
        <div className={"todoList__item taskAdd " + (!isAddtask?"":"active")}>
          <Addtask />
        </div>
      </div>
    </div>
  );
};

export default Todolist;
