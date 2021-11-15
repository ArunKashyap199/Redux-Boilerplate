import {
    GET_POST_FAIL,
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
} from '../redux/constants'

export const postReducer = (state = { loading: false, posts: [] }, action) => {
    switch (action.type) {
        case GET_POST_REQUEST:
            return { ...state, loading: true, posts: [] }
        case GET_POST_SUCCESS:
            return { ...state, loading: false, posts: action.payload }
        case GET_POST_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
};