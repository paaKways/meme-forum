import React, { Component } from 'react'
import { connect } from 'react-redux'

import Meme from '../components/Meme.js'
import Modal from '../components/Modal.js'

import { loadMemes } from  '../reducers/memeActions'

class MemeList extends Component {
    componentDidMount() {
        if(!this.props.isLoggedIn) this.props.history.push('/')
        else this.props.loadMemes()
    }

    render() {
        const { memesList, currentIndex, error } = this.props
        console.log(this.props.memesList)
        return (    
            <div className="ui container fluid grid stackable">
                <Modal>  
                    <div className="ui header">Header</div>
                    <div className="content">
                        content
                    </div>            
                </Modal>
                <div id="top" className="ui row border">
                    <div id="logo" className="ui circle left aligned">MF</div>
                    <div className="ui circle right aligned">MF</div>
                </div>
                <div className="ui row border">
                    <div className="column">
                        <div id="upload-btn-row" className="ui right border aligned row">
                            <button id="upload-btn" className="ui button">Upload New Meme</button>
                        </div>
                        <div id="content" className="ui border row">
                            {  this.props.memesList.length > 0 
                                && <Meme memes={memesList} 
                                        indexOfVisible={currentIndex} /> }
                            
                        </div>
                    </div>
                </div>
            </div>   
          
        )
    }
}

const mapStateToProps = ({memes, login}) => {
    const { memesList, currentIndex, error } = memes
    const { isLoggedIn } = login
    return { memesList, currentIndex, error, isLoggedIn }
}


export default connect(mapStateToProps,
    { loadMemes })(MemeList)