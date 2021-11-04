import { ACTION_SHOW_NOTE, TURN_OFF_NOTE } from "./types"

export const actShowNote = (note) => {
    return dispatch => {
        dispatch({
            type: ACTION_SHOW_NOTE,
            payload: note,
        });
    };
};

export const actTurnOffNote = () => {
    return dispatch => {
        dispatch({
            type: TURN_OFF_NOTE,
        })
    }
}