import axios from 'axios'
import { API_BASE_URL, handleError } from '../helpers/index'
import {
    GET_ALBUM_FAIL,
    GET_ALBUM_REQUEST,
    GET_ALBUM_SUCCESS
} from '../redux/constants'

export const getAlbum = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALBUM_REQUEST })
        const { data } = await axios.get(` ${API_BASE_URL}/albums`)
        dispatch({ type: GET_ALBUM_SUCCESS, payload: data })
    } catch (error) {
        handleError(error)
        dispatch({ type: GET_ALBUM_FAIL, payload: error })
        console.error('getUser === ', error)
    }
}