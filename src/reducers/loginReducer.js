import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_START, LOGGED_OUT } from './types'

const INITIAL_STATE = {
    isLoggedIn: false,
    token: '',
    user: {},
    error: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){

        case LOGIN_SUCCESS:
            return {...state, 
                isLoggedIn: true, 
                token: action.payload.token, 
                user: action.payload.user }

        case LOGIN_FAILED:
            return {...state, error: action.error}
        
        case LOGGED_OUT:
            return INITIAL_STATE

        case LOGIN_START:
            return state

        default:
            return state    
    }

}