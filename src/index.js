import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase/app'

import store from './store'
import routes from './routes'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

class App extends Component {
    constructor (props) {
        super(props)
        firebase.initializeApp(firebaseConfig)
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