import React, { Component } from 'react'
import { connect } from 'react-redux'

import { onInputChange } from '../reducers/actions'

class Login extends Component {
   

    render(){
        const { onInputChange, username, password, isLoggedIn } = this.props
        return(
            <div className="ui container" id="login">
                <div className="ui row middle aligned center aligned">
                    <input className="ui input" value={username} type="text" name="username" onChange={onInputChange} />
                    <input className="ui input" value={password} type="password" name="password" onChange={onInputChange} />   
                </div>
            </div>
          )
    }

}

const mapStateToProps = ({login}) => {
    const { username, password, isLoggedIn } = login
    return { username, password, isLoggedIn }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onInputChange: (e) => dispatch(onInputChange(e.target))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)