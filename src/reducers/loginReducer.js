import { INPUT_CHANGED } from './types'

const INITIAl_STATE = {
    username: '',
    password: '',
    isLoggedIn: false
}

export default (state=INITIAl_STATE, action) => {
    switch(action.type){

        case INPUT_CHANGED:
            return {...state, [action.payload.name]: action.payload.value}
    }

}