import { combineReducers } from 'redux'
import LoginReducer from  './loginReducer'
import MemeListReducer from './memeListReducer'
import memeCreateReducer from './memeCreateReducer'

export default combineReducers({
    login: LoginReducer,
    memes: MemeListReducer,
    create: memeCreateReducer
})