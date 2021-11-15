import axios from 'axios'
import { API_BASE_URL, handleError } from '../helpers/index'
import {
    GET_COMMENT_FAIL,
    GET_COMMENT_REQUEST,
    GET_COMMENT_SUCCESS
} from '../redux/constants'

export const getComment = () => async (dispatch) => {
    try {
        dispatch({ type: GET_COMMENT_REQUEST })
        const { data } = await axios.get(` ${API_BASE_URL}/comments`)
        dispatch({ type: GET_COMMENT_SUCCESS, payload: data })
    } catch (error) {
        handleError(error)
        dispatch({ type: GET_COMMENT_FAIL, payload: error })
        console.error('getComments === ', error)
    }
}