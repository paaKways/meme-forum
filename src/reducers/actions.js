import firebase from 'firebase/app'
import 'firebase/auth'

import { 
    INPUT_CHANGED, LOGIN_START, LOGIN_SUCCESS, 
    LOGIN_FAILED, LOGGED_OUT, FILE_ADDED } from './types'


export const onInputChange = (payload) => {
    return {
        type: INPUT_CHANGED,
        payload
    }
}

export const onFileAdded = (file) => {
    return {
        type: FILE_ADDED,
        file
    }
}

export const doGoogleSignIn = history => {
    return (dispatch) => {
        dispatch({ type: LOGIN_START })
        const provider = new firebase.auth.GoogleAuthProvider()
    
        firebase.auth().signInWithPopup(provider).then((result) => {
            //const token  = result.credential.accessToken
            const { user } = result   
            loginUserSuccess(dispatch, user)  
            history.push('/memes')
        }).catch((err) => {
            const error = {
                errorCode: err.code,
                errorMessage: err.message,
                email: err.email,
                credential: err.credential
            }
            loginUserFailed(dispatch, error)
            
        })
    }
}

export const doGoogleSignOut = callback => {
 
    return (dispatch) => {
        firebase.auth().signOut().then(() => {
            console.log('Signed out')
            dispatch({ type: LOGGED_OUT })
            callback()

        }).catch((err) => {
            console.log(err)
        })
    }
}

export const checkLoggedIn = () => {
    return(dispatch) => {
        //check logged
        console.log('Checking if logged in..')
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                loginUserSuccess(dispatch, user)
               
            }else{
                loginUserFailed(dispatch, 'Not logged in')
                
            }
        })      
    }
}

const loginUserSuccess = (dispatch, user) => {
    console.log('User is logged IN..')
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    })

}

const loginUserFailed = (dispatch, error) => {
    console.log('User is logged OUT..')
    dispatch({ type: LOGIN_FAILED, error })
  
}
