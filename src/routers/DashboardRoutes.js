import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { MarvelScreen } from '../Components/Marvel/MarvelScreen'
import { Navbar } from '../Components/UI/Navbar'
import { HeroeScreen } from '../Components/heroes/HeroeScreen'
import { DCScreen } from '../Components/Dc/DCScreen'
import { SearchScreen } from '../Components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroeScreen } />
                    <Route exact path="/dc" component={ DCScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    

                    <Redirect to="/marvel" />
                </Switch>
            </div>


        </>
    )
}
