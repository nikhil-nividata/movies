import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../components/homepage'
import Movie from '../components/movie'

function router({ theme }) {
    return (

        <Switch>
            <Route path="/"
                exact
                render={
                    (props) => <HomePage {...props} theme={theme} />
                } />
            <Route exact path="/movie/:id"
                render={
                    (props) => <Movie {...props} theme={theme} />
                }
            />
        </Switch>

    )
}

export default router
