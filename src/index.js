import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import routes from './routes'

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
  <App />,
  document.getElementById('id')
)