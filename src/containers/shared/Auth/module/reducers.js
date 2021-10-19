import { LOGIN_FAIL, AUTH_REQUEST, LOGIN_SUCCESS, MEMORY_USER_LOGIN_FLAG,LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL} from "./types";

const initialState = {
    loading: false,
    isRemem: true,
    currentUser: null,
    token: '',
    note: '',
    isError: false,
    isRegisterSuccess: false,
}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case MEMORY_USER_LOGIN_FLAG:
            let isRemem = true;
            isRemem = !state.isRemem;
            return {...state, isRemem:isRemem};
        case AUTH_REQUEST:
            return { ...state, loading: true, note: ''}
        case LOGIN_SUCCESS:
            return { ...state, loading: false, isRegisterSuccess: false, currentUser: payload.user, token:payload.token, note:payload.message, isError: false};
        case LOGIN_FAIL:
            return { ...state, loading: false, note: payload, isError: true};
        case LOGOUT:
            return {...state, currentUser: null, token: '', isRegisterSuccess: false, note: ''};
        case REGISTER_SUCCESS:
            return {...state, loading: false, note: 'Đăng ký thành công', isRegisterSuccess: payload, isError: false};
        case REGISTER_FAIL:
            return {...state, loading: false, note: 'Đăng ký không thành công', isRegisterSuccess: payload, isError: true};
        default:
            return state
    }
}

export default AuthReducer;
