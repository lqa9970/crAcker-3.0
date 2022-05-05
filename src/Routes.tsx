import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Nav from './components/Nav'

const Routes = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/coins/:id" component={Coin} /> */}
    </Switch>
  </>
)

export default Routes
