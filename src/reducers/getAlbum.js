import {
    GET_ALBUM_FAIL,
    GET_ALBUM_REQUEST,
    GET_ALBUM_SUCCESS,
} from '../redux/constants'

export const albumReducer = (state = { loading: false, albums: [] }, action) => {
    switch (action.type) {
        case GET_ALBUM_REQUEST:
            return { ...state, loading: true, albums: [] }
        case GET_ALBUM_SUCCESS:
            return { ...state, loading: false, albums: action.payload }
        case GET_ALBUM_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
};