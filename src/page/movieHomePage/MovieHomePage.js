import React, { Component } from "react"
import { StyleSheet, ImageBackground } from "react-native"

export default class MovieHomePage extends Component {
  render () {
    return (
      <ImageBackground source={ require("./img/bg.png") } style={ styles.container }>

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})