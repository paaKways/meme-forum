import React from 'react'

import './Progress.css'
export default ({isLoading, percentage = 0}) => (
    <div className={isLoading ? 'active': 'hidden'}>
        <div data-percent={percentage.toString()+'%'} className="ui indicating progress">
        <div className="bar"></div>
        <div className="label">Loading</div>
        </div>
    </div>
    
    
)