import { ACTION_SHOW_NOTE, CHANGE_THEME, DELETE_NOTIFY, FIX_SIDE_BAR, SEE_NOTIFY, TURN_OFF_NOTE } from "./types";

const initialState = {
    isFixSideBar: true,
    themeColor: "lightTheme",
    listNote: [],
    currentNote: {
        type: '',
        content: '',
    },
    isNote: false,
    isNewNotify: false,
}

const AdminDashBoardSettingReducer =  (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_THEME: {
            if(payload !== 'lightTheme' && payload !== 'darkTheme'){
                const themeColor = 'custom ' + payload;
                return {...state, themeColor: themeColor};
            }
            else {
                return {...state, themeColor: payload};
            }
        };
        case FIX_SIDE_BAR: {
            return {...state, isFixSideBar: payload};
        };
        case ACTION_SHOW_NOTE: {
            return {...state, currentNote: payload, isNote: true};
        };
        case TURN_OFF_NOTE: {
            const list = [...state.listNote];
            const resetCurrent = {type: '', content: ''};
            const current = {...state.currentNote}
            list.unshift(current);
            // , currentNote: resetCurrent
            return {...state, listNote: list, isNewNotify: true, isNote: false};
        }
        case SEE_NOTIFY: {
            return {...state, isNewNotify: false};
        }
        case DELETE_NOTIFY: {
            return {...state, listNote: []};
        }
    default:
        return state
    }
}

export default AdminDashBoardSettingReducer;
