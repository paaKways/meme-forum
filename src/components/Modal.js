import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from '../store'
import { connect, Provider } from 'react-redux'

import './Modal.css'
//import { toggleModal } from '../reducers/memeActions'

class Modal extends Component{
    componentDidMount() {
        this.modalTarget = document.createElement('div')
        //this.modalTarget.className = 'ui modal'
        document.body.appendChild(this.modalTarget)
        this._render()
    }

    componentDidUpdate() {
        this._render()
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget)
        document.body.removeChild(this.modalTarget)
    }

    _render() {
        const { modalIsActive } = this.props
        const activeClass = modalIsActive ? ' active': ''
        
        ReactDOM.render(
            <Provider store={store}>
                <div className={"modal-container"+activeClass}>
                    {this.props.children} 
                </div> 
            </Provider>,
            this.modalTarget 
        )
    }

    render() {
        return (
            <noscript />
        )
    }
}    
  
const mapStateToProps = state => {
    const { modalIsActive } = state.memes
    return { modalIsActive }
}

export default connect(mapStateToProps)(Modal)