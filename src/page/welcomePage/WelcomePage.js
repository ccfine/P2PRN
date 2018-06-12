import React, { Component } from "react"
import { StyleSheet, ImageBackground, Image } from "react-native"

export default class WelcomePage extends Component {
  componentDidMount () {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate("HomePage")
    }, 2000)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    return (
      <ImageBackground source={ require("./img/bg.png") } style={ styles.container } >
        <Image source={ require("./img/title.png") } style={ styles.title } />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    width: 317.5,
    height: 73.5
  }
})