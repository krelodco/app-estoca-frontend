import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyle from './styles/global'

import 'rsuite/dist/styles/rsuite-default.css'

import Sign from './pages/Sign'
import Home from './pages/Home'

const App = () => {
    return(
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/signin" component={ Sign } />
                <Route exact path="/signup" component={ Sign } />
                <Route exact path="/home" component={ Home } />
            </Switch>
        </Router>
    )
}

export default App
