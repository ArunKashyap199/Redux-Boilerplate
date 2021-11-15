import axios from 'axios'
import { API_BASE_URL, handleError } from '../helpers/index'
import {
    GET_USERS_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS
} from '../redux/constants'

export const getUser = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST })
        const { data } = await axios.get(` ${API_BASE_URL}/users`)
        dispatch({ type: GET_USERS_SUCCESS, payload: data })
    } catch (error) {
        handleError(error)
        dispatch({ type: GET_USERS_FAIL, payload: error })
        console.error('getUser === ', error)
    }
}