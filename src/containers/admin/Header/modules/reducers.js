import { CHANGE_THEME, FIX_SIDE_BAR } from "./types";

const initialState = {
    isFixSideBar: true,
    themeColor: "lightTheme",
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
        }
        case FIX_SIDE_BAR: {
            return {...state, isFixSideBar: payload};
        }
    default:
        return state
    }
}

export default AdminDashBoardSettingReducer;
