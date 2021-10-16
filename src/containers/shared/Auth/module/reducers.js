import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, MEMORY_USER_LOGIN_FLAG,LOGOUT} from "./types";

const initialState = {
    loading: false,
    isRemem: false,
    currentUser: null,
    token: '',
    note: '',
}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case MEMORY_USER_LOGIN_FLAG:
            let isRemem = true;
            isRemem = !state.isRemem;
            return {...state, isRemem:isRemem};
        case LOGIN_REQUEST:
            return { ...state, loading: true, note: '' }
        case LOGIN_SUCCESS:
            return { ...state, loading: false, currentUser: payload.user, token:payload.token, note:payload.message};
        case LOGIN_FAIL:
            return { ...state, loading: false, note: payload}
        case LOGOUT:
            return {...state, currentUser: null, token: '', note: ''}
        default:
            return state
    }
}

export default AuthReducer;
