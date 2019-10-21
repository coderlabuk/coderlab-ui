import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AppContainer } from './app'
import { Landing } from './landing'
import { About } from './about'
import { Contact } from './contact'


export const Routes = () => (
    <Router>
        <AppContainer>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </AppContainer>
    </Router>
)