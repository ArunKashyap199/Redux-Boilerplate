import {
    GET_USERS_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
} from '../constants'

export const userReducer = (state = { loading: false, plans: [] }, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return { ...state, loading: true, plans: [] }
        case GET_USERS_SUCCESS:
            return { ...state, loading: false, plans: action.payload }
        case GET_USERS_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
};