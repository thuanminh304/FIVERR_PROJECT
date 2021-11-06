import { GET_DETAIL_TYPE_MAINJOB } from "./type"

const initialState = {
    listDetailTypeMainjob:{}
}

const profileUserReducer=(state = initialState, { type, payload }) => {
    switch (type) {

    case GET_DETAIL_TYPE_MAINJOB:
        return { ...state ,listDetailTypeMainjob: payload}

    default:
        return state
    }
}
 
export default profileUserReducer