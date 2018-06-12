import React, { Component } from "react"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import reducer from "./src/redux/reducer.js"
import { Navigator } from "./src/navigation/navigation.js"

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error, info) {
    this.setState({
      hasError: true
    })
  }

  render () {
    return this.state.hasError? null: (
      <Provider store={ store }>
        <Navigator />
      </Provider>
    )
  }
}