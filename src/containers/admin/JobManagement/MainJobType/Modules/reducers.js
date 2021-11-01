import { SELECT_SUB_TYPE, PRO_SEVICCES, ONLINE_SELLERS, LOCAL_SELLERS, SET_MAIN_TYPE_ID, SET_PAGESIZE, CURRENT_PAGE } from "./types";

const initialState = {
    mainId: '',
    subJob: 'All',
    proService: false,
    localSeller: false,
    onlineSeller: false,
    currentPageSize: 10,
    currentPage: 1,
};

const FilterJobListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SELECT_SUB_TYPE: {
            return {...state, subJob: payload};
        };
        case SET_MAIN_TYPE_ID: {
            return {...state, mainId: payload};
        };
        case PRO_SEVICCES: {
            return {...state, proService: payload};
        };
        case LOCAL_SELLERS: {
            return {...state, localSeller: payload};
        };
        case ONLINE_SELLERS: {
            return {...state, onlineSeller: payload};
        };
        case SET_PAGESIZE: {
            return {...state, currentPageSize: payload};
        };
        case CURRENT_PAGE: {
            return {...state, currentPage: payload};
        };
        default:
            return state;
    }
};
export default FilterJobListReducer;
