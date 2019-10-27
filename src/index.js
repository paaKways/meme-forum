import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import routes from './routes'

import Firebase, { FirebaseContext } from './components/Firebase'

const App = () => {
    return (
        <Provider store={store}>

                <BrowserRouter>
                    {routes}
                </BrowserRouter> 
           
        </Provider>
    )
}
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
  document.getElementById('root')
)