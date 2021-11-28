const { GET_LIST_TASK, SELECT_DATE, UPDATE_LIST_TASK } = require("./type");

const initialState = {
  taskLists: null,
  selectedDate: {
    d: null,
    month: null,
    year: null,
  },
  dayTask: null,
  currentIdx: null,
};

const TodoListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_TASK:
      return { ...state, taskLists: payload };
    case SELECT_DATE:
      const Task = state.taskLists?.Task;
      if(!!Task){
        const taskListIdx = Task?.findIndex(task=>{
          return task.d === payload.d;
        });
        if(taskListIdx !== -1){
          return {...state, selectedDate: {...payload}, currentIdx: taskListIdx, dayTask: {...Task[taskListIdx]}};
        }
      }
      return {...state, selectedDate: {...payload}, currentIdx: null, dayTask: null};
    case UPDATE_LIST_TASK: 
      return {...state, taskLists: payload, dayTask: {...state.taskLists?.Task[state.currentIdx]}}
    default:
      return state;
  }
};
export default TodoListReducer;
