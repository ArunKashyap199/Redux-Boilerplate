import {
    GET_TODO_FAIL,
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
} from '../redux/constants'

export const todoReducer = (state = { loading: false, todos: [] }, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return { ...state, loading: true, todos: [] }
        case GET_TODO_SUCCESS:
            return { ...state, loading: false, todos: action.payload }
        case GET_TODO_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
};