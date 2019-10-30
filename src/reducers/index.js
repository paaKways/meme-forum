import { combineReducers } from 'redux'
import LoginReducer from  './loginReducer'
import MemeListReducer from './memeListReducer'

export default combineReducers({
    login: LoginReducer,
    memes: MemeListReducer,
})