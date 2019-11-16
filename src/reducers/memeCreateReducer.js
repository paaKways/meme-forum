import { 
    UPLOAD_MEME_SUCCESS, 
    UPLOAD_MEME_FAIL, 
    UPLOAD_BEGIN,
    PUSH_PROGRESS,
    FILE_ADDED, 
    INPUT_CHANGED, 
    MEME_CREATED_FAIL, 
    MEME_CREATED_SUCCESS,
 } from './types'

const INITIAL_STATE = {
    caption: '',
    file: null,
    error: '',
    isLoading: false,
    url: '',
    percentage: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPLOAD_MEME_SUCCESS:
            return { ...state, url: action.url }
        
        case UPLOAD_BEGIN:
            return {...state, isLoading: true }
       
        case INPUT_CHANGED:
            return { ...state, [action.payload.name]: action.payload.value }

        case PUSH_PROGRESS:
            return {...state, percentage: action.payload}
        
        case FILE_ADDED:
            return { ...state, file: action.file }

        case UPLOAD_MEME_FAIL:
            return { ...state, error: action.error }

        case MEME_CREATED_FAIL:
            console.log(MEME_CREATED_FAIL)
            return { ...state, error: action.error }

        case MEME_CREATED_SUCCESS:
            console.log(MEME_CREATED_SUCCESS)
            return { ...state, error: ''}

        default:
            return state
    }
}