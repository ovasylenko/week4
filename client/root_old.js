import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'
import Users from './my-users'

const Root2 = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default Root2
