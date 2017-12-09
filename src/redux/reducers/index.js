import { combineReducers } from 'redux'
import app from './app'
import getShelfBooks from './getShelfBooks'

export default combineReducers({
  app,
  getShelfBooks
})

