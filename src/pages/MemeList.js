import React, { Component } from 'react'
import { connect } from 'react-redux'

import Meme from '../components/Meme.js'

class MemeList extends Component {
    renderMemes() {
        const memeEntry = {
            title: 'What is a meme?',
            commentsCount: '1200',
            img: 'meme.jpg',
            index: '256'
        }
        return <Meme 
            scrollUp={() => console.log('increment')}
            scrollDown={() => console.log('decrement')}
            memeEntry={memeEntry}/>
    }
    
    render(){
        return(
            <div className="ui container fluid grid stackable">
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
                            { this.renderMemes() }
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(null)(MemeList)