import {
    GET_COMMENT_FAIL,
    GET_COMMENT_REQUEST,
    GET_COMMENT_SUCCESS,
} from '../redux/constants'

export const commentReducer = (state = { loading: false, comments: [] }, action) => {
    switch (action.type) {
        case GET_COMMENT_REQUEST:
            return { ...state, loading: true, comments: [] }
        case GET_COMMENT_SUCCESS:
            return { ...state, loading: false, comments: action.payload }
        case GET_COMMENT_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
};