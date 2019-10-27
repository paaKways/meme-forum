import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../components/Login.css' //refactor



class Login extends Component {
    render(){
        const { isLoggedIn } = this.props
        return (
            <div id="login" className="ui container fluid">
                <div className="ui row two column centered grid" id="login">
                    <div className="center aligned middle aligned column">
                        <div className="ui message">
                            <button className="ui button">Sign in with Google</button>    
                        </div>
                    </div>  
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({login}) => {
    const { isLoggedIn } = login
    return { isLoggedIn }
}

/* const mapDispatchToProps = (dispatch) => {
    return { 
        onInputChange: (e) => dispatch(onInputChange(e.target))
    }
} */

export default connect(mapStateToProps)(Login)