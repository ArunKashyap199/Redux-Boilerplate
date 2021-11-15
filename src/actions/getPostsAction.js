import axios from 'axios'
import { API_BASE_URL, handleError } from '../helpers/index'
import {
    GET_PHOTO_FAIL,
    GET_PHOTO_REQUEST,
    GET_PHOTO_SUCCESS
} from '../redux/constants'

export const getPost = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PHOTO_REQUEST })
        const { data } = await axios.get(` ${API_BASE_URL}/photos`)
        dispatch({ type: GET_PHOTO_SUCCESS, payload: data })
    } catch (error) {
        handleError(error)
        dispatch({ type: GET_PHOTO_FAIL, payload: error })
        console.error('getPhots === ', error)
    }
}