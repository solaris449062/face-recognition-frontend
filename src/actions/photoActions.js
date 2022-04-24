import axios from 'axios'
import {
    PHOTO_LIST_REQUEST,
    PHOTO_LIST_SUCCESS,
    PHOTO_LIST_FAIL,

    PHOTO_DETAILS_REQUEST,
    PHOTO_DETAILS_SUCCESS,
    PHOTO_DETAILS_FAIL
} from '../constants/photoConstants'


export const listPhotos = () => async (dispatch) => {

    try {
        console.log(dispatch)
        dispatch({ type: PHOTO_LIST_REQUEST })
        const { data } = await axios.get('/api/photos/')
        dispatch({
            type: PHOTO_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PHOTO_LIST_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        })
    }
}

export const listPhotoDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PHOTO_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/photos/${id}`)
        dispatch({
            type: PHOTO_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PHOTO_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        })
    }
}