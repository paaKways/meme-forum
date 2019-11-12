import React from 'react'

const MemeHeader = props => (
    <div id="top" className="ui row border">
        <div id="logo" className="ui circle left aligned">MF</div>
        <img className="ui circle image right aligned" 
            src={props.userImg} />
    </div>
)

export default MemeHeader