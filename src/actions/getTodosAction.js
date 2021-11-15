import axios from 'axios'
import { API_BASE_URL, handleError } from '../helpers/index'
import {
    GET_TODO_FAIL,
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS
} from '../redux/constants'

export const getTodo = () => async (dispatch) => {
    try {
        dispatch({ type: GET_TODO_REQUEST })
        const { data } = await axios.get(` ${API_BASE_URL}/todos`)
        dispatch({ type: GET_TODO_SUCCESS, payload: data })
    } catch (error) {
        handleError(error)
        dispatch({ type: GET_TODO_FAIL, payload: error })
        console.error('getTodos === ', error)
    }
}