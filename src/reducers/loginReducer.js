import { LOGGED_IN } from './types'

const INITIAl_STATE = {
    isLoggedIn: false
}

export default (state=INITIAl_STATE, action) => {
    switch(action.type){

        case LOGGED_IN:
            return {...state, isLoggedIn: true}
        default:
            return state    
    }

}