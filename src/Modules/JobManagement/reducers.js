import {GET_MAIN_JOB_REQUEST, GET_MAIN_JOB_SUCCESS,GET_MAIN_JOB_FAIL, ADD_NEW_MAIN_JOB_REQUEST, ADD_NEW_MAIN_JOB_SUCCESS, ADD_NEW_MAIN_JOB_FAIL, UPDATE_MAIN_JOB_REQUEST, UPDATE_MAIN_JOB_SUCCESS, UPDATE_MAIN_JOB_FAIL, DELETE_MAIN_JOB_FAIL, DELETE_MAIN_JOB_SUCCESS, DELETE_MAIN_JOB_REQUEST} from './types';
const initialState = {
    mainJob: [],
    loading: false,
    error: '',
    note: '',
    typeNote: '',
}

const JobManagementReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MAIN_JOB_REQUEST: {
            return {...state, loadding: true};
        };
        case GET_MAIN_JOB_SUCCESS: {
            return {...state,loadding: false, mainJob: payload};
        };
        case GET_MAIN_JOB_FAIL: {
            return {...state, loadding: false};
        }
        case ADD_NEW_MAIN_JOB_REQUEST: {
            return {...state, loadding: true};
        };
        case ADD_NEW_MAIN_JOB_SUCCESS: {
            const listMainJobType = [...state.mainJob];
            listMainJobType.push(payload);
            return {...state,loadding: false, mainJob: listMainJobType};
        };
        case ADD_NEW_MAIN_JOB_FAIL: {
            return {...state, loadding: false};
        }
        case UPDATE_MAIN_JOB_REQUEST: {
            return {...state, loadding: true};
        };
        case UPDATE_MAIN_JOB_SUCCESS: {
            const listMainJobType = [...state.mainJob];
            const jobIndex = listMainJobType.findIndex(job=> {
                return job._id === payload._id;
            });
            if(jobIndex !== -1){
                listMainJobType[jobIndex] = payload;
            }
            return {...state,loadding: false, mainJob: listMainJobType};
        };
        case UPDATE_MAIN_JOB_FAIL: {
            return {...state, loadding: false};
        };
        case DELETE_MAIN_JOB_REQUEST: {
            return {...state, loadding: true};
        };
        case DELETE_MAIN_JOB_SUCCESS: {
            const listMainJobType = [...state.mainJob];
            const jobIndex = listMainJobType.findIndex(job=> {
                return job._id === payload;
            });
            if(jobIndex !== -1){
                listMainJobType.splice(jobIndex, 1);
            }
            return {...state,loadding: false, mainJob: listMainJobType};
        };
        case DELETE_MAIN_JOB_FAIL: {
            return {...state, loadding: false};
        };
        default:
            return state
    }
}

export default JobManagementReducer;