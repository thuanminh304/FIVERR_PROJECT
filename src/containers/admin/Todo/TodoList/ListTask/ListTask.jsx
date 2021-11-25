import React, {useState} from "react";
import {
  CheckCircleOutlined,
  DeleteOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import getApiTodo from "../../setApi/getApi";
import { actUpdateListTask } from "../../Modules/action";
const Listtask = () => {
  const dispatch = useDispatch();
  const [taskTab, setTaskTab] = useState(false);
  const { dayTask, taskLists, currentIdx} = useSelector((state) => state.TodoListReducer);
  const taskSettingFunc = (e) => {
    const rollBackBtn = e.target.closest('.anticon-rollback');
    const checkBtn = e.target.closest('.anticon-check-circle');
    const deleteBtn = e.target.closest('.anticon-delete');
    const data = {...taskLists}
    if(!!rollBackBtn || !!checkBtn){
      let taskIdx = 0;
      if(!!checkBtn){
        taskIdx = checkBtn.dataset.idx;
      }
      else{
        taskIdx = rollBackBtn.dataset.idx;
      }
      const statusTask = data.Task[currentIdx].thing[taskIdx].status;
      data.Task[currentIdx].thing[taskIdx].status = !statusTask;
      const isFinishAll = data.Task[currentIdx].thing.every(task=>{
        return task.status === true;
      });
      data.Task[currentIdx].status = isFinishAll;
      updateService(data.id,data);
    }
    if(!!deleteBtn){
      const taskIdx = deleteBtn.dataset.idx;
      debugger;
      data.Task[currentIdx].thing.splice(taskIdx,1);
      const isFinishAll = data.Task[currentIdx].thing.every(task=>{
        return task.status === true;
      });
      data.Task[currentIdx].status = isFinishAll;
      updateService(data.id,data);
    }
  };
  const updateService = (id, data) => {
    getApiTodo.changeStatusTask(id,data).then(res=>{
      console.log(res.data);
      dispatch(actUpdateListTask(res.data));
    }).catch(error=>{
      console.log(error);
    });
  }
  const allFunc = (e) => {
    const data = {...taskLists};
    const finishAllBtn = e.target.closest('.finishAll');
    const deleteAllBtn = e.target.closest('.deleteAll');
    if(!!finishAllBtn) {
      for(let key in data.Task[currentIdx].thing){
        data.Task[currentIdx].thing[key].status = true;
        data.Task[currentIdx].status = true;
      };
      updateService(data.id,data);
    };
    if(!!deleteAllBtn) {
      data.Task.splice(currentIdx,1);
      updateService(data.id,data);
    }
  }
  const renderTask = () => {
    if (!!dayTask) {
      if (dayTask.thing.length > 0) {
        const listRender = dayTask.thing.map((thing, idx) => {
          if(thing.status === taskTab){
            return (
              <div key={idx} className="listTask__item">
                <div className={"listTask__title " + (thing.status?"finish":"")}>{thing.title}</div>
                <div className="listTask__action" onClick={taskSettingFunc}>
                  {thing.status?<RollbackOutlined data-idx={idx}/>:<CheckCircleOutlined data-idx={idx}/>}
                  <DeleteOutlined data-idx={idx}/>
                </div>
              </div>
            );
          }
        });
        if(!!listRender[0]) {
          return listRender;
        }
        else{
          return (<div className="listTask__title nothing">Nothing to do</div>);
        }
      } else {
        return (<div className="listTask__title nothing">Nothing to do</div>);
      }
    }
    else{
      return (<div className="listTask__title nothing">Nothing to do</div>);
    }
  };
  const changeTab = (e) => {
    const activeTab = e.target.closest('.tabBtn__active');
    const finishTab = e.target.closest('.tabBtn__finish');
    if(!!activeTab){
      setTaskTab(false);
    };
    if(!!finishTab){
      setTaskTab(true);
    }
  }
  return (
    <div className="listTask">
      <div className="listTask__content">
        {renderTask()}
      </div>
      <div className="listTask__footer">
        <div className="listTask__tabBtn" onClick = {changeTab}>
          <button className={"tabBtn__active " + (!taskTab?"active": "")}>Active</button>
          <button className={"tabBtn__finish " + (!taskTab?"": "active")}>Finish</button>
        </div>
        <div className="listTask__allFunc" onClick={allFunc}>
          <div className="allFunc__item finishAll">
            <CheckCircleOutlined />
            <span>Finish All</span>
          </div>
          <div className="allFunc__item deleteAll">
            <DeleteOutlined />
            <span>Delete All</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listtask;
