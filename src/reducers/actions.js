import firebase from 'firebase/app'
import 'firebase/auth'

import { INPUT_CHANGED, 
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, LOGGED_OUT } from './types'

export const onInputChange = ({name, value}) => {
    return {
        type: INPUT_CHANGED,
        payload: {
            name,
            value,
        }
    }
}

export const doGoogleSignIn = (history) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_START })
        const provider = new firebase.auth.GoogleAuthProvider()
    
        firebase.auth().signInWithPopup(provider).then((result) => {
            const token  = result.credential.accessToken
            const user = result.user   
            loginUserSuccess(dispatch, {token, user})  
            
        }).catch((err) => {
            const error = {
                errorCode: err.code,
                errorMessage: err.message,
                email: err.email,
                credential: err.credential
            }
            loginUserFailed(dispatch, error)
            history.push('/memes')
        })
    }
}

export const doGoogleSignOut = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(() => {
            console.log('Signed out')
            dispatch({ type: LOGGED_OUT })
        }).catch((err) => {
            console.log(err)
        })
    }
}

const loginUserSuccess = (dispatch, {token, user}) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: {token, user}
    })
    //history.push('/memes')
}

const loginUserFailed = (dispatch, error) => {
    dispatch({ type: LOGIN_FAILED, error })
}
