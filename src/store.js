import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { photoListReducer, photoDetailsReducer } from './reducers/photoReducers'
import { userLoginReducer } from './reducers/userReducers'


const reducer = combineReducers({ // reducers to be added later as key:val pairs
    photoList: photoListReducer,
    photoDetails: photoDetailsReducer,
    userLogin: userLoginReducer,
}) 

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk] // more to be added later

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)


export default store
