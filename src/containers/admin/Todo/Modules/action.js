import { GET_LIST_TASK, SELECT_DATE, UPDATE_LIST_TASK } from "./type"

export const actGetListAllTask = (data) => {
    return dispatch => {
        dispatch({
            type: GET_LIST_TASK,
            payload: data
        })
    }
};

export const actUpdateListTask = (data) => {
    return dispatch => {
        dispatch({
            type: UPDATE_LIST_TASK,
            payload: data,
        })
    }
}

export const actSelectDate = (date) => {
    return dispatch => {
        dispatch({
            type: SELECT_DATE,
            payload: date,
        })
    }
}

// export const actChangeStatusTask = (id,data) => {
//     return dispatch => {
        
//     }
// }