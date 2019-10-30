import React from 'react'

import './Meme.css'

const Meme = props => {
    const { indexOfVisible, memes } = props
    const selected = memes[indexOfVisible]
    
    return (
        <div className="ui row grid stackable meme">
            <section id="meme-left" className="border flex-row">
                <div className="item memesCount border flex-column">
                    <div id="up" className="caret up-caret"></div>
                        <p>{indexOfVisible + 1}</p>
                    <div  className="caret down-caret"></div>
                </div>
                <div className="item meme-img">
                    <img src={selected.src} />
                </div>
            </section>
            
            <div className="meme-details">
                <h2 className="ui header meme-title">{selected.title}</h2>
                <p className="ui lead meme-comment-count">{selected.comments.length} comments</p>
                <div className="meme-author">
                    
                        <img  className="circle" src={selected.author.img} />
                        <p>{selected.timestamp}</p>
                </div>
            </div>
        </div>
            
    )
}

export default Meme