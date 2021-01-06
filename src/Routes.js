import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Recipes from './components/Recipes'
import PageNotFound from './components/PageNotFound'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/recipes" component={Recipes} />
            <Route component={PageNotFound} />
        </Switch>
    )
}
