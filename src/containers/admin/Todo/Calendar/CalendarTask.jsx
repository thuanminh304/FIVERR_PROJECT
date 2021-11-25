import { Calendar, Badge } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import "./CalendarTask.scss";
import getApiTodo from "../setApi/getApi";
import { useDispatch, useSelector } from "react-redux";
import { actGetListAllTask, actSelectDate } from "containers/admin/Todo/Modules/action";
const CalendarTask = () => {
  const dispatch = useDispatch();
  const currentMonth = moment().month();
  const currentYear = moment().year();
  const currentDay = moment().date();
  console.log(moment().day());
  const { taskLists,selectedDate } = useSelector((state) => state.TodoListReducer);
  function getListData(value) {
    let listData;
    const day = value.date();
    if (taskLists?.length === 0) {
      return (listData = []);
    }
    if (value.month() === taskLists?.month && value.year() === taskLists?.year) {
      const checkTask = taskLists?.Task.findIndex((task) => {
        return task.d === day;
      });
      if (checkTask !== -1) {
        listData = [
          {
            type: "",
            content: (
              <div
                className={
                  "task " +
                  (!!taskLists?.Task[checkTask].status
                    ? "completed"
                    : "nonComplete")
                }
              ></div>
            ),
          },
        ];
      }
    }
    return listData || [];
  }
  useEffect(() => {
    getData(currentMonth, currentYear, currentDay);
  }, []);
  // useEffect(() => {
  //   if(!!taskLists?.id && selectedDate.month === currentMonth ){
  //     const date = {
  //       d: currentDay,
  //       month: currentMonth,
  //       year: currentYear,
  //     };
  //     setSelectedDate(date);
  //   }
  // },[taskLists])
  const setSelectedDate = (date) => {
    dispatch(actSelectDate(date));
  }
  const getData = (month, year, day) => {
    getApiTodo
      .getAllTodoList()
      .then((res) => {
        for (let key in res.data) {
          if (
            res.data[key].month === month &&
            res.data[key].year === year
          ) {
            dispatch(actGetListAllTask(res.data[key]));
            setDate(day, month, year);
            return;
          }
          else{
            continue;
          }
        }
        dispatch(actGetListAllTask(null));
        setDate(day, month, year);
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  // const calendarChange = (value) => {
  //   getData(value.month(),value.year());
  // };
  const setDate = (day, month, year) => {
    const date = {
      d: day,
      month: month,
      year: year,
    };
    setSelectedDate(date);
  }
  const dateSelect = (value) => {
    const date = {
      d:  value.date(),
      month: value.month(),
      year: value.year(),
    };
    if(selectedDate?.month !== value.month()){
      getData(value.month(),value.year(),value.date());
    }
    setSelectedDate(date);
  }
  return (
    <div className="calendarTask">
      <Calendar
        // onPanelChange={calendarChange}
        dateCellRender={dateCellRender}
        onSelect = {dateSelect}
      />
    </div>
  );
};

export default CalendarTask;
