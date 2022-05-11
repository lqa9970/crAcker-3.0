import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CoinPage from './pages/CoinPage'
import Nav from './components/Nav'

const Routes = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={CoinPage} />
    </Switch>
  </>
)

export default Routes
