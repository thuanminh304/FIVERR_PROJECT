import BoxLayout from 'layouts/BoxLayout';
import React from 'react';
import CalendarTask from './Calendar/CalendarTask';
import Todolist from './TodoList/TodoList';
const TodoLayout = () => {
    return (
        <div className="taskLayout row">
            <div className="taskItem calendar col-sm-6">
                <BoxLayout component={CalendarTask} title = 'Calendar'/>
            </div>
            <div className="taskItem todoList col-sm-6">
                <BoxLayout component={Todolist} title = 'Your Task'/>
            </div>
        </div>
    );
}

export default TodoLayout;
