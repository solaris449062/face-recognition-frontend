import {
    PHOTO_LIST_REQUEST,
    PHOTO_LIST_SUCCESS,
    PHOTO_LIST_FAIL,

    PHOTO_DETAILS_REQUEST,
    PHOTO_DETAILS_SUCCESS,
    PHOTO_DETAILS_FAIL
} from '../constants/photoConstants'


export const photoListReducer = (state = { photos: []}, action) => {
    switch(action.type) {
        case PHOTO_LIST_REQUEST:
            return { loading: true, photos: [] }
        
        case PHOTO_LIST_SUCCESS:
            return { loading: false, photos: action.payload }

        case PHOTO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const photoDetailsReducer = (state = { photo: {faces: []}}, action) => {
    switch(action.type) {
        case PHOTO_DETAILS_REQUEST:
            return { loading: true, ...state }
        
        case PHOTO_DETAILS_SUCCESS:
            return { loading: false, photo: action.payload }

        case PHOTO_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}