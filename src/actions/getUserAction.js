import axios from 'axios'
import {
    GET_USERS_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
} from '../redux/constants'

import { handleError } from '../helpers/index'
export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_USERS_REQUEST,
        })
        const {
            data
        } = await axios.get(`https://jsonplaceholder.typicode.com/users`)

        dispatch({
            type: GET_USERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        handleError(error)
        dispatch({
            type: GET_USERS_FAIL,
            payload: error,
        })
        console.error('getUser === ', error)
    }
}
