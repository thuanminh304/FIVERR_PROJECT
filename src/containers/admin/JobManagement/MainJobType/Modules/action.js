import { CURRENT_PAGE, LOCAL_SELLERS, ONLINE_SELLERS, PRO_SEVICCES, SELECT_SUB_TYPE, SET_MAIN_TYPE_ID, SET_PAGESIZE } from "./types"
export const actSetMainType = (mainId) => {
    return dispatch => {
        dispatch({
            type: SET_MAIN_TYPE_ID,
            payload: mainId,
        });
    };
};
export const actSelectSubType = (id) => {
    return dispatch => {
        dispatch({
            type: SELECT_SUB_TYPE,
            payload: id,
        });
    };
};

export const actProService = (value) => {
    return dispatch => {
        dispatch ({
            type: PRO_SEVICCES,
            payload: value,
        });
    };
};

export const actLocalSeller = (value) => {
    return dispatch => {
        dispatch ({
            type: LOCAL_SELLERS,
            payload: value,
        });
    };
};

export const actOnlineSellers = (value) => {
    return dispatch => {
        dispatch ({
            type: ONLINE_SELLERS,
            payload: value,
        });
    };
};

export const actSetPageSize = (pageSize) => {
    return dispatch => {
        dispatch ({
            type: SET_PAGESIZE,
            payload: pageSize,
        });
    };
};

export const actCurrentPage = (currentPage) => {
    return dispatch => {
        dispatch ({
            type: CURRENT_PAGE,
            payload: currentPage,
        });
    };
};