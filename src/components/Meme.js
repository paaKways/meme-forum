import React from 'react'

import './Meme.css'

const Meme = props => {
    const { scrollUp, scrollDown, memeEntry } = props
    return (
        <div className="ui row grid stackable meme">
            <section className="flex-row">
                <div className="memesCount border flex-column">
                <div onClick={scrollUp} id="up" className="caret up-caret"></div>
                    <p>{memeEntry.index}</p>
                <div onClick={scrollDown} className="caret down-caret"></div>
                </div>
                <div className="meme-img">
                    <img src={memeEntry.img} />
                </div>
            </section>
            
            <div className="meme-details">
                <h2 className="ui header meme-title ">{memeEntry.title}</h2>
                <p className="ui lead meme-comment-count">{memeEntry.commentsCount} comments</p>
                <div className="meme-author">
                    <div className="circle"></div>
                    <p> Kofi Babone</p>
                </div>
            </div>
        </div>
            
    )
}

export default Meme