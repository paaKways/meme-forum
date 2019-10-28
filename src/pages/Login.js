import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import '../components/Login.css' //refactor
import { doGoogleSignIn } from '../reducers/actions'

class Login extends Component {

    render(){
        const { isLoggedIn, doGoogleSignIn } = this.props
        if (isLoggedIn) return <Redirect to="/memes" />
        return (
            <div className="ui container fluid">
                <div className="ui row two column centered grid" id="login">
                    <div className="center aligned middle aligned column">
                        <div className="ui message">
                            <div className="ui column vertical">
                                <h1>Meme Forum</h1>
                                <p className="lead">Home of the funniest memes</p>
                                
                                <button onClick={doGoogleSignIn} className="ui labeled icon middle aligned button">
                                    <i className="icon google-signin"></i>
                                    Sign in with Google
                                </button>    
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({login}) => {
    const { isLoggedIn } = login
    console.log(isLoggedIn)
    return { isLoggedIn }
}


export default connect(
    mapStateToProps, {
        doGoogleSignIn })(Login)