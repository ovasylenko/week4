import { combineReducers } from 'redux'
import users from './users'

const creteRootReducer = () =>
  combineReducers({
    users
  })

export default creteRootReducer