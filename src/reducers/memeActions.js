import firebase from 'firebase/app'
import 'firebase/auth'

import fakeMemes from '../services/fakeMemes'

import { MEME_LOADED_SUCCESS, 
    MEME_CREATED_SUCCESS, MEME_CREATED_FAIL, 
    MEME_LOADED_FAIL } from './types'

export const createMeme = ({src, title, author}) => {
    const { currentUser } = firebase.auth()
    console.log(currentUser)

    return (dispatch) => dispatch({ type: MEME_CREATED_SUCCESS})
    /* return (dispatch) => {
        firebase.database().ref('/memes/entries')
        .push({src, title, 
            author: `$(currentUser.email)` })
        .then(() => {
            dispatch({ type: MEME_CREATED_SUCCESS})
        })
        .catch(() => {
            dispatch({ type: MEME_CREATED_FAIL})
        })
    } */
} 

export const loadMemes = () => {
    return (dispatch) => {
        // loaded memes asynchronously

        dispatch({
            type: MEME_LOADED_SUCCESS,
            payload: fakeMemes
        })

    } 
}
