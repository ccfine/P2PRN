import React, { Component } from "react"
import SplashScreen from "react-native-splash-screen"

export default class WelcomePage extends Component {
  componentDidMount () {
    this.timer = setTimeout(() => {
      SplashScreen.hide()
      this.props.navigation.navigate("HomePage")
    }, 1000)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    return null
  }
}