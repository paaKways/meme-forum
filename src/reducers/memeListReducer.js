import {
    MEME_LOADED_SUCCESS,
    MEME_LOADED_FAIL, 
    MEME_SELECTED,
    SCROLL_UP, 
    SCROLL_DOWN, 
    TOGGLE_MODAL,
} from './types'

const INITIAL_STATE = {
    memesList: [],
    currentIndex: 0,
    error: '',
    modalIsActive: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEME_LOADED_SUCCESS:
            console.log(MEME_LOADED_SUCCESS, action.payload)
            return { ...state, memesList: state.memesList.concat(action.payload) }

        case MEME_LOADED_FAIL:
            console.log(MEME_LOADED_FAIL, action.error)
            return { ...state, error: action.error }

        case MEME_SELECTED:
            return { ...state, currentIndex: action.payload }

        case SCROLL_UP:
            let i = action.payload === 0 ? 0 : action.payload - 1
            return { ...state, currentIndex: i }

        case SCROLL_DOWN:
            let lastIndex = state.memesList.length - 1
            let j = action.payload === lastIndex ? lastIndex : action.payload + 1
            return { ...state, currentIndex: j }

        case TOGGLE_MODAL:
            console.log(state.modalIsActive)
            return { ...state, modalIsActive: !state.modalIsActive }

        default:
            return state
    }
}