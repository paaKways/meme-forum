import React, { Component } from 'react'
import { connect } from 'react-redux'

import Meme from '../components/Meme'
import Modal from '../components/Modal'
import MemeHeader from '../components/MemeHeader'
import Progress from '../components/Progress'

import {
    loadMemes, 
    onScrollUp, 
    onScrollDown,
    uploadMeme, 
    toggleModal
} from '../reducers/memeActions'

import {
    checkLoggedIn, 
    doGoogleSignOut,
    onInputChange, 
    onFileAdded
} from '../reducers/actions'


class MemeList extends Component {
    componentDidMount() {
        const { history, checkLoggedIn, loadMemes, toggleModal } = this.props
        checkLoggedIn()
        loadMemes()

        if (history.location.pathname === '/newPost') {
            toggleModal()
        }

        this.returnToHome = this.returnToHome.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    returnToHome() {
        const { history } = this.props
        history.push('/')
    }

    handleUpload(e) {
        e.preventDefault()

        let { caption, file, uploadMeme } = this.props
        console.log(caption, file)
        uploadMeme({ caption, file })
    }

    render() {
        const { 
            memesList, 
            onInputChange, 
            user,
            currentIndex, 
            doGoogleSignOut,
            onScrollDown,
            onScrollUp, 
            toggleModal,
            caption, 
            onFileAdded, 
            isLoading,
            percentage } = this.props

        // const userImg = memesList.length ? memesList[currentIndex].user.img : null

        return (
            <div className="ui container fluid grid stackable">
                <Modal>
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="ui active modal">
                        <div className="ui header">New Meme</div>
                        <div className="ui row content">
                            <Progress isLoading={isLoading} percentage={percentage}/>
                            <form id="meme-upload" className="ui form">
                                <label htmlFor="file">File</label>
                                <input onChange={(e) => onFileAdded(e.target.files[0])} className="ui input" name="file" type="file" />

                                <label htmlFor="caption">Caption</label>
                                <input onChange={(e) => onInputChange(e.target)} value={caption} name="caption" placeholder="Meme Caption" type="text" />

                                <div className="ui container">
                                    <button onClick={this.handleUpload} className="ui meme-yellow button">Upload meme</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>

                <MemeHeader userImg={user.photoURL} />
                <div className="ui row border">
                    <div className="column">
                        <div id="upload-btn-row" className="ui right border aligned row">
                            <button onClick={toggleModal} id="upload-btn" className="ui button meme-yellow">Upload New Meme</button>
                            <button onClick={() => doGoogleSignOut(this.returnToHome)} className="ui meme-yellow button">Logout</button>

                        </div>
                        <div id="content" className="ui border row">
                            {memesList.length
                                ? <Meme memes={memesList}
                                        onScrollUp={onScrollUp}
                                        onScrollDown={onScrollDown}
                                        indexOfVisible={currentIndex} />

                                : <p>No memes yet</p>}

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = ({ memes, login, create }) => {
    const { memesList, currentIndex, error } = memes
    const { isLoggedIn, user } = login
    const { caption, file, isLoading, percentage } = create

    return {
        memesList, 
        currentIndex,
        user, 
        error, 
        isLoggedIn,
        caption, 
        file, 
        isLoading,
        percentage
    }
}


export default connect(mapStateToProps,
    {
        loadMemes, 
        onScrollUp, 
        doGoogleSignOut,
        checkLoggedIn, 
        onScrollDown, 
        toggleModal,
        uploadMeme, 
        onInputChange, 
        onFileAdded
    })(MemeList)