import { combineReducers } from 'redux'

import favorite from './favorite'
import ui from './ui'
import coin from './coin'

const createRootReducer = () =>
  combineReducers({
    favorite,
    ui,
    coin,
  })

export default createRootReducer
