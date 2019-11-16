import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

//import fakeMemes from '../services/fakeMemes'

import {
    MEME_LOADED_SUCCESS,
    MEME_LOADED_FAIL,
    MEME_CREATED_SUCCESS, 
    MEME_CREATED_FAIL,
    SCROLL_UP, 
    SCROLL_DOWN,
    TOGGLE_MODAL, 
    UPLOAD_BEGIN, 
    PUSH_PROGRESS,
} from './types'


export const createMeme = ({ src, title }) => {
    let db = firebase.firestore()
    let memes = db.collection('memes')
    let t = Math.floor(Date.now() / 1000);

    const { currentUser } = firebase.auth()
    console.log(currentUser)

    return (dispatch, getState) => {
        let { memesList } = getState().memes
        let id = memesList.length + 1
        let newMeme = {
            src, 
            title, 
            id,     
            user: {
                email: `${currentUser.email}`,
                img: `${currentUser.photoURL}`
            },
            timestamp: t,
            comments: []
        }

        memes
        .add(newMeme)
        .then(() => {
            dispatch({ type: MEME_CREATED_SUCCESS })
            dispatch(toggleModal()) 
            dispatch({ type: MEME_LOADED_SUCCESS, payload: newMeme })
        })
        .catch((err) => {
            console.log(MEME_CREATED_FAIL, err)
            dispatch({ type: MEME_CREATED_FAIL, error: err })
            dispatch(toggleModal())
        }) 
    }
}

export const loadMemes = () => {
    return (dispatch) => {
        // loaded memes asynchronously
        let db = firebase.firestore()
        let memes = db.collection('memes')

        memes
        .get()
        .then((snapshot) => {
            if(snapshot) {
                let docs = [], id = 1
                
                snapshot.forEach((doc) => { 
                    let entry = {...doc.data(), id}
                    console.log(entry)
                    docs.push(entry) 
                    id++
                })
                dispatch({ type: MEME_LOADED_SUCCESS, payload: docs })
            }
            else {
                console.log('No such document exists')    
            }
        })
        .catch((err) => {
            dispatch({ type: MEME_LOADED_FAIL, error: err })
        })
    }
}

export const uploadMeme = ({ caption, file }) => {
    return (dispatch) => {
        dispatch({ type: UPLOAD_BEGIN})
        let storageRef = firebase.storage().ref()
        let fileRef = storageRef.child('memes/' + file.name)

        let uploadTask = fileRef.put(file)

        uploadTask.on('state_changed', (snapshot) => {
            console.log('Uploading image to cloud ...')
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress)
            dispatch(pushProgress(progress))
        }, (error) => {
            console.log(error)
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('Recording in database...')
                dispatch(createMeme({
                    src: downloadURL,
                    title: caption
                }))
                console.log('File available at', downloadURL)
            })
        })
    }
}

export const onScrollUp = (index) => {
    return {
        type: SCROLL_UP,
        payload: index
    }
}

export const onScrollDown = (index) => {
    return {
        type: SCROLL_DOWN,
        payload: index
    }
}

export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL,
    }
}

const pushProgress = (percentage) => {
    return {
        type: PUSH_PROGRESS,
        payload: percentage
    }
}
