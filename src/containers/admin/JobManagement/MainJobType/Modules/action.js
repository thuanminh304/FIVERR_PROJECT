import { LOCAL_SELLERS, ONLINE_SELLERS, PRO_SEVICCES, SELECT_SUB_TYPE, SET_MAIN_TYPE_ID } from "./types"
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