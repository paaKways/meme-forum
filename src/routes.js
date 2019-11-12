import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Login, MemeList, MemeSingle } from './pages'

const routes = (
    <Switch>
        <Route path='/meme/:id' component={MemeSingle}></Route>
        <Route path='/newPost' component={MemeList}></Route>
        <Route path='/memes' component={MemeList}></Route>
        <Route exact path='/' component={Login}></Route>
    </Switch>
)

export default routes