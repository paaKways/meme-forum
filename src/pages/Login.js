import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../components/Login.css' //refactor
import { doGoogleSignIn, checkLoggedIn } from '../reducers/actions'

class Login extends Component {
    componentDidMount(){
        const { checkLoggedIn } = this.props
        checkLoggedIn() 
    }

    render(){
        const { isLoggedIn, doGoogleSignIn, history } = this.props
        return (
            <div id="login">
               <div className="ui message container ">
                            <div className="ui column vertical">
                                <h1>Meme Forum</h1>
                                <p className="lead">Home of the funniest memes</p>
                                
                                {
                                    isLoggedIn 
                                    ? <Link to='/memes' className="ui middle aligned button">Continue to main page >></Link>
                                    : (<button onClick={() => doGoogleSignIn(history)} className="ui labeled icon button">
                                        <i className="icon google-signin"></i>
                                        Sign in with Google
                                    </button> )
                                }
                                   
                            </div>
                        
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({login}) => {
    const { isLoggedIn, checkLoggedIn } = login
    console.log(isLoggedIn)
    return { isLoggedIn, checkLoggedIn }
}


export default connect(
    mapStateToProps, {
        doGoogleSignIn, checkLoggedIn })(Login)