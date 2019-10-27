import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import routes from './routes'

import Firebase from './components/Firebase/Firebase'

class App extends Component {
    constructor (props) {
        super(props)
        this.firebase = new Firebase()
    }

    render () {
        return (
            <Provider store={store}>

                    <BrowserRouter>
                        {routes}
                    </BrowserRouter> 
            
            </Provider>
        )
    }
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
)