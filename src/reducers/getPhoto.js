import {
    GET_PHOTO_FAIL,
    GET_PHOTO_REQUEST,
    GET_PHOTO_SUCCESS,
} from '../redux/constants'

export const photoReducer = (state = { loading: false, photos: [] }, action) => {
    switch (action.type) {
        case GET_PHOTO_REQUEST:
            return { ...state, loading: true, photos: [] }
        case GET_PHOTO_SUCCESS:
            return { ...state, loading: false, photos: action.payload }
        case GET_PHOTO_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
};