import { MEME_LOADED_SUCCESS, 
    MEME_LOADED_FAIL, MEME_SELECTED } from './types'

const INITIAL_STATE = {
    memesList: [], 
    currentIndex: 0,
    error: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case MEME_LOADED_SUCCESS:
            return {...state,  memesList: state.memesList.concat(action.payload) }
        
        case MEME_LOADED_FAIL:
            return {...state, error: action.error }
        
        case MEME_SELECTED: 
            return {...state, currentIndex: action.payload}

        default:
            return state
    }
}