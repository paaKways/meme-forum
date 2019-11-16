import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import './Meme.css'

const Meme = props => {
    const { indexOfVisible, memes, onScrollUp, onScrollDown } = props
    const selected = memes[indexOfVisible]

    return (

        <div className="ui row bordr grid stackable meme">
            <section id="meme-left" className="bordr flex-row">
                <div className="memes-count-container">
                    <div className="item border flex-column">
                        <div onClick={() => onScrollUp(indexOfVisible)} className="caret up-caret"></div>
                        <p className="memes-count">{selected.id}</p>
                        <div onClick={() => onScrollDown(indexOfVisible)} className="caret down-caret"></div>
                    </div>
                </div>

                <Link to={"/meme/" + selected.id}>
                    <div className="border item meme-img">
                        <img src={selected.src} />
                    </div>
                </Link>
            </section>
            
            <div className="bordr meme-details">
                <h2 className="ui header meme-title">{selected.title}</h2>
                <p className="ui lead meme-comment-count">{selected.comments.length} comments</p>
                
                <div className="flex-row meme-author"> <img className="circle image" src={selected.user.img} />
                    <p>{moment(selected.timestamp, 'X').startOf('hour').fromNow()}</p></div>    
                     
                
            </div>
        </div>
            
    )
}

export default Meme